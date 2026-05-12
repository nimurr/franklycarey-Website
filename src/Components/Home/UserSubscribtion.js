import React, { useState } from 'react';

const Subscribtion = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="border-y border-gray-300 md:py-20 py-10 w-full">
                <div className="relative border-y border-gray-300 w-full overflow-hidden min-h-[400px] flex items-center justify-center">

                    {/* Video Background */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/Images/Home/hero_theam_video.mp4"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 w-full max-w-2xl mx-auto gap-3">

                        {/* Heading */}
                        <h1 className="text-white font-bold text-4xl md:text-5xl tracking-tight">
                            Trending Now
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white/90 text-base md:text-lg font-normal">
                            Everyone's talking about these events. Don't miss out.
                        </p>

                        {/* Email + Subscribe row */}
                        <div className="flex items-stretch w-full max-w-xl mt-3 rounded overflow-hidden">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your e-mail address"
                                className="flex-1 bg-transparent border border-white/60 text-white placeholder-white/50 px-5 py-3 text-sm outline-none focus:border-white transition-colors duration-200"
                            />
                            <button className="bg-orange-500 hover:brightness-110 active:scale-95 transition-all text-white font-semibold px-7 py-3 text-sm whitespace-nowrap">
                                Subscribe →
                            </button>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-white/70 text-sm mt-1">
                            No spam, ever. Unsubscribe anytime.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Subscribtion;