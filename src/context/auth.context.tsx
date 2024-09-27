'use client';
import React, { useContext, useState, useEffect, createContext, ReactNode } from 'react';
import { User, AuthContextProps } from '@/utils/type';
import { useRouter } from 'next/navigation';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const fetchProfileOnce = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const userProfile = await res.json();
    return userProfile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

export function AuthProvider({
  children,
  initialToken,
}: {
  children: ReactNode;
  initialToken: string;
}) {
  const [user, setUser] = useState<User | null>(null); 
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);

  useEffect(() => {
    if (token) {
      fetchProfileOnce().then(profile => {
        if (profile) {
          setUser(profile);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    }
  }, [token]);

  const handleSetToken = (value: string) => {
    setToken(value);
    if (!value) {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  const logout = async () => {
    setUser(null);
    setToken('');
    setIsLoggedIn(false);
  };
  
  return (
    <AuthContext.Provider value={{ user, setToken: handleSetToken, token, isLoggedIn, logout, setUser, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
