import React, { useState } from 'react';
import { MdNotifications, MdSearch, MdKeyboardArrowDown } from 'react-icons/md';

const VandorHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="w-full h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shadow-sm">
            
            {/* Search */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-64">
                <MdSearch size={18} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
                />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                
                {/* Notification Bell */}
                <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
                    <MdNotifications size={22} className="text-gray-500" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full"></span>
                </button>

                {/* Divider */}
                <div className="w-px h-8 bg-gray-200"></div>

                {/* Profile */}
                <div
                    className="flex items-center gap-2 cursor-pointer select-none"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                        V
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold text-gray-700">Vendor</span>
                        <span className="text-xs text-gray-400">Admin</span>
                    </div>
                    <MdKeyboardArrowDown
                        size={18}
                        className={`text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                    />
                </div>

                {/* Dropdown */}
                {showDropdown && (
                    <div className="absolute right-6 top-14 bg-white border border-gray-100 rounded-xl shadow-lg w-40 py-2 z-50">
                        {['Profile', 'Settings', 'Logout'].map((item) => (
                            <button
                                key={item}
                                className={`w-full text-left px-4 py-2 text-sm transition-all duration-150
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
    );
};

export default VandorHeader;