'use client'
import { LogOutIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useClerk } from '@clerk/nextjs';
const Sidebar = () => {
  // Sidebar content will be added here
  const { signOut } = useClerk()
  return (
    <aside className="w-[5rem] h-[calc(100vh] flex flex-col items-center py-4 border-r-4 justify-between">
      <div className="flex flex-col items-center gap-6 mt-8">
        {/* Icons will be added here */}
        <div className="w-8 h-8 bg-black rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>

      <Button 
        onClick={() => signOut({ redirectUrl: '/'})}
        variant="neutral" 
        className=" w-14 h-14 flex rounded-full items-center justify-center">
          <LogOutIcon className="w-10 h-10" />
      </Button>

      
    </aside>
  );
};

export default Sidebar;
