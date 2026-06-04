'use client';
import React, { useState } from 'react';
import { MdNotifications, MdPerson, MdKeyboardArrowDown } from 'react-icons/md';

const VandorHeaderMainDash = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="w-full py-5 bg-white flex items-center justify-between border-b border-[#2a2a4a] px-4">

            {/* Left - Title */}
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>

            {/* Right - Icons */}
            <div className="flex items-center gap-3">

                {/* Notification */}
                <button className="relative p-1.5 hover:bg-gray-100 rounded-md transition-all duration-150">
                    <MdNotifications size={30} className="text-gray-500" />
                    <span className="absolute top-2 right-3 w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                </button>

                {/* Profile */}
                <div
                    className="relative flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <MdPerson size={30} className="text-gray-500" />
                    <MdKeyboardArrowDown
                        size={16}
                        className={`text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                    />

                    {/* Dropdown */}
                    {showDropdown && (
                        <div className="absolute right-0 top-12 bg-white border border-gray-100 rounded-lg shadow-lg w-36 py-1 z-50">
                            {['Profile', 'Settings', 'Logout'].map((item) => (
                                <button
                                    key={item}
                                    className={`w-full text-left px-4 py-2 transition-all duration-150
                                        ${item === 'Logout'
                                            ? 'text-red-500 hover:bg-red-50'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VandorHeaderMainDash;