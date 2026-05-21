'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    // State to toggle password visibility for each field
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Function to toggle password visibility
    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    // Function to toggle confirm password visibility
    const toggleConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    return (
        <div
            className='min-h-screen flex items-center justify-center relative px-4'
            style={{
                backgroundImage: "url('/images/Auth/auth_page_bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Blur Overlay */}
            <div className='absolute inset-0 backdrop-blur-sm bg-black/40'></div>

            {/* Main Card */}
            <div className='relative z-10 w-full max-w-md'>

                {/* Logo */}
                <div className='text-center mb-6'>
                    <Link href="/">
                        <img
                            className='mx-auto w-36 mb-4'
                            src="/images/Auth/logo.png"
                            alt="Logo"
                        />
                    </Link>

                    <h2 className='text-3xl font-bold text-white'>
                        Update Password
                    </h2>

                    <p className='text-gray-300 text-sm mt-2'>
                        Please Enter your New Password and Confirm Password
                    </p>
                </div>

                {/* Form Card */}
                <div className='bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-lg'>

                    {/* Password */}
                    <div className='mb-5'>
                        <label
                            className='text-white text-sm font-medium block mb-2'
                            htmlFor="password"
                        >
                            Password
                        </label>

                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='w-full p-3 border border-dashed border-gray-400 rounded-lg focus:outline-none focus:border-orange-500 bg-transparent text-white placeholder:text-gray-400'
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                            />

                            {/* Toggle Password */}
                            <button
                                type="button"
                                onClick={togglePassword}
                                className='absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-300'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='mb-6'>
                        <label
                            className='text-white text-sm font-medium block mb-2'
                            htmlFor="confirm-password"
                        >
                            Confirm Password
                        </label>

                        <div className='relative'>
                            <input
                                placeholder='Confirm your password'
                                className='w-full p-3 border border-dashed border-gray-400 rounded-lg focus:outline-none focus:border-orange-500 bg-transparent text-white placeholder:text-gray-400'
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirm-password"
                                id="confirm-password"
                            />

                            {/* Toggle Confirm Password */}
                            <button
                                type="button"
                                onClick={toggleConfirmPassword}
                                className='absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-300'
                            >
                                {!showConfirmPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    {/* Update Button */}
                    <Link href={'/login'}>
                        <button className='w-full py-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-bold rounded-lg cursor-pointer'>
                            Update
                        </button>
                    </Link>
                </div>

                {/* Back to Login */}
                <p className='text-center mt-4 text-gray-300 text-sm'>
                    Remember your password?{' '}
                    <Link
                        className='text-orange-500 font-semibold hover:text-orange-400'
                        href="/signin"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Page;