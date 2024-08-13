import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import Topbar from "@/components/dashboard/topbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
        <div className="flex-1 flex flex-col">
            <Topbar />
            <div className="p-8 flex-1">
              {children}
            </div>
        </div>
  </div>
  );
}
