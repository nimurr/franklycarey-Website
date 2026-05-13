 



'use client';
import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';

const EverntProfileHero = () => {
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
        <div className=' overflow-hidden md:min-h-[60vh] min-h-[70vh] z-0'>
            <Header />

            {/* ── Background video — absolute stays inside Hero only ── */}
            <div className={`absolute overflow-hidden md:max-h-[60vh] max-h-[70vh] rounded-b-2xl inset-0 z-0 transition-opacity duration-1000 ease-in-out
                ${videoExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <video
                    autoPlay muted loop playsInline
                    src="/Images/Events/event_detials_hero.mp4"
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>


        </div>
    );
};

export default EverntProfileHero;