"use client";

import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-40 text-copy-faint text-sm">
      No {label} yet.
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-12 left-0 z-50 h-[calc(100vh-3rem)] w-72 flex flex-col bg-surface border-r border-surface-border transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-surface-border shrink-0">
          <span className="text-copy-primary font-medium text-sm">
            Projects
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-7 w-7 text-copy-muted hover:text-copy-primary hover:bg-elevated"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <Tabs
          defaultValue="my-projects"
          className="flex flex-col flex-1 min-h-0"
        >
          <TabsList className="mx-4 mt-3 shrink-0 bg-elevated">
            <TabsTrigger value="my-projects" className="flex-1 text-xs">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1 text-xs">
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex-1 min-h-0 mt-0">
            <ScrollArea className="h-full px-4 py-2">
              <EmptyState label="projects" />
            </ScrollArea>
          </TabsContent>

          <TabsContent value="shared" className="flex-1 min-h-0 mt-0">
            <ScrollArea className="h-full px-4 py-2">
              <EmptyState label="shared projects" />
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="px-4 py-3 border-t border-surface-border shrink-0">
          <Button
            className="w-full gap-2 bg-brand text-base hover:bg-brand/90 text-[#080809]"
            size="sm"
          >
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
