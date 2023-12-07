"use client";

import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { MdOutlineWifiPassword } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/app/config';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Login successful');
        // Redirect to the desired page
        router.push('/space');
      } else {
        console.error('Login failed');
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-3 border bg-slate-700 rounded-xl border-gray-800 p-8 max-w-md mx-auto">
        <h1 className="text-white text-3xl text-center mb-6 font-sans">Sign in</h1>
        <div className="relative">
          <MdEmail className="absolute top-1/2 transform -translate-y-1/2 left-3" size={20} />
          <input
            className="pl-10 border border-slate-500 px-16 py-2"
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <MdOutlineWifiPassword className="absolute top-1/2 transform -translate-y-1/2 left-3" size={20} />
          <input
            className="pl-10 border border-slate-500 px-16 py-2"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 font-bold text-white py-3 px-6 transition-transform transform hover:scale-105"
            style={{
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
}
