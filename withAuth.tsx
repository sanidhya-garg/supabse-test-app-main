/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Ensure this is a client component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from './supabaseClient';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkUser = async () => {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (user) {
          setIsAuthenticated(true);
        } else {
          router.push('/auth'); // Redirect to /auth if not authenticated
        }
        setIsLoading(false);
      };

      checkUser();
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>; // You can show a loader while checking authentication
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;