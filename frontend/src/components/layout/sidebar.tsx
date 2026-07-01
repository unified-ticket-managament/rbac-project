"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Shield,
  KeyRound,
  ClipboardList,
  UserCircle,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { authService } from "@/services";
import { useAuthStore } from "@/store/auth-store";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Roles",
    href: "/roles",
    icon: Shield,
  },
  {
    title: "Permissions",
    href: "/permissions",
    icon: KeyRound,
  },
  {
    title: "Audit Logs",
    href: "/audit-logs",
    icon: ClipboardList,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: UserCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    authService.logout();
    logout();
    router.push("/login");
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="border-b border-border p-6">
        <h1 className="text-2xl font-bold tracking-wide">
          RBAC
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Enterprise Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
              >
                <Button
                  variant={active ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                >
                  <Icon className="h-5 w-5" />

                  {item.title}
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <Button
          variant="destructive"
          className="w-full justify-start gap-3"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />

          Logout
        </Button>
      </div>
    </aside>
  );
}