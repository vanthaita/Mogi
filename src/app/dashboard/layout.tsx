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
    <div className="flex h-screen">
      <Sidebar />
        <div className="flex-1 flex flex-col overflow-y-auto">
            <Topbar />
            <div className="md:p-8 flex-1 md:mb-0 mb-8">
              {children}
            </div>
        </div>
  </div>
  );
}
