'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

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

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [white, setWhite] = useState(false); // ← added

    useEffect(() => {
        const timer = setTimeout(() => setWhite(true), 1000); // ← added
        return () => clearTimeout(timer); // ← added
    }, []); // ← added

    const txt = `transition-colors duration-1000 ${white ? 'text-white' : 'text-gray-600'}`; // ← added

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 md:pt-8 
                    ${scrolled
                        ? ' '
                        : ''
                    }`}
            >

                <div className={`container  border-y-0 mx-auto px-5 py-5 flex items-center justify-between gap-6
                        transition-colors duration-1000
                        ${white ? 'border-x border-transparent bg-slate-900/10 rounded-lg  backdrop-blur-md shadow-sm' :
                        'border-y-2 border-gray-300'}`}>
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
                                            ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'}`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right — Sign In + Hamburger */}
                    <div className="flex items-center gap-3 shrink-0">
                        <Link
                            href="/signin"
                            className="bg-primary hover:bg-primary/90 active:scale-95 text-white 
                                px-5 py-2.5 font-semibold text-sm rounded-xl transition-all duration-200 
                                shadow-sm shadow-primary/20 hover:shadow-primary/30 hover:shadow-md"
                        >
                            Sign In
                        </Link>

                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
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
                    className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out
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
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;