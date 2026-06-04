'use client'; 
import { useState } from 'react';
import { MdDashboard, MdShoppingBag, MdBarChart } from 'react-icons/md';

const menuItems = [
    { name: 'Dashboard', icon: <MdDashboard size={20} /> },
    { name: 'Products', icon: <MdShoppingBag size={20} /> },
    { name: 'Analytics', icon: <MdBarChart size={20} /> },
];

const VandorSidebar = () => {
    const [active, setActive] = useState('Dashboard');

    return (
        <div className="w-72 min-h-screen bg-[#1a1a2e] flex flex-col px-3 py-6">
            {/* Logo */}
            <div className="text-orange-500 text-lg font-bold px-3 pb-6 mb-2 border-b border-[#2a2a4a]">
                Vendor Panel
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-1 mt-2">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActive(item.name)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium w-full text-left transition-all duration-200
                            ${active === item.name
                                ? 'bg-orange-500/10 text-orange-500 border-l-4 border-orange-500 pl-3'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent pl-3'
                            }`}
                    >
                        <span className="flex items-center">{item.icon}</span>
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default VandorSidebar;