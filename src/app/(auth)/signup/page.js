'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const roles = [
    { id: 'general', label: 'General User', icon: '🧑‍💼' },
    { id: 'events', label: 'Create Events', icon: '👮' },
    { id: 'driver', label: 'Driver', icon: '🚖' },
];

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState('general');

    return (
        <div
            className='min-h-screen flex items-center justify-center relative py-8'
            style={{
                backgroundImage: "url('/images/Auth/auth_page_bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Blur overlay */}
            <div className='absolute w-full h-full top-0 left-0 backdrop-blur-sm bg-black/30'></div>

            {/* Signup Form */}
            <div className='relative z-10 w-full max-w-md mx-4'>

                {/* Logo */}
                <div className='text-center mb-6'>
                    <div className='inline-block  px-6 py-2 rounded mb-3'>
                        <img src="/Images/Auth/logo.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold text-white'>Create your account</h2>
                </div>

                {/* Form Card */}
                <div className='bg-black/40 backdrop-blur-md rounded-lg p-6 border border-gray-600'>

                    {/* Name */}
                    <div className='mb-4'>
                        <label className='text-white text-sm font-medium mb-1 block'>Name</label>
                        <div className='flex gap-2'>
                            <input
                                placeholder='First Name'
                                className='w-1/2 p-2.5 bg-transparent border border-dashed border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm'
                                type="text"
                                name="firstName"
                            />
                            <input
                                placeholder='Last Name'
                                className='w-1/2 p-2.5 bg-transparent border border-dashed border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm'
                                type="text"
                                name="lastName"
                            />
                        </div>
                    </div>

                    {/* Select Role */}
                    <div className='mb-4'>
                        <label className='text-white text-sm font-medium mb-2 block'>Select Your Role</label>
                        <div className='grid grid-cols-3 gap-2'>
                            {roles.map((role) => (
                                <button
                                    key={role.id}
                                    type='button'
                                    onClick={() => setSelectedRole(role.id)}
                                    className={`flex flex-col items-center justify-center p-3 rounded border-2 transition-colors cursor-pointer
                                        ${selectedRole === role.id
                                            ? 'border-orange-500 bg-orange-500/10'
                                            : 'border-gray-500 bg-transparent hover:border-orange-400'
                                        }`}
                                >
                                    <span className='text-2xl mb-1'>{role.icon}</span>
                                    <span className='text-white text-xs text-center leading-tight'>{role.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Email */}
                    <div className='mb-4'>
                        <label className='text-white text-sm font-medium mb-1 block'>Email Address</label>
                        <input
                            placeholder='Enter your email'
                            className='w-full p-2.5 bg-transparent border border-dashed border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm'
                            type="email"
                            name="email"
                        />
                    </div>

                    {/* Phone */}
                    <div className='mb-4'>
                        <label className='text-white text-sm font-medium mb-1 block'>Phone Number</label>
                        <input
                            placeholder='Enter your phone number'
                            className='w-full p-2.5 bg-transparent border border-dashed border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm'
                            type="tel"
                            name="phone"
                        />
                    </div>

                    {/* Password */}
                    <div className='mb-4'>
                        <label className='text-white text-sm font-medium mb-1 block'>Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='w-full p-2.5 bg-transparent border border-dashed border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm pr-10'
                                type={showPassword ? "text" : "password"}
                                name="password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(p => !p)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white'
                            >
                                {showPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='mb-6'>
                        <label className='text-white text-sm font-medium mb-1 block'>Confirm Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Confirm your password'
                                className='w-full p-2.5 bg-transparent border border-dashed border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm pr-10'
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(p => !p)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white'
                            >
                                {showConfirmPassword ? '👁️' : '🙈'}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button className='w-full py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold rounded text-base cursor-pointer'>
                        Create Account
                    </button>
                </div>

                {/* Sign In Link */}
                <p className='text-center mt-4 text-gray-300 text-sm'>
                    Already have an account?{' '}
                    <Link className='text-orange-500 font-semibold hover:text-orange-400' href="/signin">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Page;