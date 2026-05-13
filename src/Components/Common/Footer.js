import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const footerLinks = [
    {
        title: 'Explore',
        links: ['All Events', 'Music Events', 'Art & Culture', 'Beach Events', 'Festivals'],
    },
    {
        title: 'Company',
        links: ['About Us', 'Press Kit', 'Blog', 'Contact'],
    },
    {
        title: 'Support',
        links: ['Help Center', 'Refund Policy', 'Privacy Policy', 'Terms of Use', 'List Your Event'],
    },
];

const socials = [
    { icon: <FaFacebookF className="w-4 h-4" />, label: 'Facebook' },
    { icon: <FaXTwitter className="w-4 h-4" />, label: 'X' },
    { icon: <FaInstagram className="w-4 h-4" />, label: 'Instagram' },
    { icon: <FaLinkedinIn className="w-4 h-4" />, label: 'LinkedIn' },
];

const Footer = () => {
    return (
        <footer className="relative min-h-[70vh] text-white overflow-hidden flex items-center justify-center w-full mx-auto ">

            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/Images/Home/Footer_bg_video.mp4"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 pt-16 pb-6 flex flex-col gap-10">

                {/* Top row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand column */}
                    <div className="flex flex-col gap-4">
                        {/* Logo */}
                        <div className="flex items-center">
                           <img className='w-32' src="/Images/Auth/logo.png" alt="" />
                        </div>

                        {/* Tagline */}
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                            Your gateway to unforgettable experiences across the Bahamas — from Nassau to the Exumas.
                        </p>

                        {/* Socials */}
                        <div className="flex items-center gap-3 mt-1">
                            {socials.map(({ icon, label }) => (
                                <button
                                    key={label}
                                    aria-label={label}
                                    className="w-8 h-8 rounded flex items-center justify-center border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-200 active:scale-95"
                                >
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map(({ title, links }) => (
                        <div key={title} className="flex flex-col gap-3">
                            <p className="text-white font-semibold text-base">{title}</p>
                            <ul className="flex flex-col gap-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-400 text-sm hover:text-orange-500 transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700" />

                {/* Bottom bar */}
                <div className="flex items-center justify-center text-center">
                    <p className="text-gray-400 text-sm flex items-center gap-3">
                        © 2026 
                        <img className='w-16' src="/Images/Auth/logo.png" alt="" />
                        All rights reserved. Made with ♥ in the Bahamas.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;