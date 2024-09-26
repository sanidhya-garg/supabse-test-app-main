"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Sign-up Error:', error.message);
    } else {
      router.push('/'); // Redirect to home after successful sign-up
    }
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Sign-in Error:', error.message);
    } else {
      router.push('/'); // Redirect to home after successful sign-in
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.error('Error with Google Sign In:', error.message);
    }
  };

  return (
    <div>
      <h1>Sign In / Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp} disabled={loading}>Sign Up</button>
      <button onClick={handleSignIn} disabled={loading}>Sign In</button>
      <button onClick={handleGoogleSignIn} disabled={loading}>Sign in with Google</button>
    </div>
  );
}