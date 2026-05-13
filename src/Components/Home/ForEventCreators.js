import React from 'react';

const barData = [
    { day: 'Mon', h: 'h-4' },
    { day: 'Tue', h: 'h-5' },
    { day: 'Wed', h: 'h-4' },
    { day: 'Thu', h: 'h-6' },
    { day: 'Fri', h: 'h-5' },
    { day: 'Sat', h: 'h-7' },
    { day: 'Today', h: 'h-10', active: true },
];


const ForEventCreators = () => {
    return (
        <div className="flex items-center justify-center py-12">
            <div className=" border-y border-gray-300 md:py-20 py-10 w-full flex md:flex-row flex-col items-center justify-between">

                {/* Left Column */}
                <div className="flex-1 flex flex-col items-start gap-5">

                    {/* Badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-orange-500 text-orange-500 text-sm font-semibold">
                        <span>🎪</span> For Event Creators
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                        Host Your Events.<br />Reach Thousands.
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed  ">
                        Create your organizer account, get instant access to your dedicated admin
                        panel, and start selling tickets to Bahamas Vibes' growing audience of thousands.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-10 py-2">
                        {[
                            { value: '500+', label: 'Events Listed' },
                            { value: '12K+', label: 'Tickets Sold' },
                            { value: '98%', label: 'Organizer Satisfaction' },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <p className="text-4xl font-black text-gray-900 leading-none">{value}</p>
                                <p className="text-gray-500 text-sm mt-0.5">{label}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4 mt-1">
                        <button className="bg-orange-500 hover:brightness-110 active:scale-95 transition-all text-white font-bold px-7 py-3 rounded text-base">
                            Start Hosting Today
                        </button>
                        <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 active:scale-95 transition-all font-bold px-7 py-3 rounded text-base bg-transparent">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* Right Column */}
                <div className="flex-1 w-full flex justify-center lg:justify-end pt-8 pb-6">
                    <img className='w-full z-50' src="/Images/Home/for_event_creators.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default ForEventCreators;