"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
}: EditorNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-3 bg-surface border-b border-surface-border">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="h-8 w-8 text-copy-secondary hover:text-copy-primary hover:bg-elevated"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex-1" />

      <div className="flex items-center" />
    </header>
  );
}
