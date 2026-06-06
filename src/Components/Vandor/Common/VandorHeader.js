'use client';
import React, { useState } from 'react';
import { MdNotifications, MdPerson, MdKeyboardArrowDown } from 'react-icons/md';

const notifications = [
    { id: 1, title: 'New order received', time: '2 min ago', unread: true },
    { id: 2, title: 'Payment confirmed #1023', time: '15 min ago', unread: true },
    { id: 3, title: 'Product stock low', time: '1 hr ago', unread: false },
];

const VandorHeaderMainDash = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const unreadCount = notifications.filter((n) => n.unread).length;

    return (
        <div className="w-full py-5 bg-white flex items-center justify-between border-b border-[#d6d6d6e8] px-4">

            {/* Left - Title */}
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>

            {/* Right - Icons */}
            <div className="flex items-center gap-3">

                {/* Notification */}
                <div className="relative">
                    <button
                        className="relative p-1.5 hover:bg-gray-100 rounded-md transition-all duration-150"
                        onClick={() => {
                            setShowNotifications(!showNotifications);
                            setShowDropdown(false);
                        }}
                    >
                        <MdNotifications size={30} className="text-gray-500" />
                        {unreadCount > 0 && (
                            <span className="absolute top-1 right-1 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                {unreadCount}
                            </span>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 top-12 bg-white border border-gray-100 rounded-xl shadow-xl w-72 z-50">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                                <span className="text-sm font-semibold text-gray-700">Notifications</span>
                                <span className="text-xs text-orange-500 cursor-pointer hover:underline">Mark all read</span>
                            </div>
                            <ul>
                                {notifications.map((n) => (
                                    <li
                                        key={n.id}
                                        className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-all cursor-pointer ${n.unread ? 'bg-orange-50/50' : ''}`}
                                    >
                                        <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${n.unread ? 'bg-orange-500' : 'bg-gray-300'}`} />
                                        <div>
                                            <p className="text-sm text-gray-700 font-medium">{n.title}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="px-4 py-3 border-t border-gray-100 text-center">
                                <span className="text-xs text-orange-500 cursor-pointer hover:underline">View all notifications</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div className="relative">
                    <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => {
                            setShowDropdown(!showDropdown);
                            setShowNotifications(false);
                        }}
                    >
                        <MdPerson size={30} className="text-gray-500" />
                        <MdKeyboardArrowDown
                            size={16}
                            className={`text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                        />
                    </div>

                    {/* Profile Dropdown */}
                    {showDropdown && (
                        <div className="absolute right-0 top-12 bg-white border border-gray-100 rounded-lg shadow-lg w-36 py-1 z-50">
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
        </div>
    );
};

export default VandorHeaderMainDash;