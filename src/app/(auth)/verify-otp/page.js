'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const Page = () => {
    const [otp, setOtp] = useState('');

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

            {/* Verify OTP Card */}
            <div className='relative z-10 w-full max-w-md mx-4'>

                {/* Logo */}
                <div className='text-center mb-6'>
                    <div className='inline-block  px-6 py-2 rounded mb-3'>
                        <img src="/Images/Auth/logo.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold text-white'>Verify OTP</h2>
                    <p className='text-gray-300 text-sm mt-2'>
                        Please enter the OTP sent to your email.
                    </p>
                </div>

                {/* Form Card */}
                <div className='bg-black/40 backdrop-blur-md rounded-lg p-6 border border-gray-600'>

                    {/* OTP Label */}
                    <div className='mb-6'>
                        <label className='text-white text-sm font-medium mb-4 block'>
                            Enter OTP
                        </label>

                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            containerStyle={{ justifyContent: 'space-between', display: 'flex' }}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    placeholder='_'
                                    style={{ width: '44px', height: '48px', textAlign: 'center' }}
                                    className='!border border-dashed border-gray-400 focus:border-orange-500 focus:outline-none bg-transparent text-white rounded text-lg font-bold'
                                />
                            )}
                        />
                    </div>

                    {/* Resend OTP */}
                    <p className='text-gray-400 text-xs text-center mb-5'>
                        Didn't receive the OTP?{' '}
                        <button className='text-orange-500 hover:text-orange-400 font-semibold cursor-pointer'>
                            Resend OTP
                        </button>
                    </p>

                    {/* Verify Button */}
                    <Link href='/update-password'>
                        <button
                            className='w-full py-3 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold rounded text-base cursor-pointer disabled:opacity-50'
                            disabled={otp.length < 6}
                        >
                            Verify
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