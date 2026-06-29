from uuid import UUID

from fastapi import HTTPException, status

from shared_models.models import User

from app.auth.jwt import (
    create_access_token,
    create_refresh_token,
    decode_token,
)
from app.auth.password import (
    get_password_hash,
    verify_password,
)
from app.repositories.user_repository import UserRepository
from app.schemas.auth import (
    ChangePasswordRequest,
    CurrentUser,
    LoginRequest,
    RefreshTokenRequest,
    TokenResponse,
)

class AuthService:
    """
    Handles authentication and authorization business logic.
    """

    def __init__(
        self,
        user_repository: UserRepository,
    ):
        self.user_repository = user_repository

    # --------------------------------------------------
    # Login
    # --------------------------------------------------

    async def login(
        self,
        login_data: LoginRequest,
    ) -> TokenResponse:

        user = await self.user_repository.get_by_email(
            login_data.email,
        )

        if user is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password.",
            )

        if not user.is_active:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="User account is inactive.",
            )

        if not verify_password(
            login_data.password,
            user.password_hash,
        ):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password.",
            )

        access_token = create_access_token(
            user_id=user.user_id,
            email=user.email,
            role=user.role.name,
        )

        refresh_token = create_refresh_token(
            user_id=user.user_id,
        )

        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
        )

    # --------------------------------------------------
    # Refresh Token
    # --------------------------------------------------

    async def refresh_token(
        self,
        request: RefreshTokenRequest,
    ) -> TokenResponse:

        try:
            payload = decode_token(
                request.refresh_token,
            )

        except ValueError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired refresh token.",
            )

        if payload.get("type") != "refresh":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token.",
            )

        user_id = payload.get("user_id")

        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token payload.",
            )

        user = await self.user_repository.get_by_id(
            UUID(user_id),
        )

        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found.",
            )

        if not user.is_active:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="User account is inactive.",
            )

        access_token = create_access_token(
            user_id=user.user_id,
            email=user.email,
            role=user.role.name,
        )

        refresh_token = create_refresh_token(
            user_id=user.user_id,
        )

        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
        )

    # --------------------------------------------------
    # Current User
    # --------------------------------------------------

    async def get_current_user(
        self,
        user: User,
    ) -> CurrentUser:

        return CurrentUser(
            user_id=user.user_id,
            name=user.name,
            email=user.email,
            role=user.role.name,
        )
    
    # --------------------------------------------------
    # Change Password
    # --------------------------------------------------

    async def change_password(
        self,
        user: User,
        password_data: ChangePasswordRequest,
    ) -> None:
        """
        Change the password for the authenticated user.
        """

        # Verify old password
        if not verify_password(
            password_data.old_password,
            user.password_hash,
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Old password is incorrect.",
            )

        # Prevent using the same password
        if verify_password(
            password_data.new_password,
            user.password_hash,
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="New password must be different from the old password.",
            )

        # Update password
        user.password_hash = get_password_hash(
            password_data.new_password,
        )

        await self.user_repository.update(user)