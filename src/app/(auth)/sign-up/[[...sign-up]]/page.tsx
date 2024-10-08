'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import axiosInstance from '@/helper/axios';
export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`;
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/sign-up', {
        name, 
        email, 
        password,
      });
      console.log(response.data);
      router.replace('/sign-in');
    } catch (error) {
      console.error('Error during sign-up:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="col-span-1 lg:pe-12">
  <div className="pb-3 mb-8">
    <div className="flex items-center gap-3 mb-2">
      <h3 className="text-4xl font-bold">Mogi</h3>
    </div>
    <p className="text-lg">Please enter your details</p>
  </div>
  <div className="w-full h-[90%] rounded-lg space-y-8 relative">
    <div className="w-full grid grid-cols-1 gap-x-2">
      <Button 
        className="" 
        variant='neutral' 
        onClick={handleGoogleLogin} 
        disabled={loading}
      >
        <div className='flex justify-center items-center gap-x-2'>
          <Image 
            src='/google.svg'
            height={20}
            width={20}
            alt='google'
          />
          <span className='font-medium text-lg text-gray-600'>Sign up with Google</span>
        </div>
      </Button>
    </div>
    <div className=''>
      <div className='flex items-center w-full gap-x-1'>
        <hr className='flex-grow border-t border-gray-300'/>
        <p className='text-center text-gray-500'>Or sign up with email</p>
        <hr className='flex-grow border-t border-gray-300'/>
      </div>
    </div>
    <Input 
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      disabled={loading}
    />
    <Input 
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled={loading}
    />
    <Input 
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      disabled={loading}
    />
    <div className='flex justify-between'>
      <div className=''>
        <div className='flex items-center gap-x-2'>
          <input 
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
      </div>
      <Link href='/forgot-password'>
        <span className='text-center text-gray-500 hover:text-blue-500'>Forgot Password?</span>
      </Link>
    </div>
    <Button 
      className="w-full text-xl bg-blue-500 text-white"
      variant='neutral'
      onClick={handleSignup}
      disabled={loading}
    >
      {loading ? 'Signing up...' : 'Sign up'}
    </Button>
    <p className='text-center font-medium'>Already an Account? <Link href='/sign-in'><strong className='text-blue-500'>Sign In</strong></Link></p>
  </div>
</div>
  );
}
