import React from 'react';
const steps = [
    {
        number: '01',
        title: 'Live Analytics',
        description:
            'Real-time ticket sales, revenue charts, and attendee demographics at a glance.',
        icon: "/Images/Vandor/Frame.png"
    },
    {
        number: '02',
        title: 'Ticket Management',
        description:
            'Create multiple ticket tiers, set limits, early bird pricing, and promo codes.',
        icon: "/Images/Vandor/Frame1.png"
    },
    {
        number: '03',
        title: 'Attendee Manager',
        description:
            'View, export, and message your attendee list. Built-in check-in scanner included.',
        icon: '/Images/Vandor/Frame2.png'
    },
    {
        number: '04',
        title: 'Instant Payouts',
        description:
            'Get paid fast. Automated payouts to your bank after each event, zero hassle.',
        icon: '/Images/Vandor/Frame3.png'
    },
    {
        number: '05',
        title: 'Promotions Tools',
        description:
            'Run discount campaigns and featured placement boosts on the platform.',
        icon: '/Images/Vandor/Frame4.png'
    },
    {
        number: '06',
        title: 'Mobile Check-In',
        description:
            'Scan QR tickets at the gate from any phone. No extra hardware needed, ever.',
        icon: '/Images/Vandor/Frame5.png'
    },
    {
        number: '07',
        title: 'Featured Listings',
        description:
            'Boost visibility with homepage features, category top spots, and push notifications.',
        icon: '/Images/Vandor/Frame6.png'
    },
    {
        number: '08',
        title: 'Fraud Protection',
        description:
            'Secure ticketing with unique QR codes and chargeback support.',
        icon: '/Images/Vandor/Frame7.png'
    },
];



const VandorAdminPanel = () => {


    return (
        <div>
            <div className=" flex items-center justify-center py-12 mt-10">
                <div className=" border-y border-gray-300 md:py-20 py-10 w-full">
                    <div className=" mx-auto flex flex-col items-center gap-6">
                        <div className="border border-orange-500 text-orange-500 text-xs font-semibold px-4 py-1.5 rounded flex items-center gap-1.5 tracking-wide">
                            <span>✦</span>  Admin Panel
                        </div>
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center leading-tight">
                            Everything in Your Control
                        </h2>
                        {/* Subtext */}
                        <p className="text-gray-600 text-center text-sm md:text-base ">
                            Your admin panel is packed with powerful tools to manage every aspect of your event.
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-0">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="bg-[#ebebea] border border-gray-300 rounded-xl p-6 flex flex-col items-center text-center gap-3"
                                >
                                    {/* Icon */}
                                    <div className="flex items-center justify-center ">
                                        <img className='w-16 mx-auto h-full' src={step.icon} alt="" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-black text-gray-900">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>
            </div>
        </div >
    );
}

export default VandorAdminPanel;
