'use client'
import React, { useState } from 'react';
import { FiHeart, FiShare2, FiCalendar, FiClock, FiMapPin, FiUsers, FiCheckCircle, FiStar } from 'react-icons/fi';
import { MdOutlineFollowTheSigns } from 'react-icons/md';

// ── Gallery images ────────────────────────────────────────────────
const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80', tall: true },
    { id: 2, src: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&q=80', tall: false },
    { id: 3, src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80', tall: false },
    { id: 4, src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&q=80', tall: false },
    { id: 5, src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&q=80', tall: false },
];

const highlights = [
    'Live Junkanoo Performances',
    'Costume Displays & Demonstrations',
    'Cultural Workshops & Activities',
    'Local Food & Drinks',
    'Games & Competitions',
    'Family-Friendly Experience',
];

const organizerTags = ['Music Festivals', 'Beach Events', 'Cultural Celebrations', 'Corporate Events'];

// ── Ticket Booking Card ───────────────────────────────────────────
const BookingCard = () => {
    const [qty, setQty] = useState(1);
    const pricePerTicket = 45;
    const serviceFee = 5;
    const subtotal = pricePerTicket * qty;
    const total = subtotal + serviceFee;

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col gap-4 sticky top-6">

            <div>
                <p className="text-xs text-gray-500 font-medium">Price per Ticket</p>
                <p className="text-4xl font-black text-gray-900 mt-1">${pricePerTicket}</p>
            </div>

            {/* Qty */}
            <div>
                <p className="text-xs text-gray-500 font-medium mb-2">Number of Tickets</p>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-700 font-bold hover:bg-gray-100 active:scale-95 transition-all"
                    >
                        −
                    </button>
                    <span className="text-base font-bold text-gray-900 w-6 text-center">{String(qty).padStart(2, '0')}</span>
                    <button
                        onClick={() => setQty((q) => q + 1)}
                        className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-700 font-bold hover:bg-gray-100 active:scale-95 transition-all"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Price breakdown */}
            <div className="flex flex-col gap-1.5 border-t border-gray-100 pt-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Subtotal ({qty} Ticket{qty > 1 ? 's' : ''})</span>
                    <span>${subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Service Fee</span>
                    <span>${serviceFee}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold text-gray-900 pt-1 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-orange-500">${total}</span>
                </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-orange-500 hover:brightness-110 active:scale-95 transition-all text-white font-bold py-3 rounded-lg text-base shadow-md shadow-orange-200">
                Book Now
            </button>

            <p className="text-xs text-gray-400 text-center leading-snug">
                Free cancellation up to<br />24 hours before the event
            </p>
        </div>
    );
};

// ── Main Component ────────────────────────────────────────────────
const EventsDetailsContent = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">

                {/* ── Left / Main Content ── */}
                <div className="flex-1 flex flex-col gap-8">

                    {/* Header */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                                Junkanoo Summer Festival 2026
                            </h1>
                            <div className="flex items-center gap-3 shrink-0 mt-1">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 active:scale-95 transition-all">
                                    <FiHeart className="w-4 h-4 text-gray-500" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 active:scale-95 transition-all">
                                    <FiShare2 className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Meta row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex items-start gap-2">
                                <FiCalendar className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Date</p>
                                    <p className="text-sm font-semibold text-gray-800">May 15, 2026</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <FiClock className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Time</p>
                                    <p className="text-sm font-semibold text-gray-800">6:00 PM – 11:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <FiMapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Location at</p>
                                    <p className="text-sm font-semibold text-gray-800">Cable Beach, Nassau</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <FiUsers className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Capacity</p>
                                    <p className="text-sm font-semibold text-gray-800">500 attendees</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-black text-gray-900">About This Event</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The Junkanoo Summer Festival is a vibrant cultural celebration held annually in the Bahamas, typically between late June and early August. It brings the energy and traditions of Junkanoo into a summer-friendly, family-oriented experience.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Unlike the main Junkanoo parades held during Christmas and New Year, this festival focuses more on cultural immersion, entertainment, and community engagement. Visitors and locals can experience authentic Bahamian heritage through music, dance, food, and interactive activities in a relaxed, festive atmosphere.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The event usually takes place in Nassau, especially around Bay Street and nearby historic locations, making it a central attraction for tourists exploring the island.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-black text-gray-900">Event Highlights</h2>
                        <ul className="flex flex-col gap-2">
                            {highlights.map((h) => (
                                <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                                    <FiCheckCircle className="w-4 h-4 text-gray-400 shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gallery */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-black text-gray-900">Event Gallery</h2>
                        <div className="grid grid-cols-3 gap-2" style={{ gridTemplateRows: 'auto auto' }}>
                            {/* Large left image spanning 2 rows */}
                            <div className="row-span-2 rounded-xl overflow-hidden">
                                <img
                                    src={galleryImages[0].src}
                                    alt="gallery"
                                    className="w-full h-full object-cover"
                                    style={{ minHeight: '200px' }}
                                />
                            </div>
                            {/* 4 smaller images on the right */}
                            {galleryImages.slice(1).map((img) => (
                                <div key={img.id} className="rounded-xl overflow-hidden h-28">
                                    <img
                                        src={img.src}
                                        alt="gallery"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Organizer */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-black text-gray-900">About the Organizer</h2>

                        {/* Organizer banner */}
                        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                            <div className="relative h-32">
                                <img
                                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
                                    alt="organizer banner"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                            </div>

                            {/* Profile row */}
                            <div className="px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                                        alt="organizer"
                                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">Cay Symphony Studio</p>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <FiStar className="w-3 h-3 text-orange-500" />
                                            <span className="font-semibold text-gray-700">4.9</span>
                                            <span>· 45 Events</span>
                                            <span>· 25,000+ Attendees</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1.5 bg-orange-500 hover:brightness-110 active:scale-95 transition-all text-white text-xs font-semibold px-4 py-2 rounded">
                                        <MdOutlineFollowTheSigns className="w-4 h-4" />
                                        Follow
                                    </button>
                                    <button className="border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2 rounded hover:bg-gray-50 active:scale-95 transition-all">
                                        View Full Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Premier event organiser in the Bahamas specialising in beach festivals, music events, and cultural celebrations. With over 10 years of experience, we create unforgettable moments for locals and tourists alike.
                        </p>

                        {/* Tags */}
                        <div className="flex items-center flex-wrap gap-2">
                            {organizerTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1 hover:border-orange-400 hover:text-orange-500 cursor-pointer transition-colors duration-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Right / Booking Card ── */}
                <div className="w-full lg:w-72 shrink-0">
                    <BookingCard />
                </div>

            </div>
        </div>
    );
};

export default EventsDetailsContent;