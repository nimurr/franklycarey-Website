'use client'

import React, { useState } from 'react';
import { FiSliders, FiCalendar, FiMapPin, FiBookmark, FiUserPlus } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { MdOutlineMusicNote, MdOutlinePeopleAlt, MdOutlineCalendarMonth, MdOutlineLocalActivity } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import Link from 'next/link';
import { CiEdit } from 'react-icons/ci';

// ── Data ──────────────────────────────────────────────────────────
const stats = [
    { icon: <HiOutlineUserGroup className="w-8 h-8 text-orange-400" />, label: 'Followers', value: '20,000+' },
    { icon: <MdOutlineCalendarMonth className="w-8 h-8 text-orange-400" />, label: 'Member Since', value: 'May 15, 2020' },
    { icon: <FaStar className="w-7 h-7 text-yellow-400" />, label: 'Ratings', value: '4.9' },
    { icon: <MdOutlineLocalActivity className="w-8 h-8 text-orange-400" />, label: 'Activities', value: '45' },
    { icon: <MdOutlinePeopleAlt className="w-8 h-8 text-orange-400" />, label: 'Attendees', value: '25,000+' },
];

const tags = ['Music Festivals', 'Beach Events', 'Cultural Celebrations', 'Corporate Events'];

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
        image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&q=80',
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


// ── Main Page ─────────────────────────────────────────────────────
const ProfileDetails = () => {
    const [followed, setFollowed] = useState(false);


    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Cay Symphony Studio');
    const [image, setImage] = useState('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80');
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSave = () => {
        if (previewImage) setImage(previewImage);
        setIsEditing(false);
        setPreviewImage(null);
        // call your API here to save name + image
    };

    const handleCancel = () => {
        setIsEditing(false);
        setPreviewImage(null);
    };


    return (
        <div className="min-h-screen pb-8 -mt-40 z-10">
            <div className="mx-auto flex flex-col gap-6">

                {/* ── Profile Header ── */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-5 z-10">

                    {/* Top row: avatar + name + follow */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-4">

                            {/* ── Avatar — click to pick file when editing ── */}
                            <div className="relative shrink-0">
                                <img
                                    src={previewImage || image}
                                    alt="Cay Symphony Studio"
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shadow-md border border-gray-200"
                                />
                                {isEditing && (
                                    <>
                                        {/* invisible file input */}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            id="avatar-upload"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                        {/* clickable overlay */}
                                        <label
                                            htmlFor="avatar-upload"
                                            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-black/50 cursor-pointer text-white text-[10px] font-semibold gap-1"
                                        >
                                            <CiEdit className="w-5 h-5" />
                                            Change
                                        </label>
                                    </>
                                )}
                            </div>

                            {/* ── Name — text when viewing, input when editing ── */}
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoFocus
                                    className="text-2xl md:text-3xl font-black text-gray-900 border-b-2 border-orange-500 outline-none bg-transparent w-full max-w-xs"
                                />
                            ) : (
                                <h1 className="text-2xl md:text-3xl font-black text-gray-900">
                                    {name}
                                </h1>
                            )}
                        </div>

                        {/* ── Button — toggles between edit / save+cancel ── */}
                        {isEditing ? (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleCancel}
                                    className="flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded border-2 border-gray-300 text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded bg-orange-500 hover:brightness-110 text-white shadow-md shadow-orange-200 active:scale-95 transition-all"
                                >
                                    Save Changes
                                </button>
                            </div>
                        ) : (
                            <Link 
                                href="/profile/settings"
                                className="flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded bg-orange-500 hover:brightness-110 text-white shadow-md shadow-orange-200 active:scale-95 transition-all"
                            >
                                <CiEdit className="w-4 h-4" />
                                Profile Update
                            </Link>
                        )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
                        Premier event organizer in the Bahamas specializing in beach festivals, music events, and cultural celebrations. With over 10 years of experience, we create unforgettable moments for locals and tourists alike.
                    </p>

                    {/* Bio */}

                    {/* Stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 border-t border-gray-100 pt-5">
                        {stats.map(({ icon, label, value }) => (
                            <div key={label} className="flex items-center gap-3">
                                <div className="shrink-0">{icon}</div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide leading-none">{label}</p>
                                    <p className="text-sm font-black text-gray-900 mt-0.5">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="flex items-center flex-wrap gap-2 border-t border-gray-100 pt-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-semibold text-orange-500 border border-orange-400 rounded-full px-4 py-1.5 hover:bg-orange-50 cursor-pointer transition-colors duration-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>

                {/* ── Upcoming Events ── */}
                <div className="flex flex-col gap-4">

                    {/* Section header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-black text-gray-900">Upcoming Events</h2>
                        <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 text-sm font-semibold px-4 py-2 rounded hover:bg-gray-50 active:scale-95 transition-all shadow-sm">
                            <FiSliders className="w-4 h-4" />
                            Filter
                        </button>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfileDetails;