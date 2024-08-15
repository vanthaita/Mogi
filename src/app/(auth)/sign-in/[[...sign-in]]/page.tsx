import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="col-span-1 lg:pe-12">
        <div className="pb-3">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-4xl font-bold">Mogi</h3>
          </div>
          <p className="text-lg">Please enter your details</p>
        </div>
        {/* Clerk SignIn Component */}
        <SignIn 
          appearance={{
            elements: {
              card: "p-8 border-none shadow-none",
              formFieldInput: "py-3 px-4 rounded-none bg-neutral-100 dark:bg-neutral-700 focus:outline-none focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-[4px_4px_0_0_#000000] mb-4",
              formButtonPrimary: "text-white p-4 border-2 border-black shadow-[4px_4px_0_0_#000000] rounded-none font-bold",
            },
          }} 
        />
      </div>
  );
}
