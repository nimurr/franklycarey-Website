

'use client';
import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';

const Hero = () => {
    const [videoExpanded, setVideoExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoExpanded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const txt = `transition-colors duration-1000 ${videoExpanded ? 'text-white' : ''}`;

    return (
        <div className=' overflow-hidden '>
            <Header />

            {/* ── Background video — absolute stays inside Hero only ── */}
            <div className={`absolute overflow-hidden max-h-screen inset-0 z-0 transition-opacity duration-1000 ease-in-out
                ${videoExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <video
                    autoPlay muted loop playsInline
                    src="/Images/Home/hero_theam_video.mp4"
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* ── Content ── */}
            <div className='relative z-10 flex items-center flex-col justify-center min-h-[80vh] py-10'>
                <h2 className={`text-6xl font-bold my-5 leading-[1.2] text-center ${txt}`}>
                    Discover Unforgettable
                    <br />
                    <div className='flex items-center gap-5'>
                        Moments in

                        {/* Inline video — shrinks away after 1s */}
                        <div className={`transition-all duration-1000 ease-in-out overflow-hidden rounded-full
                            ${videoExpanded ? 'w-0 h-0 opacity-0' : 'w-48 h-32 opacity-100'}`}>
                            <video
                                autoPlay muted loop playsInline
                                src="/Images/Home/hero_theam_video.mp4"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>

                        <span className="bg-[url('/Images/Home/heor_text_bd.png')] bg-no-repeat bg-bottom bg-[length:100%_auto] pb-0 ml-2 inline-block">
                            the Bahamas
                        </span>
                    </div>
                </h2>

                <p className={`mt-10 text-xl ${txt}`}>
                    Music, art, culture, and beachside experiences—all in one place.
                </p>

                <div>
                    {/* Search Form */}
                    <div className="border border-gray-300 mt-10">
                        <form className="grid grid-cols-[1fr_1px_1fr_1px_1fr_1px_auto]">
                            {/* Island */}
                            <div className="px-6 py-4">
                                <label className={`block text-xs font-semibold mb-1 ${txt}`}>Island</label>
                                <div className="flex items-center justify-between gap-2 cursor-pointer group">
                                    <select className={`w-full bg-transparent text-base focus:outline-none cursor-pointer appearance-none ${txt} hover:text-black p-2`}>
                                        <option value="">Nassau, Bahamas</option>
                                        <option value="paradise">Paradise Island</option>
                                        <option value="eleuthera">Eleuthera</option>
                                        <option value="exuma">Exuma</option>
                                        <option value="abaco">Abaco</option>
                                    </select>
                                    <span className={`shrink-0 ${txt}`}>&#8964;</span>
                                </div>
                            </div>
                            <div className="bg-gray-300" />
                            {/* Date */}
                            <div className="px-6 py-4">
                                <label className={`block text-xs font-semibold mb-1 ${txt}`}>Date:</label>
                                <input
                                    type="date"
                                    className={`w-full bg-transparent text-base focus:outline-none cursor-pointer ${txt}`}
                                />
                            </div>
                            <div className="bg-gray-300" />
                            {/* Category */}
                            <div className="px-6 py-4">
                                <label className={`block text-xs font-semibold mb-1 ${txt}`}>Category:</label>
                                <div className="flex items-center justify-between gap-2">
                                    <select className={`w-full bg-transparent text-base focus:outline-none cursor-pointer appearance-none ${txt} hover:text-black p-2`}>
                                        <option value="art">Art</option>
                                        <option value="music">Music</option>
                                        <option value="food">Food</option>
                                        <option value="sports">Sports</option>
                                        <option value="culture">Culture</option>
                                    </select>
                                    <span className={`shrink-0 ${txt}`}>&#8964;</span>
                                </div>
                            </div>
                            <div className="bg-gray-300" />
                            {/* Search Button */}
                            <div className="flex items-center px-6">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-white hover:bg-gray-50 active:scale-95
                                        border border-gray-300 text-gray-800 font-semibold text-base
                                        px-7 py-3 rounded-xl transition-all duration-200 whitespace-nowrap shadow-sm"
                                >
                                    Search <span className="text-lg">→</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* CTA Buttons */}
                    <div className="grid grid-cols-2 border-gray-300">
                        <div className="flex items-center justify-center px-10 py-10">
                            <button className="w-full bg-primary hover:bg-primary/90 active:scale-95 text-white
                                font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 shadow-md shadow-primary/20">
                                Explore Events
                            </button>
                        </div>
                        <div className="flex items-center justify-center px-10 py-10">
                            <button className="w-full bg-white hover:bg-primary/5 active:scale-95 text-primary
                                font-bold text-lg px-10 py-5 rounded-2xl border-2 border-primary/40
                                hover:border-primary transition-all duration-200">
                                View Today's Events
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 border-gray-300">
                        {[
                            { value: '500+', label: 'Live Events' },
                            { value: '12K+', label: 'Live Events' },
                            { value: '48', label: 'Live Events' },
                            { value: '4.9', label: 'Live Events', star: true },
                        ].map(({ value, label, star }, i) => (
                            <div key={i} className="flex flex-col items-center justify-center py-8 gap-1">
                                <div className="flex items-center gap-2">
                                    <span className={`text-5xl font-bold ${txt}`}>{value}</span>
                                    {star && <span className="text-primary text-3xl">★</span>}
                                </div>
                                <span className={`text-sm font-medium ${txt}`}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;