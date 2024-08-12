import { Github, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Background changed to black, grid lines in white */}
      <section className="inset-0 w-full flex flex-col items-center justify-center bg-black 
        bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] 
        bg-[size:70px_70px] px-5 py-[200px] sm:py-[150px] xs:py-[120px]">
        {/* Updated text to fit the AI Interview Coach application */}
        <h2 className="text-center text-white font-heading text-5xl 
          sm:text-3xl xs:text-2xl xxs:text-xl">AI Interview Coach - Your Personal Interview Trainer
        </h2>
        <a className="mt-[50px] flex font-base items-center rounded-base border-2 
          border-black bg-white dark:bg-secondaryBlack px-10 py-3 text-[22px] 
          shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY 
          hover:shadow-none lg:px-8 lg:py-2.5 lg:text-lg md:px-6 md:py-2 md:text-base" 
          href="/docs">Get started
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide 
            lucide-arrow-up-right ml-[10px] w-[30px] h-[30px] md:w-[20px] md:h-[20px]">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </section>
      <div>
        <footer className="z-30 dark:border-darkBorder bg-black 
            dark:bg-secondaryBlack px-5 py-5 text-center text-white font-base md:text-sm">
          © 2024 Mogi
        </footer>
      </div>
    </>
  )
}

export default Footer
