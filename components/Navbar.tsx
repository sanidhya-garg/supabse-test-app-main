import React, { useEffect, useState } from 'react';
import eDCLogo from '@/app/public/eDCLogo.png';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);
      }
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className="w-[100vw] h-[7vh] bg-black text-white flex items-center justify-between shadow-lg">
      <div className="sm:ml-12 ml-4 flex items-center justify-center gap-3">
        <div className="w-12 h-12">
          <Image src={eDCLogo} alt="edc logo" className="w-12 h-12 rounded-full shadow-md" />
        </div>
        <div className="text-base hidden md:flex font-semibold tracking-wide">
          eDC Campus Ambassador Program
        </div>
        <div className="text-base md:hidden font-semibold tracking-wide">
          eDC CAP
        </div>
      </div>

      <div className="flex items-center justify-center mr-8 gap-6">
        <div className="text-sm sm:flex hidden font-medium text-gray-200 tracking-wide">
          {user ? `Hey, ${user.email}` : 'Loading...'}
        </div>
        {/* <div
          className="h-8 w-20 text-center flex items-center justify-center bg-red-500 hover:bg-red-600 text-sm font-semibold text-white rounded-lg cursor-pointer transition-all duration-200"
          onClick={()=>{router.push("/leaderboard")}}
        >
          LeaderBoard
        </div> */}
        <div
          className="h-8 w-20 text-center flex items-center justify-center bg-red-500 hover:bg-red-600 text-sm font-semibold text-white rounded-lg cursor-pointer transition-all duration-200"
          onClick={handleSignOut}
        >
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Navbar;
