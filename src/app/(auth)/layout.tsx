import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen w-full flex justify-center items-center">
        {children}
    </div>
  );
}
