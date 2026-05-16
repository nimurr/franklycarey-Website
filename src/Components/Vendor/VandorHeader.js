'use client';
import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';

const VandorHeader = () => {
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
        <div className=' overflow-hidden md:min-h-[80vh] min-h-[70vh] z-0'>
            <Header />

            <div className={`absolute overflow-hidden md:max-h-[80vh] max-h-[70vh] rounded-b-2xl inset-0 z-0 transition-opacity duration-1000 ease-in-out text-white
    ${videoExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                {/* Video */}
                <video
                    autoPlay muted loop playsInline
                    src="/Images/Vandor/hero_cover.mp4"
                    className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* ✅ Text — absolute, above overlay, centered */}
                <div className="absolute inset-0 z-10 flex text-center flex-col items-center justify-center">
                    <h1 className="md:text-5xl text-2xl font-bold text-white text-center leading-[1.2]">
                        Host Your Activities.
                        Reach <br /> Thousands.
                    </h1>
                    <p className='my-10'>Create your organizer account, get instant access to your dedicated admin panel, <br /> and start selling tickets to Bahamas Vibes' growing audience of thousands.</p>
                    <div className='flex items-center gap-10 flex-wrap'>
                        <div className='text-center'>
                            <h3 className='text-3xl font-semibold'>500+</h3>
                            <p>Events Listed</p>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-3xl font-semibold'>15k</h3>
                            <p>Tickets Sold</p>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-3xl font-semibold'>500+</h3>
                            <p>Organizer Satisfaction</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-primary py-3 px-8 rounded mt-8'>Start Hosting Today</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default VandorHeader;