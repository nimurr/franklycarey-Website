'use client';
import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Create Your Account',
        description:
            'Sign up as an Event Creator. Your dedicated admin panel unlocks instantly — no approval wait time.',
        icon: (
            // Signup / cursor icon
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                {/* Green button */}
                <rect x="8" y="18" width="44" height="26" rx="5" fill="#4CAF50" />
                <text x="30" y="36" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" fontFamily="sans-serif">SIGNUP</text>
                {/* Cursor hand */}
                <g transform="translate(28, 36)">
                    <path d="M10 0 L10 18 M10 18 Q10 26 18 26 L26 26 Q34 26 34 18 L34 8 Q34 4 30 4 Q30 0 26 0 Q26-4 22-4 Q18-4 18 0 L18 0 Q14 0 10 4Z"
                        fill="#F5D0A9" stroke="#333" strokeWidth="1.5" />
                </g>
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Create & Publish Event',
        description:
            'Use your admin panel to set up event details, ticket types, pricing, and capacity. Go live with one click.',
        icon: (
            // People celebrating icon
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                {/* Stars */}
                <text x="10" y="18" fontSize="10" fill="#f59e0b">★</text>
                <text x="58" y="14" fontSize="8" fill="#f59e0b">★</text>
                <text x="38" y="12" fontSize="7" fill="#f59e0b">★</text>
                {/* Center person (arms up) */}
                <circle cx="40" cy="28" r="6" fill="#F5D0A9" stroke="#333" strokeWidth="1.2" />
                <path d="M28 22 L40 34 L52 22" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M34 34 L34 52 M46 34 L46 52" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                <path d="M34 52 L30 62 M34 52 L38 62 M46 52 L42 62 M46 52 L50 62" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />
                {/* Left person */}
                <circle cx="18" cy="34" r="5" fill="#F5D0A9" stroke="#333" strokeWidth="1.2" />
                <path d="M10 30 L18 40 L26 30" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M14 40 L14 55 M22 40 L22 55" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14 55 L11 63 M14 55 L17 63 M22 55 L19 63 M22 55 L25 63" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                {/* Right person */}
                <circle cx="62" cy="34" r="5" fill="#F5D0A9" stroke="#333" strokeWidth="1.2" />
                <path d="M54 30 L62 40 L70 30" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M58 40 L58 55 M66 40 L66 55" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M58 55 L55 63 M58 55 L61 63 M66 55 L63 63 M66 55 L69 63" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Sell & Get Paid',
        description:
            'Track sales, manage attendees, and receive payouts directly to your account. Full analytics included.',
        icon: (
            // Money / coins icon
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                {/* Stack of bills */}
                <rect x="8" y="30" width="42" height="28" rx="4" fill="#a3e635" stroke="#333" strokeWidth="1.5" />
                <rect x="12" y="26" width="42" height="28" rx="4" fill="#84cc16" stroke="#333" strokeWidth="1.5" />
                <rect x="16" y="22" width="42" height="28" rx="4" fill="#65a30d" stroke="#333" strokeWidth="1.5" />
                {/* Dollar sign on bill */}
                <text x="37" y="41" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="sans-serif">$</text>
                {/* Coin */}
                <circle cx="56" cy="52" r="14" fill="#f59e0b" stroke="#333" strokeWidth="1.5" />
                <circle cx="56" cy="52" r="10" fill="#fbbf24" stroke="#333" strokeWidth="1" />
                <text x="56" y="57" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e" fontFamily="sans-serif">$</text>
            </svg>
        ),
    },
];

const SimpleProcess = () => {
    return (
        <section className="w-full "
        >
            <div className=" flex items-center justify-center py-12 mt-10">
                <div className=" border-y border-gray-300 md:py-20 py-10 w-full">

                    <div className=" mx-auto flex flex-col items-center gap-6">

                        {/* Badge */}
                        <div className="border border-orange-500 text-orange-500 text-xs font-semibold px-4 py-1.5 rounded flex items-center gap-1.5 tracking-wide">
                            <span>✦</span> Simple Process
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center leading-tight">
                            How It Works for Creators
                        </h2>

                        {/* Subtext */}
                        <p className="text-gray-600 text-center text-sm md:text-base max-w-lg">
                            From signup to selling tickets — get your event live in under 10 minutes.
                        </p>

                        {/* ── Timeline + Cards ── */}
                        <div className="w-full mt-4">

                            {/* Timeline row */}
                            <div className="relative flex items-center justify-between mb-3">
                                {/* Full-width orange line */}
                                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-orange-500 -translate-y-1/2 z-0" />

                                {steps.map((step) => (
                                    <div key={step.number} className="relative z-10 flex items-center justify-center">
                                        <div className="bg-orange-500 text-white text-xs font-black px-2.5 py-2 rounded leading-none">
                                            {step.number}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cards row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-0">
                                {steps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="bg-[#ebebea] border border-gray-300 rounded-xl p-6 flex flex-col items-center text-center gap-3"
                                    >
                                        {/* Icon */}
                                        <div className="flex items-center justify-center h-20">
                                            {step.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base font-black text-gray-900">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimpleProcess;