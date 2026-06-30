"use client";

import { Shield, User, Users } from "lucide-react";

import { PageHeader } from "@/components/layout/dashboard-shell";
import { StatCard } from "@/components/shared/stats";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/store/auth-store";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  const permissions = user?.permissions ?? [];

  return (
    <div className="space-y-8">
      <PageHeader
        title={`Welcome, ${user?.name ?? "Manager"}`}
        description="Enterprise Role Based Access Control Dashboard"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Current Role"
          value={user?.role ?? "-"}
          subtitle="Authenticated Role"
        />

        <StatCard
          title="Permissions"
          value={permissions.length}
          subtitle="Assigned Permissions"
        />

        <StatCard
          title="Status"
          value="Active"
          subtitle="Logged In"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              User Information
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Name
              </p>
              <p className="font-medium">
                {user?.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Email
              </p>
              <p className="font-medium">
                {user?.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Role
              </p>

              <Badge>
                {user?.role}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Permissions
            </CardTitle>
          </CardHeader>

          <CardContent>
            {permissions.length === 0 ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                Permissions will be loaded from the backend in the next phase.
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {permissions.map((permission) => (
                  <Badge
                    key={permission}
                    variant="secondary"
                  >
                    {permission}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}