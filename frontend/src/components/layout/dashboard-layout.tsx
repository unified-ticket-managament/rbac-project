"use client";

import { ReactNode, useState } from "react";
import { Menu } from "lucide-react";

import { Sidebar } from "./sidebar";
import { TopNavbar } from "./top-navbar";

import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-muted/30">

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">

          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="relative z-50">
            <Sidebar />
          </div>

        </div>
      )}

      {/* Main Section */}

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Mobile Header */}

        <div className="flex h-14 items-center border-b bg-background px-4 lg:hidden">

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <h1 className="ml-3 text-lg font-semibold">
            Enterprise RBAC
          </h1>

        </div>

        {/* Desktop Navbar */}

        <TopNavbar />

        {/* Content */}

        <main className="flex-1 overflow-y-auto p-6">

          {children}

        </main>

      </div>

    </div>
  );
}
