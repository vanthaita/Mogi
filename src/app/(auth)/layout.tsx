import { SignIn } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card className="font-sans text-base font-normal text-black dark:text-neutral-100 bg-neutral-100 
    dark:bg-neutral-500 min-h-screen flex items-center justify-center border-none">
      <div className="container px-4 py-3 lg:px-8 mx-auto">
        <Card className="w-full py-10 px-8 xl:p-12 text-base bg-white 
          dark:bg-neutral-600 grid grid-cols-1 lg:grid-cols-3 space-x-8">
          {children}
          <div className="relative max-lg:hidden lg:col-span-2">
            <Card className="w-full rounded-xl dark:bg-opacity-10 min-h-[75vh] px-8 
              py-12 border-2 border-black">
              <div className="flex flex-col gap-3">
                <h2 className="text-6xl">Welcome Back!</h2>
                <h6 className="text-3xl mb-4">Please log in to continue your journey.</h6>
                <div className="relative">
                  <div className="w-auto overflow-hidden py-6">
                      <Image 
                        src='/mainpage.png'
                        height={1080}
                        width={1080}
                        alt="main-page"
                        className="w-full h-full border-4 mt-8"
                      />
                      
                      {/* <img src="/img/login/chart.png" alt="cover" className="max-w-full border border-black rounded-lg shadow-[3px_3px_0_0_#000000]" /> */}
                  </div>
                  {/* <img src="/img/login/widget.png" alt="cover" className="absolute right-0 top-0 max-w-full border border-black rounded-lg shadow-[3px_3px_0_0_#000000]" /> */}
                  {/* <img src="/img/login/map.png" alt="cover" className="absolute max-xl:hidden right-4 bottom-0 max-w-full border border-black rounded-lg shadow-[3px_3px_0_0_#000000]" /> */}
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </Card>
  );
}
