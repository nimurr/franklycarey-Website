

import React from 'react';

const ReadytoExperience = () => {
    return (
        <div className=" min-h-screen flex items-center justify-center ">
            <div className=" border-y border-gray-300 md:py-20 py-10 w-full">
                <div className="relative border-y border-gray-300 w-full overflow-hidden min-h-[500px] flex items-center justify-center"  >

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
                    <div className="absolute inset-0 bg-black/35" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <h1
                            className="text-white font-semibold leading-tight mb-4"
                            style={{
                                fontSize: 'clamp(3rem, 6vw, 4rem)',
                                fontFamily: "'Barlow Condensed', 'Arial Black', sans-serif",
                                textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                                letterSpacing: '-0.5px',
                            }}
                        >
                            Ready to Experience<br />the Bahamas?
                        </h1>

                        <p
                            className="text-white/90 mb-8"
                            style={{
                                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                                fontFamily: "'Barlow', 'Helvetica Neue', sans-serif",
                                fontWeight: 400,
                                textShadow: '0 1px 6px rgba(0,0,0,0.35)',
                                // maxWidth: '480px',
                            }}
                        >
                            Book your next unforgettable event today — thousands of memories waiting.
                        </p>

                        <button
                            className="flex items-center gap-2 font-semibold text-white px-7 py-3 rounded transition-all duration-200 hover:brightness-110 active:scale-95 border border-white"
                            style={{
                                backgroundColor: '#F26522',
                                fontFamily: "'Barlow', 'Helvetica Neue', sans-serif",
                                fontSize: '0.92rem',
                                letterSpacing: '0.3px',
                                boxShadow: '0 4px 16px rgba(242,101,34,0.4)',
                            }}
                        >
                            {/* <span style={{ fontSize: '1rem' }}>›</span> */}
                            🎉
                            Explore All Events
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadytoExperience;