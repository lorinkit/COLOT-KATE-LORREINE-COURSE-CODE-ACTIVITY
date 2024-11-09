'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', username: '', password: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.username || !formData.password) {
      setStatusMessage('Please fill in all fields.');
      setIsSuccessful(false);
      return;
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error('API error:', data.message);
        setStatusMessage(data.message || 'Something went wrong.');
        setIsSuccessful(false);
      } else {
        setStatusMessage('Your account has been created successfully!');
        setIsSuccessful(true);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setStatusMessage('An error occurred. Please try again.');
      setIsSuccessful(false);
    } finally {
      setFormData({ fullName: '', username: '', password: '' });
    }
  };

  return (
    <MainLayout>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600")',
        }}
      >
        <div className="bg-black bg-opacity-50 min-h-screen flex justify-center items-center">
          <div className="max-w-md mx-auto p-4 mt-4 mb-10 border border-gray-300 rounded-md bg-white bg-opacity-90">
            <h1 className="text-3xl font-bold text-center text-black mb-4">Sign Up</h1>
            <h2 className="text-lg font-bold mb-4 text-center text-black">Create Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-black">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-black">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {isSuccessful && (
                <div className="mb-4 text-green-500 text-sm">
                  Your account has been created successfully!
                </div>
              )}

              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Sign Up</button>
            </form>

            {statusMessage && !isSuccessful && (
              <div className="mt-4 text-transparent">
                <p>{statusMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
