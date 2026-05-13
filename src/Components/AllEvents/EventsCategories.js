'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiSliders, FiCalendar, FiMapPin, FiBookmark } from 'react-icons/fi';
import { MdOutlineMusicNote } from 'react-icons/md';

// ── Data ──────────────────────────────────────────────────────────
const categories = [
    {
        title: 'Festivals & Cultural Events',
        subcategories: [
            'Junkanoo Parades',
            'Cultural Festivals',
            'Cultural Festivals',
            'Heritage Celebrations',
            'Art & Craft Festivals',
            'Food & Drink Festivals',
        ],
    },
    {
        title: 'Music & Entertainment',
        subcategories: ['Concerts', 'DJ Nights', 'Live Bands', 'Open Mic'],
    },
    {
        title: 'Sports & Outdoor Activities',
        subcategories: ['Water Sports', 'Hiking', 'Beach Games', 'Tournaments'],
    },
    {
        title: 'Festivals & Cultural Events',
        subcategories: [
            'Junkanoo Parades',
            'Cultural Festivals',
            'Cultural Festivals',
            'Heritage Celebrations',
            'Art & Craft Festivals',
            'Food & Drink Festivals',
        ],
    },
    {
        title: 'Music & Entertainment',
        subcategories: ['Concerts', 'DJ Nights', 'Live Bands', 'Open Mic'],
    },
    {
        title: 'Sports & Outdoor Activities',
        subcategories: ['Water Sports', 'Hiking', 'Beach Games', 'Tournaments'],
    },
];

const events = [
    {
        id: 1,
        title: 'Junkanoo Summer Festival 2026',
        date: 'Tue, May 5 • 5:00 AM GMT+6',
        location: 'Cable Beach, Nassau',
        price: '$50.00',
        tag: 'Music',
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80',
    },
    {
        id: 2,
        title: 'Junkanoo Summer Festival 2026',
        date: 'Tue, May 5 • 5:00 AM GMT+6',
        location: 'Cable Beach, Nassau',
        price: '$50.00',
        tag: 'Music',
        image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&q=80',
    },
    {
        id: 3,
        title: 'Junkanoo Summer Festival 2026',
        date: 'Tue, May 5 • 5:00 AM GMT+6',
        location: 'Cable Beach, Nassau',
        price: '$50.00',
        tag: 'Music',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80',
    },
    {
        id: 4,
        title: 'Junkanoo Summer Festival 2026',
        date: 'Tue, May 5 • 5:00 AM GMT+6',
        location: 'Cable Beach, Nassau',
        price: '$50.00',
        tag: 'Music',
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80',
    },
    {
        id: 5,
        title: 'Junkanoo Summer Festival 2026',
        date: 'Tue, May 5 • 5:00 AM GMT+6',
        location: 'Cable Beach, Nassau',
        price: '$50.00',
        tag: 'Music',
        image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&q=80',
    },
    {
        id: 6,
        title: 'Junkanoo Summer Festival 2026',
        date: 'Tue, May 5 • 5:00 AM GMT+6',
        location: 'Cable Beach, Nassau',
        price: '$50.00',
        tag: 'Music',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80',
    },
];

// ── Event Card ────────────────────────────────────────────────────
const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">

        {/* Image */}
        <div className="relative">
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-60 p-3 object-cover [clip-path:polygon(30%_0%,70%_0%,100%_0,100%_100%,70%_100%,40%_100%,0_100%,0%_40%)]"

            />
            {/* Bookmark */}
            <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all duration-200 active:scale-95">
                <FiBookmark className="w-4 h-4 text-gray-600" />
            </button>
            {/* Tag */}
            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 rounded px-2 py-0.5 text-xs font-semibold text-gray-700">
                <MdOutlineMusicNote className="w-3 h-3 text-orange-500" />
                {event.tag}
            </div>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-2 flex-1">
            <h3 className="font-bold text-gray-900 text-sm leading-snug">{event.title}</h3>

            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FiCalendar className="w-3.5 h-3.5 shrink-0" />
                <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{event.location}</span>
            </div>
        </div>

        {/* Footer */}
        <div className="px-4 pb-4 flex items-center justify-between">
            <p className="text-sm text-gray-700">
                From :{' '}
                <span className="text-orange-500 font-bold">{event.price}</span>
            </p>
            <Link href={`/events/${event.id}`} className="bg-orange-500 hover:brightness-110 active:scale-95 transition-all text-white text-xs font-semibold px-4 py-2 rounded">
                Book Now
            </Link>
        </div>

    </div>
);

// ── Main Component ────────────────────────────────────────────────
const EventsCategories = () => {
    const [openCategory, setOpenCategory] = useState('Festivals & Cultural Events');
    const [activeSubcat, setActiveSubcat] = useState('Junkanoo Parades');

    const toggleCategory = (title) => {
        setOpenCategory((prev) => (prev === title ? null : title));
    };

    return (
        <div className="min-h-screen py-10">
            <div className=" mx-auto flex flex-col md:flex-row gap-8">

                {/* ── Sidebar ── */}
                <aside className="w-full md:w-72 shrink-0 flex flex-col gap-2">
                    <h2 className="text-2xl font-black text-gray-900 mb-3">Categories</h2>

                    {categories.map(({ title, subcategories }) => {
                        const isOpen = openCategory === title;
                        return (
                            <div key={title} className="border-b border-gray-300 pb-2">

                                {/* Category header */}
                                <button
                                    onClick={() => toggleCategory(title)}
                                    className="w-full flex items-center justify-between py-2 text-left group"
                                >
                                    <span className={`font-bold text-sm transition-colors duration-200 ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                                        {title}
                                    </span>
                                    {isOpen
                                        ? <FiChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                                        : <FiChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                                    }
                                </button>

                                {/* Subcategories */}
                                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <ul className="flex flex-col gap-1 pb-2 pl-1">
                                        {subcategories.map((sub, i) => (
                                            <li key={`${sub}-${i}`}>
                                                <button
                                                    onClick={() => setActiveSubcat(sub)}
                                                    className={`text-sm w-full text-left py-0.5 transition-colors duration-200
                                                        ${activeSubcat === sub && isOpen
                                                            ? 'text-orange-500 font-semibold'
                                                            : 'text-gray-500 hover:text-gray-800'
                                                        }`}
                                                >
                                                    {sub}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        );
                    })}
                </aside>

                {/* ── Main Content ── */}
                <main className="flex-1 flex flex-col gap-5">

                    {/* Top bar */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">{openCategory || 'All Events'}</h2>
                            <p className="text-orange-500 text-sm font-semibold mt-0.5">{activeSubcat}</p>
                        </div>
                        <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 text-sm font-semibold px-4 py-2 rounded hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-sm">
                            <FiSliders className="w-4 h-4" />
                            Filter
                        </button>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>

                </main>

            </div>
        </div>
    );
};

export default EventsCategories;