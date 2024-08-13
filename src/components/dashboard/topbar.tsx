'use client'
import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useClerk } from '@clerk/nextjs';

const Topbar = () => {
    const {user} = useClerk();
    return (
        <div className="h-[8vh] w-full flex items-center px-8 py-4 border-b-4 justify-between">
            <Link href="/" className="flex items-center text-2xl font-black gap-1.5">
                <div className="text-4xl text-black">Dashboard</div>
            </Link>
            <Link
                href="/dashboard"
                className="inline-flex items-center gap-x-2 rounded-md text-sm font-medium px-4 py-2 text-black "
                >
                <Avatar>
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>SB</AvatarFallback>
                </Avatar>
                <span className="text-xl ml-2 uppercase">{user?.username}</span>
            </Link>
        </div>
  );
};

export default Topbar;
