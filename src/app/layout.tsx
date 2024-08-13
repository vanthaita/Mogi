import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import 'regenerator-runtime/runtime';
import { Inter as FontSans } from "next/font/google"

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/landing/navbar";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Mogi App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
      <html lang="en">
        <body  className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}>
            
            {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
