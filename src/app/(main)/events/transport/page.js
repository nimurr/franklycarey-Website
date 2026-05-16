'use client'
import Header from '@/Components/Common/Header';
import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

// ── Transport Types Data ──────────────────────────────────────────
const transportTypes = [
    {
        id: 1,
        label: 'Taxi',
        price: 5.0,
        image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&q=80',
    },
    {
        id: 2,
        label: 'Limousine',
        price: 5.0,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80',
    },
    {
        id: 3,
        label: 'SUV',
        price: 5.0,
        image: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=400&q=80',
    },
    {
        id: 4,
        label: 'Minibus',
        price: 5.0,
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80',
    },
    {
        id: 5,
        label: 'Tour Bus',
        price: 5.0,
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80',
    },
];

// ── Drivers Data ──────────────────────────────────────────────────
const drivers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: 'Akkas Mia',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=300&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    hasAvatar: i === 1, // only driver index 1 shows the small avatar badge
}));

// ── Main Page ─────────────────────────────────────────────────────
const Page = () => {
    const [selectedTransport, setSelectedTransport] = useState(1);
    const [selectedDriver, setSelectedDriver] = useState(null);

    return (
        <div className="min-h-screen flex flex-col gap-8 mb-10">
            <Header />
            {/* ── Section: Transport Types ── */}
            <div className="flex flex-col gap-3">
                <h2 className=" font-bold text-gray-800 text-2xl">Select Transport Types</h2>

                <div className="grid grid-cols-5 gap-5 overflow-x-auto scrollbar-hide">
                    {transportTypes.map((type) => {
                        const isSelected = selectedTransport === type.id;
                        return (
                            <button
                                key={type.id}
                                onClick={() => setSelectedTransport(type.id)}
                                className={`flex flex-col  p-2 overflow-hidden border-2 transition-all duration-200 bg-white
                         active:scale-95 ${ isSelected ? 'border-primary' : 'border-gray-200' }`}
                            >
                                {/* ✅ Fixed height image — no longer tries to fill the whole button */}
                                <img
                                    src={type.image}
                                    alt={type.label}
                                    className="w-full h-[260px] object-cover"
                                />

                                {/* Label + Price row — sits naturally below image */}
                                <div
                                    className={`flex items-center justify-between px-2 w-full py-3
                        `}
                                >
                                    <span className={`text-xs font-semibold `}>
                                        {type.label}
                                    </span>
                                    <span className={`text-xs font-bold `}>
                                        ${type.price.toFixed(2)}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Section: Select Drivers ── */}
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-gray-800">Select Drivers</h2>

                <div className="grid grid-cols-5 gap-3">
                    {drivers.map((driver) => {
                        const isSelected = selectedDriver === driver.id;
                        return (
                            <button
                                key={driver.id}
                                onClick={() => setSelectedDriver(driver.id)}
                                className={`relative p-2 bg-white  overflow-hidden border-2 transition-all duration-200 text-left active:scale-95
                                    ${isSelected
                                        ? 'border-orange-500'
                                        : 'border-transparent'
                                    }`}
                            >
                                {/* Driver photo */}
                                <div className="relative w-full h-52 md:h-60 overflow-hidden">
                                    <img
                                        src={driver.image}
                                        alt={driver.name}
                                        className="w-full h-full object-cover object-top"
                                    />

                                    {/* Small avatar badge (only on index 1 per design) */}
                                    {driver.hasAvatar && (
                                        <div className="absolute bottom-1 left-2">
                                            <img
                                                src={driver.avatar}
                                                alt="badge"
                                                className="w-7 h-7 rounded-full border-2 border-white object-cover shadow"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="px-2 py-2 flex flex-col gap-0.5">
                                    <p className="text-xs font-semibold text-gray-800 truncate">{driver.name}</p>
                                    <div className="flex items-center gap-1">
                                        <FiStar className="w-3 h-3 text-orange-400 fill-orange-400" />
                                        <span className="text-xs text-gray-500">{driver.rating}</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Page;