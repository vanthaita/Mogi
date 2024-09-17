'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FaInfoCircle, FaEnvelope, FaLifeRing, FaShieldAlt, FaFileAlt } from "react-icons/fa"

const MorePage = () => {
  return (
    <div className="text-black min-h-screen p-6">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-8 bg-gray-100">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-3xl mr-3 text-black" />
            <h2 className="text-2xl font-bold">About Us</h2>
          </div>
          <p className="text-base mb-6">Learn more about our company and values.</p>
          <Button className="bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors duration-300">
            Read More
          </Button>
        </Card>

        <Card className="p-8 bg-gray-100">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-3xl mr-3 text-black" />
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <p className="text-base mb-6">Reach out to us with any questions or concerns.</p>
          <Button className="bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors duration-300">
            Get in Touch
          </Button>
        </Card>

        <Card className="p-8 bg-gray-100">
          <div className="flex items-center mb-4">
            <FaLifeRing className="text-3xl mr-3 text-black" />
            <h2 className="text-2xl font-bold">Support</h2>
          </div>
          <p className="text-base mb-6">We are here to help you 24/7.</p>
          <Button className="bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors duration-300">
            Support Center
          </Button>
        </Card>

        <Card className="p-8 bg-gray-100">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="text-3xl mr-3 text-black" />
            <h2 className="text-2xl font-bold">Policy</h2>
          </div>
          <p className="text-base mb-6">Read our policies and privacy terms.</p>
          <Button className="bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors duration-300">
            View Policies
          </Button>
        </Card>

        <Card className="p-8 bg-gray-100">
          <div className="flex items-center mb-4">
            <FaFileAlt className="text-3xl mr-3 text-black" />
            <h2 className="text-2xl font-bold">Terms & Conditions</h2>
          </div>
          <p className="text-base mb-6">Understand our terms of service.</p>
          <Button className="bg-black text-white border-2 border-black hover:bg-gray-800 transition-colors duration-300">
            Read Terms
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default MorePage;
