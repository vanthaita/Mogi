/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth.context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ProfilePage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    familyName: '',
    givenName: '',
    name: '',
    email: '',
    providerId: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        familyName: user?.familyName || '',
        givenName: user?.givenName || '',
        name: user?.name || '',
        email: user?.email || '',
        providerId: user?.providerId || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <Card className="p-4 bg-gray-100">
      <div className="text-xl sm:text-2xl font-semibold mb-4">
        Name: {formData.name}
      </div>
      <div className="flex justify-start items-center gap-4">
        <img
          src={user?.picture}
          alt={formData.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="underline text-blue-500 cursor-pointer">Change image</p>
      </div>
      <form className="mt-6 space-y-4">
        <div>
          <Label className="block text-sm font-medium text-gray-700" htmlFor="familyName">
            Family Name
          </Label>
          <Input
            id="familyName"
            value={formData.familyName}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700" htmlFor="givenName">
            Given Name
          </Label>
          <Input
            id="givenName"
            value={formData.givenName}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700" htmlFor="providerId">
            Provider ID
          </Label>
          <Input
            id="providerId"
            value={formData.providerId}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
          />
        </div>
      </form>
      <div className="mt-6 flex justify-end gap-4">
        <Button className="px-4 py-2 border rounded-md text-gray-600">Cancel</Button>
        <Button className="px-4 py-2 bg-black text-white rounded-md">Save changes</Button>
      </div>
    </Card>
  );
};

export default ProfilePage;
