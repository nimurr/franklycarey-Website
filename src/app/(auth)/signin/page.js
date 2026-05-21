'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div
            className='h-screen flex items-center justify-center relative'
            style={{
                backgroundImage: "url('/images/Auth/auth_page_bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Blur overlay — blurs the background image */}
            <div className='absolute w-full h-full top-0 left-0 backdrop-blur-sm bg-white/10'></div>

            {/* Login Form */}
            <div className='relative z-10 flex justify-center border border-primary rounded-lg p-10 bg-black/40 shadow-lg'>
                <div className='min-w-80'>
                    <h2 className='text-4xl font-medium text-center text-white'>Login</h2>

                    <div className='mt-5'>
                        <label className='font-semibold text-white' htmlFor="email">Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-primary rounded-md focus:outline-0 ring-0  bg-transparent text-white'
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>

                    <div className='mt-5'>
                        <label className='font-semibold text-white' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='mt-2 w-full p-2 border border-primary rounded-md focus:outline-0 ring-0 bg-transparent text-white '
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center my-5'>
                        <label htmlFor="remember">
                            <input type="checkbox" name="remember" id="remember" />
                            <span className='ml-2 text-gray-300'>Remember me</span>
                        </label>
                        <Link className='text-blue-600 text-sm' href="/forgot-password">
                            Forgot Password
                        </Link>
                    </div>

                    <div className='mt-5'>
                        <button className='cursor-pointer w-full p-2 bg-primary font-semibold text-white rounded-md hover:bg-orange-600 transition-colors'>
                            Login
                        </button>
                    </div>

                    <p className='text-center mt-5 text-gray-300'>
                        Don't have an account?{' '}
                        <Link className='text-blue-600' href="/signup">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;