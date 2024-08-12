'use client'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  const {user} = useClerk();
  return (
    <nav className="relative bg-neutral-100 dark:bg-neutral-500 border-b-4 border-black p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-black gap-1.5 pt-2 pb-2.5 px-3">
          <div className="
      ">
             <span className="hidden md:inline text-4xl">Mogi</span>
          </div>
        </Link>
        <ul id="main-nav" className="hidden lg:flex lg:justify-center lg:space-x-8 relative items-center">
          <li className="relative">
            <Link href="#hero" className="active   max-lg:hover:bg-white/20 py-2 px-4 [&.active]:text-lime-600 dark:[&.active]:text-lime-400 hover:text-lime-600 dark:hover:text-lime-400">
              Dashboard
            </Link>
          </li>
          <li className="relative">
            <Link href="#questions" className=" max-lg:hover:bg-white/20 py-2 px-4 [&.active]:text-lime-600 dark:[&.active]:text-lime-400 hover:text-lime-600 dark:hover:text-lime-400">
              Questions
            </Link>
          </li>
          <li className="relative">
            <Link href="#questions">
              <button data-type="dropdown" data-target="#subdrop1" className="  gap-2 max-lg:hover:bg-white/20 max-lg:w-full py-2 px-4 [&.active]:text-lime-600 dark:[&.active]:text-lime-400 hover:text-lime-600 dark:hover:text-lime-400">
                Pricing
                <i className="ms-auto bi bi-chevron-down"></i>
              </button>
            </Link>
            <ul id="subdrop1" data-type="dropdownmenu" className="[&.show]:  w-full hidden lg:z-10 lg:w-40 lg:top-full lg:-end-1/4 lg:bg-neutral-100 dark:lg:bg-neutral-500 lg:border lg:border-black lg:rounded-lg">
              <li className="relative">
                <Link href="#" className=" gap-2 py-1.5 max-lg:ps-8 ps-4 pe-4 max-lg:hover:bg-white/20 [&.active]:text-lime-600 dark:[&.active]:text-lime-400 hover:text-lime-600 dark:hover:text-lime-400">Seo package</Link>
              </li>
              <li className="relative">
                <Link href="#" className="  gap-2 py-1.5 max-lg:ps-8 ps-4 pe-4 max-lg:hover:bg-white/20 [&.active]:text-lime-600 dark:[&.active]:text-lime-400 hover:text-lime-600 dark:hover:text-lime-400">Web Design</Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <Link href="#how-it-works" className="  max-lg:hover:bg-white/20 py-2 px-4 [&.active]:text-lime-600 dark:[&.active]:text-lime-400 hover:text-lime-600 dark:hover:text-lime-400">
              How it Works?
            </Link>
          </li>
        </ul>

        {!user ? 
        (<Link
          href="/sign-in"
          className="py-2.5 px-5 inline-flex items-center gap-x-2 rounded text-sm font-medium border 
          border-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_0_#000000] 
          focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-[4px_4px_0_0_#000000] bg-lime-200 
          hover:bg-lime-300 focus:bg-lime-300 text-black"
        >
          <span className="hidden md:inline">Sign In</span>
          </Link>) : (
            (<Link
              href="/dashboard"
              className="inline-flex items-center gap-x-2 rounded text-sm font-medium border 
              border-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_0_#000000] 
              focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-[4px_4px_0_0_#000000] text-black"
            >
              <Button variant='neutral' className="hidden md:inline">Dashboard</Button>
            </Link>)
          )}
      </div>
    </nav>
  )
}

export default Navbar
