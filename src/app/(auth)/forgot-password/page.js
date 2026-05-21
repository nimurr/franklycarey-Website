'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    return (
        <div
            className='min-h-screen flex items-center justify-center relative'
            style={{
                backgroundImage: "url('/images/Auth/auth_page_bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Blur overlay */}
            <div className='absolute w-full h-full top-0 left-0 backdrop-blur-sm bg-black/30'></div>

            {/* Forgot Password Card */}
            <div className='relative z-10 w-full max-w-sm mx-4'>

                {/* Logo */}
                <div className='text-center mb-6'>
                    <div className='inline-block border border-orange-500 px-6 py-2 rounded mb-3'>
                        <span className='text-3xl font-bold'>
                            <span className='text-orange-500'>X</span>
                            <span className='text-white'>plorify</span>
                        </span>
                    </div>
                    <h2 className='text-2xl font-bold text-white'>Forgot Password?</h2>
                    <p className='text-gray-300 text-sm mt-2'>
                        Please enter your email address <br /> to reset your password.
                    </p>
                </div>

                {/* Form Card */}
                <div className='bg-black/40 backdrop-blur-md rounded-lg p-6 border border-gray-600'>

                    {/* Email */}
                    <div className='mb-6'>
                        <label className='text-white text-sm font-medium mb-1 block' htmlFor="email">
                            Email Address
                        </label>
                        <input
                            placeholder='Enter your email'
                            className='w-full p-2.5 bg-transparent border border-dashed border-gray-400 rounded text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm'
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>

                    {/* Send OTP Button */}
                    <Link href='/verify-otp'>
                        <button className='w-full py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold rounded text-base cursor-pointer'>
                            Send OTP
                        </button>
                    </Link>
                </div>

                {/* Back to Login */}
                <p className='text-center mt-4 text-gray-300 text-sm'>
                    Remember your password?{' '}
                    <Link className='text-orange-500 font-semibold hover:text-orange-400' href="/signin">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Page;