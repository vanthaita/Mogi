'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { setTokenCookies } from '@/app/action/storeToken';
import { fetchProfileOnce, useAuth } from '@/context/auth.context';
export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {setUser, setIsLoggedIn} = useAuth();
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`;
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      if (!response.ok) {
        setIsError(true);
      } 
      const data = await response.json();
      if(data.access_token && data.refresh_token) {
        await setTokenCookies(data.access_token, data.refresh_token);
      }
      const profile = await fetchProfileOnce();
      if (profile) {
        setUser(profile);
        setIsLoggedIn(true);
        router.push('/dashboard');
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setIsError(true);
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
              <span className='font-medium text-lg text-gray-600'>Sign in with Google</span>
            </div>
          </Button>
        </div>
        <div className=''>
          <div className='flex items-center w-full gap-x-1'>
            <hr className='flex-grow border-t border-gray-300'/>
            <p className='text-center text-gray-500'>Or sign in with email</p>
            <hr className='flex-grow border-t border-gray-300'/>
          </div>
        </div>
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
        <span className={`${isError ? 'text-red-500 font-normal text-xl mb-4 block' : 'hidden'}`}>
          Error: Incorrect username or password
        </span>
        <Button 
          className="w-full text-xl bg-blue-500 text-white"
          variant='neutral'
          onClick={handleSignIn}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>
        <p className='text-center font-medium'>Not registered yet? <Link href='/sign-up'><strong className='text-blue-500'>Create an Account</strong></Link></p>
      </div>
    </div>
  );
}
