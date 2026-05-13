'use client';
import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';

const AllActivitiesHero = () => {
    const islands = ['All', 'New Providence', 'Grand Bahama', 'Abaco', 'Eleuthera', 'Exumas', 'Long Island'];
    const [activeIsland, setActiveIsland] = useState('New Providence');
    useEffect(() => {
        const timer = setTimeout(() => setVideoExpanded(true), 1000);
        return () => clearTimeout(timer);
    }, []);


    const [videoExpanded, setVideoExpanded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoExpanded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    const txt = `transition-colors duration-1000 ${videoExpanded ? 'text-white' : ''}`;

    return (
        <div className=' overflow-hidden md:min-h-[70vh] min-h-[100vh]'>
            <Header />

            {/* ── Background video — absolute stays inside Hero only ── */}
            <div className={`absolute overflow-hidden md:max-h-[70vh] max-h-[100vh] rounded-b-2xl inset-0 z-0 transition-opacity duration-1000 ease-in-out
                ${videoExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <video
                    autoPlay muted loop playsInline
                    src="/Images/Events/envent_hero_video.mp4"
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* ── Content ── */}
            <div className='relative z-10  h-full py-10'>
                <h2 className={`md:text-6xl text-4xl font-bold my-5 leading-[1.2] ${txt}`}>
                    All Activities
                </h2>

                <p className={`mt-10 text-xl ${txt}`}>
                    Explore 500+ curated activities across the Bahamas.
                </p>

                <div>
                    {/* Search Form */}
                    <div className="border border-gray-300 mt-10 rounded p-1 max-w-[800px]">
                        <form className="grid  md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_auto] ">
                            {/* Island */}
                            <div className="p-3">
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
                            <div className="px-3 py-3">
                                <label className={`block text-xs font-semibold mb-1 ${txt}`}>Date:</label>
                                <input
                                    type="date"
                                    className={`w-full bg-transparent text-base focus:outline-none cursor-pointer ${txt}`}
                                />
                            </div>
                            <div className="bg-gray-300" />
                            {/* Category */}
                            <div className="px-3 py-3">
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

                    <div className="flex items-center gap-2 flex-wrap mt-10">
                        {islands.map((island) => {
                            const isActive = activeIsland === island;
                            return (
                                <button
                                    key={island}
                                    onClick={() => setActiveIsland(island)}
                                    className={`px-4 py-1.5 rounded text-sm font-semibold border transition-all duration-200 active:scale-95
                                    ${isActive
                                            ? 'bg-orange-500 border-orange-500 text-white'
                                            : `border-white/40 ${videoExpanded ? 'text-white/80 hover:border-white hover:text-white' : 'text-gray-700 border-gray-300 hover:border-gray-500'}`
                                        }`}
                                >
                                    {island}
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllActivitiesHero;