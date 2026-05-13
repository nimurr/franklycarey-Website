import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineConfirmationNumber, MdOutlineNotificationsActive, MdOutlineExplore } from 'react-icons/md';
import { FiSmartphone } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { BsBookmarkHeart } from 'react-icons/bs';

const features = [
    {
        icon: <MdOutlineConfirmationNumber className="w-5 h-5 text-orange-500" />,
        title: 'Instant Ticket Booking',
        desc: 'Book in seconds, get your QR code instantly',
    },
    {
        icon: <MdOutlineNotificationsActive className="w-5 h-5 text-orange-500" />,
        title: 'Live Event Alerts',
        desc: 'Never miss a drop — get notified before sellout',
    },
    {
        icon: <MdOutlineExplore className="w-5 h-5 text-orange-500" />,
        title: 'Explore Nearby',
        desc: 'Discover events within walking distance of you',
    },
    {
        icon: <BsBookmarkHeart className="w-5 h-5 text-orange-500" />,
        title: 'Wishlist & Save',
        desc: 'Save events and share with friends',
    },
];

const ShowMobileApp = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex items-center justify-center py-12">
            <div className="border-y border-gray-300 md:py-20 py-10 w-full">

                <div
                    ref={sectionRef}
                    className="relative min-h-[80vh] w-full bg-gradient-to-l to-orange-500 from-[#772573] overflow-hidden rounded-2xl flex items-center p-5"
                >
                    {/* Top-right decoration */}
                    <img
                        className="absolute top-0 right-0 w-auto h-auto pointer-events-none transition-all duration-700 ease-out"
                        style={{
                            transitionDelay: visible ? '100ms' : '0ms',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translate(0, 0)' : 'translate(60px, -60px)',
                        }}
                        src="/Images/Home/mobile_card_top.png"
                        alt=""
                    />

                    {/* Bottom-left decoration */}
                    <img
                        className="absolute bottom-0 left-0 w-auto h-auto pointer-events-none transition-all duration-700 ease-out"
                        style={{
                            transitionDelay: visible ? '100ms' : '0ms',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translate(0, 0)' : 'translate(-60px, 60px)',
                        }}
                        src="/Images/Home/mobile_card_bottom.png"
                        alt=""
                    />

                    {/* Inner layout */}
                    <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 gap-10">

                        {/* ── Left: Text Content ── */}
                        <div
                            className={`flex-1 flex flex-col gap-5 transition-all duration-700 ease-out
                                ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}
                        >
                            {/* Badge */}
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-white text-white text-sm font-semibold w-fit">
                                <FiSmartphone className="w-4 h-4" />
                                Mobile App
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                                Your Events, Always<br />in Your Pocket
                            </h2>

                            {/* Description */}
                            <p className="text-white/80 text-base leading-relaxed max-w-md">
                                Book tickets, discover hidden gems, and get real-time updates — all
                                from the Bahamas Vibes app. Your paradise experience starts here.
                            </p>

                            {/* Feature List */}
                            <div className="flex flex-col gap-3">
                                {features.map(({ icon, title, desc }, i) => (
                                    <div
                                        key={title}
                                        className={`flex items-start gap-4 transition-all duration-700 ease-out`}
                                        style={{
                                            transitionDelay: visible ? `${200 + i * 100}ms` : '0ms',
                                            opacity: visible ? 1 : 0,
                                            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
                                        }}
                                    >
                                        <div className="shrink-0 w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center">
                                            {icon}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{title}</p>
                                            <p className="text-white/70 text-xs mt-0.5">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Store Buttons */}
                            <div
                                className={`flex items-center gap-4 mt-2 transition-all duration-700 ease-out`}
                                style={{
                                    transitionDelay: visible ? '700ms' : '0ms',
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                                }}
                            >
                                {/* App Store */}
                                <button className="flex items-center gap-3 border-2 border-white/60 hover:border-white text-white rounded-xl px-5 py-3 transition-all duration-200 hover:bg-white/10 active:scale-95">
                                    <FaApple className="w-7 h-7" />
                                    <div className="text-left">
                                        <p className="text-white/70 text-[10px] leading-none">Download on the</p>
                                        <p className="font-bold text-sm leading-tight">App Store</p>
                                    </div>
                                </button>

                                {/* Google Play */}
                                <button className="flex items-center gap-3 border-2 border-white/60 hover:border-white text-white rounded-xl px-5 py-3 transition-all duration-200 hover:bg-white/10 active:scale-95">
                                    <FaGooglePlay className="w-6 h-6 text-green-400" />
                                    <div className="text-left">
                                        <p className="text-white/70 text-[10px] leading-none">Get it on</p>
                                        <p className="font-bold text-sm leading-tight">Google Play</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* ── Right: Phone Mockups ── */}
                        <div
                            className={`flex-1 flex justify-end items-end gap-4  transition-all duration-700 ease-out
                                ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}
                            style={{ transitionDelay: visible ? '200ms' : '0ms' }}
                        >
                            <img
                                src="/Images/Home/mobile_mockup_1.png"
                                alt="Xplorify app"
                                className="w-full drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowMobileApp;