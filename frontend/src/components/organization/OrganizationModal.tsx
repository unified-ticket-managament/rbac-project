"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";

import { EmptyState, ErrorState } from "@/components/shared/stats";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { organizationService } from "@/services";
import { useAuthStore } from "@/store/auth-store";

import { OrganizationChart } from "./OrganizationChart";
import { buildHierarchy, HierarchyNode } from "./hierarchy-builder";

interface OrganizationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrganizationModal({
  open,
  onOpenChange,
}: OrganizationModalProps) {
  const currentUserId = useAuthStore((s) => s.user?.user_id);
  const [selectedNode, setSelectedNode] = useState<HierarchyNode | null>(null);

  const chartQuery = useQuery({
    queryKey: ["organization-chart"],
    queryFn: organizationService.getMyChart,
    enabled: open,
  });

  useEffect(() => {
    if (!open) setSelectedNode(null);
  }, [open]);

  const hierarchy =
    chartQuery.data && currentUserId
      ? buildHierarchy(chartQuery.data, currentUserId)
      : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] w-[95vw] max-w-5xl flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Organization Chart</DialogTitle>
        </DialogHeader>

        {chartQuery.isLoading && (
          <div className="flex flex-col items-center gap-4 py-10">
            <Skeleton className="h-24 w-56 rounded-xl" />
            <div className="flex gap-4">
              <Skeleton className="h-24 w-56 rounded-xl" />
              <Skeleton className="h-24 w-56 rounded-xl" />
            </div>
          </div>
        )}

        {chartQuery.isError && (
          <ErrorState message="Failed to load the organization chart." />
        )}

        {chartQuery.isSuccess && !hierarchy && (
          <EmptyState
            title="No organization data"
            description="We couldn't find your position in the organization chart."
          />
        )}

        {hierarchy && (
          <div className="flex flex-1 flex-col gap-4 overflow-hidden md:flex-row">
            <div className="flex-1 overflow-auto rounded-lg border border-border bg-muted/20 p-8">
              <OrganizationChart
                node={hierarchy}
                selectedNodeId={selectedNode?.user_id ?? null}
                onSelectNode={(node) =>
                  setSelectedNode((prev) =>
                    prev?.user_id === node.user_id ? null : node
                  )
                }
              />
            </div>

            {selectedNode && (
              <Card className="w-full shrink-0 md:w-72">
                <CardHeader className="flex-row items-start justify-between space-y-0">
                  <CardTitle className="text-base">Details</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => setSelectedNode(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {selectedNode.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">
                        {selectedNode.name}
                        {selectedNode.isMe && (
                          <Badge className="ml-2 align-middle">ME</Badge>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {selectedNode.email}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Role</span>
                      <Badge variant="secondary">{selectedNode.role}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge
                        variant={
                          selectedNode.is_active ? "success" : "destructive"
                        }
                      >
                        {selectedNode.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </div>

                    {selectedNode.department && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Department
                        </span>
                        <span>{selectedNode.department}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Direct reports
                      </span>
                      <span>{selectedNode.children.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
