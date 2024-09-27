'use client'
import { setTokenFromCookies } from '@/app/action/storeToken';
import { useAuth } from '@/context/auth.context';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const RefreshToken = () => {
  const router = useRouter();
  const { token, logout, setToken } = useAuth();

  const isTokenExpiringSoon = (token: string) => {
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000; 
    const currentTime = Date.now();
    console.log(payload, exp, currentTime);
    return exp - currentTime < 10 * 60 * 1000;
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        await logout();
        router.push('/');
      } else {
        console.error('Logout failed:', response);
        await logout();
        router.push('/sign-in');
      }
    } catch (err) {
      console.error('Failed to log out:', err);
      await logout();
      router.push('/sign-in');
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/check-token`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setTokenFromCookies(data.access_token);
        setToken(data.access_token); 
      } else {
        if (response.status === 401) {
          handleLogout();
        }
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      handleLogout();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTokenExpiringSoon(token)) {
        refreshAccessToken();
      }
    }, 5 * 60 * 1000); 

    return () => clearInterval(intervalId); 
  }, [token]);

  return null; 
};

export default RefreshToken;
