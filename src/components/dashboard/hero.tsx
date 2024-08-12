import React from 'react';
import { Button } from '../ui/button';
import { BookOpen, Mic } from 'lucide-react'; // Importing icons from Lucide-react

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-102px)] flex flex-col items-center relative p-8 text-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mt-20">
        <div className='w-full flex justify-center items-center'>
          <div className='inline-block flex gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border-2 border-black bg-gray-200 text-black mb-4'>
            <BookOpen className="w-4 h-4" /> {/* Custom icon for emphasis */}
            Your AI Interview Coach
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6">
          Ace Your Interviews with AI Guidance
        </h1>
        <p className="text-lg md:text-2xl text-gray-800 mb-8">
          Practice, Improve, and Succeed with personalized AI-driven interview mock sessions.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="px-6 py-3 rounded-lg hover:scale-105 transform transition" variant='neutral'>
            Get started
          </Button>
          <Button className="text-white px-6 py-3 rounded-lg hover:scale-105 transform transition bg-black">
            See on GitHub
          </Button>
        </div>
      </div>

      <div className="bg-black border-2 border-black rounded-md w-1/2 h-1/2 mt-10 flex items-center justify-center">
        <Mic className="text-white w-16 h-16" /> {/* Custom Mic icon to match the Neobrutalism style */}
        {/* Image dashboard or another element can be placed here */}
      </div>
    </div>
  );
};

export default Hero;
