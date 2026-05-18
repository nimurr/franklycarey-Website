'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import {
    FiUser,
    FiBookmark,
    FiHeart,
    FiSettings,
    FiLogOut,
    FiMail,
} from 'react-icons/fi';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Islands', href: '/islands' },
    { label: 'Categories', href: '/categories' },
    { label: 'Become a Vendor', href: '/vendor' },
    { label: 'Drive With Us', href: '/drive' },
    { label: 'Mobile App', href: '/app' },
    { label: 'Contact', href: '/contact' },
];

const dropdownLinks = [
    { label: 'My Profile', href: '/profile', icon: FiUser },
    { label: 'My Bookings', href: '/profile/my-booking', icon: FiBookmark },
    { label: 'Wishlist', href: '/profile/my-wishlist', icon: FiHeart },
    { label: 'Settings', href: '/profile/settings', icon: FiSettings },
];

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [white, setWhite] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Fade to white after 1s (hero video transition)
    useEffect(() => {
        const t = setTimeout(() => setWhite(true), 1000);
        return () => clearTimeout(t);
    }, []);

    // Scroll shadow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const txt = `transition-colors duration-1000 ${white ? 'text-white' : 'text-gray-600'}`;

    return (
        <>
            <header className={`sticky top-0 z-50 w-full transition-all duration-300 md:pt-8`}>

                <div className={`container border-y-0 mx-auto px-5 py-5 flex items-center justify-between gap-6
                    transition-colors duration-1000
                    ${white
                        ? 'border-x border-transparent bg-slate-900/10 rounded-lg backdrop-blur-sm shadow-sm'
                        : 'border-y-2 border-gray-300'
                    }`}
                >
                    {/* Logo */}
                    <Link href="/" className="shrink-0">
                        <img className="w-32 h-auto" src="/Images/Auth/logo.png" alt="Xplorify" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`relative px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 group
                                        ${isActive
                                            ? 'text-primary'
                                            : `${txt} hover:text-primary hover:bg-primary/5`
                                        }`}
                                >
                                    {label}
                                    <span
                                        className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-300
                                            ${isActive
                                                ? 'opacity-100 scale-x-100'
                                                : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right — Sign In + Avatar + Hamburger */}
                    <div className="flex items-center gap-3 shrink-0">
                        <Link
                            href="/signin"
                            className="bg-primary hover:bg-primary/90 active:scale-95 text-white
                                px-5 py-2.5 font-semibold text-sm rounded-xl transition-all duration-200
                                shadow-sm shadow-primary/20 hover:shadow-primary/30 hover:shadow-md"
                        >
                            Sign In
                        </Link>

                        {/* ── Avatar + Dropdown ── */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen((p) => !p)}
                                className="flex items-center gap-2 px-2 py-1 border border-white/30 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200"
                            >
                                <img
                                    className="w-8 h-8 rounded-full object-cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&s"
                                    alt="avatar"
                                />
                                <span className={`text-sm font-semibold ${txt}`}>Nerob</span>
                            </button>

                            {/* ── Dropdown Panel ── */}
                            {dropdownOpen && (
                                <div className="absolute top-[calc(100%+10px)] right-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[999]">

                                    {/* Email row */}
                                    <div className="flex items-center gap-2.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
                                        <FiMail className="w-4 h-4 text-gray-400 shrink-0" />
                                        <p className="text-xs text-gray-500 truncate">Nuruxuinur@yahoo.com</p>
                                    </div>

                                    {/* Nav links */}
                                    <div className="py-1">
                                        {dropdownLinks.map(({ label, href, icon: Icon }) => {
                                            const isActive = pathname === href;
                                            return (
                                                <Link
                                                    key={href}
                                                    href={href}
                                                    onClick={() => setDropdownOpen(false)}
                                                    className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150
                                                        ${isActive
                                                            ? 'bg-orange-50 text-primary'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                                                        }`}
                                                >
                                                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    {/* Sign Out */}
                                    <div className="border-t border-gray-100 py-1">
                                        <button
                                            onClick={() => {
                                                setDropdownOpen(false);
                                                // call your signout handler here
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors duration-150"
                                        >
                                            <FiLogOut className="w-4 h-4 shrink-0" />
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl
                                border border-gray-200 text-gray-100 hover:text-primary hover:border-primary/30
                                hover:bg-primary/5 transition-all duration-200"
                        >
                            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div
                    className={`xl:hidden overflow-hidden transition-all bg-black/70 duration-300 ease-in-out
                        ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <nav className="container mx-auto px-5 pb-5 flex flex-col gap-1 border-t border-gray-100 pt-3">
                        {navLinks.map(({ label, href }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                                        ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : `${txt} hover:bg-gray-50 hover:text-primary`
                                        }`}
                                >
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    )}
                                    {label}
                                </Link>
                            );
                        })}

                        {/* Mobile dropdown links */}
                        <div className="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-1">
                            {/* {dropdownLinks.map(({ label, href, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-all duration-200"
                                >
                                    <Icon className="w-4 h-4 text-gray-400" />
                                    {label}
                                </Link>
                            ))} */}
                            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200">
                                <FiLogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;