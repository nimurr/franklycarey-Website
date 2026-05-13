import React from 'react';
import { BsCalendar2Check } from 'react-icons/bs';
import { MdOutlineWatchLater, MdOutlineCreditCard, MdOutlineStar } from 'react-icons/md';
import { FaCar } from 'react-icons/fa';

const features = [
    {
        icon: <BsCalendar2Check className="w-6 h-6 text-orange-500" />,
        title: 'Flexible Schedule',
        desc: 'Drive when you want, as much as you want',
    },
    {
        icon: <MdOutlineWatchLater className="w-7 h-7 text-orange-500" />,
        title: 'Guaranteed Rides',
        desc: 'Pre-booked trips tied to experiences',
    },
    {
        icon: <MdOutlineCreditCard className="w-7 h-7 text-orange-500" />,
        title: 'Secure Payments',
        desc: 'Fast, reliable payouts every week',
    },
    {
        icon: <MdOutlineStar className="w-7 h-7 text-orange-500" />,
        title: 'Build Your Reputation',
        desc: 'Earn ratings and grow your business',
    },
];

const ForDrivers = () => {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="border-y border-gray-300 md:py-20 py-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left Column */}
                <div className="flex-1 flex flex-col items-start gap-5">

                    {/* Badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-orange-500 text-orange-500 text-sm font-semibold">
                        <FaCar className="w-4 h-4" />
                        For Drivers
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                        Drive With Xplorify
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed max-w-md">
                        Partner with us to provide safe, reliable transportation for tourists
                        exploring The Bahamas. Set your own schedule and earn on your terms.
                    </p>

                    {/* Feature List */}
                    <div className="flex flex-col gap-4 w-full">
                        {features.map(({ icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-4">
                                <div className="mt-0.5 shrink-0">{icon}</div>
                                <div>
                                    <p className="font-bold text-gray-900 text-base">{title}</p>
                                    <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4 mt-2">
                        <button className="bg-orange-500 hover:brightness-110 active:scale-95 transition-all text-white font-bold px-7 py-3 rounded text-base">
                            Apply to Drive
                        </button>
                        <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 active:scale-95 transition-all font-bold px-7 py-3 rounded text-base bg-transparent">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* Right Column */}
                <div className="flex-1 w-full flex justify-center lg:justify-end pt-8 pb-6">
                    <img className="w-full z-50" src="/Images/Home/mobile_mockup_1.png" alt="Xplorify app mockup" />
                </div>

            </div>
        </div>
    );
};

export default ForDrivers;