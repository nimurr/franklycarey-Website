'use client';
import React, { useState } from 'react';
import { MdStore, MdCheckCircle, MdCancel, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const VandorStatus = () => {
    const [isActive, setIsActive] = useState(true);

    const info = [
        { icon: <MdLocationOn size={15} />, label: 'Location', value: 'Dhaka, Bangladesh' },
        { icon: <MdPhone size={15} />, label: 'Phone', value: '+880 1700 000000' },
        { icon: <MdEmail size={15} />, label: 'Email', value: 'vendor@shop.com' },
    ];

    const stats = [
        { label: 'Total Orders', value: '1,284' },
        { label: 'Products', value: '48' },
        { label: 'Revenue', value: '$12,430' },
        { label: 'Rating', value: '4.8 ⭐' },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-5">

            {/* Top - Store identity + toggle */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? 'bg-orange-500/10' : 'bg-gray-100'}`}>
                        <MdStore size={26} className={isActive ? 'text-orange-500' : 'text-gray-400'} />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-800">My Vendor Store</h3>
                        <p className="text-xs text-gray-400">Member since Jan 2023</p>
                    </div>
                </div>

                {/* Status Badge + Toggle */}
                <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                        ${isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                        {isActive ? <MdCheckCircle size={14} /> : <MdCancel size={14} />}
                        {isActive ? 'Active' : 'Inactive'}
                    </div>
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className={`relative w-11 h-6 rounded-full transition-all duration-300
                            ${isActive ? 'bg-orange-500' : 'bg-gray-200'}`}
                    >
                        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300
                            ${isActive ? 'translate-x-5' : 'translate-x-0'}`}
                        />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-lg px-3 py-3 text-center">
                        <p className="text-base font-bold text-gray-800">{stat.value}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
                {info.map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="text-orange-500">{item.icon}</span>
                        <span className="text-gray-400 text-xs w-14">{item.label}:</span>
                        <span className="text-gray-600 text-xs font-medium">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VandorStatus;