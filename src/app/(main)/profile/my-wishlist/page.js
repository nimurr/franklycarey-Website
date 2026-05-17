'use client';
import React, { useState } from 'react';
import { FiHeart, FiMapPin, FiSliders } from 'react-icons/fi';
import { BsCalendar2Event, BsMusicNoteBeamed } from 'react-icons/bs';
import Header from '@/Components/Common/Header';

// ── Mock bookings data ────────────────────────────────────────────
const bookingsData = [
    { id: 1, title: 'Junkanoo Summer Festival 2026', date: 'Tue, May 5 • 5:00 AM GMT+6', location: 'Cable Beach, Nassau', price: 50.0, category: 'Music', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80' },
    { id: 2, title: 'Junkanoo Summer Festival 2026', date: 'Tue, May 5 • 5:00 AM GMT+6', location: 'Cable Beach, Nassau', price: 50.0, category: 'Music', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80' },
    { id: 3, title: 'Junkanoo Summer Festival 2026', date: 'Tue, May 5 • 5:00 AM GMT+6', location: 'Cable Beach, Nassau', price: 50.0, category: 'Music', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80' },
    { id: 4, title: 'Junkanoo Summer Festival 2026', date: 'Tue, May 5 • 5:00 AM GMT+6', location: 'Cable Beach, Nassau', price: 50.0, category: 'Music', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80' },
];

// ── Single Booking Card ───────────────────────────────────────────
const BookingCard = ({ booking }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="bg-[#e8e8e4] rounded-xl overflow-hidden flex flex-col">

            {/* Image area */}
            <div className="relative w-full">
                <img
                    src={booking.image}
                    alt={booking.title}
                    className="w-full h-48 object-cover"
                />

                {/* Heart button — top right white box */}
                <button
                    onClick={() => setLiked((p) => !p)}
                    className="absolute top-2 right-2 w-9 h-9 bg-white flex items-center justify-center rounded shadow active:scale-95 transition-all"
                >
                    <FiHeart
                        className={`w-4 h-4 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-gray-700'}`}
                    />
                </button>

                {/* Category badge — bottom left */}
                <div className="absolute bottom-2 left-2 bg-white flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold text-gray-700 shadow">
                    <BsMusicNoteBeamed className="w-3 h-3 text-gray-500" />
                    {booking.category}
                </div>
            </div>

            {/* Card body */}
            <div className="p-3 flex flex-col gap-2 flex-1">

                {/* Title */}
                <h3 className="text-sm font-black text-gray-900 leading-snug">
                    {booking.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-5 h-5 rounded border border-orange-400 flex items-center justify-center shrink-0">
                        <BsCalendar2Event className="w-3 h-3 text-orange-500" />
                    </div>
                    {booking.date}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <FiMapPin className="w-4 h-4 text-orange-500 shrink-0" />
                    {booking.location}
                </div>

                {/* Footer: price + button */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">
                        From :{' '}
                        <span className="text-orange-500 font-black">
                            ${booking.price.toFixed(2)}
                        </span>
                    </p>
                    <button className="bg-orange-500 hover:brightness-110 active:scale-95 transition-all text-white text-xs font-bold px-4 py-1.5 rounded">
                        Booked
                    </button>
                </div>
            </div>
        </div>
    );
};

// ── Main Page ─────────────────────────────────────────────────────
const Page = () => {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Header row */}
            <div className="flex items-center justify-between  my-10">
                <h1 className="text-xl font-black text-gray-900">My Wishlist</h1>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-orange-500 transition-colors">
                    <FiSliders className="w-5 h-5" />
                    Filter
                </button>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {bookingsData.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                ))}
            </div>

        </div>
    );
};

export default Page;