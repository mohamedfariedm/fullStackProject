'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (email === 'kingstone@eg.com' && password === 'password') {
      document.cookie = "auth=1; path=/";
      toast.success('Login successful!');
      router.push('/admin');
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center absolute left-0 right-0 top-0 bottom-0 z-[5000] justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl mb-4 font-bold">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 pr-10 border"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '30%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '18px',
              userSelect: 'none'
            }}          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
