import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';

const reviews = [
    {
        name: 'Sarah Johnson',
        rating: 4.5,
        review: "Best beach party experience ever! The sunset rave was absolutely electric — perfect vibes, incredible crowd, and seamless booking from start to finish.",
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
    },
    {
        name: 'Marcus Williams',
        rating: 5,
        review: "The Junkanoo Festival was a once-in-a-lifetime experience. The energy, the colours, the music — I've never felt so alive. Highly recommend to everyone!",
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    },
    {
        name: 'Priya Patel',
        rating: 4,
        review: "Booking was super easy and the event exceeded all expectations. The Bahamas is magical and Xplorify made every moment unforgettable.",
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80',
    },
    {
        name: 'James Carter',
        rating: 5,
        review: "From snorkelling excursions to rooftop events, everything was perfectly organised. The app notifications kept me on track the whole trip.",
        image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80',
    },
    {
        name: 'Amelia Brooks',
        rating: 4.5,
        review: "Discovered hidden local events I would have never found on my own. This platform is a game-changer for travellers in the Bahamas!",
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&q=80',
    },
];

// ── Star renderer ─────────────────────────────────────────────────
const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-1">
            <span className="text-orange-500 font-bold text-base mr-1">{rating}</span>
            {[1, 2, 3, 4, 5].map((i) => {
                if (rating >= i) return <FaStar key={i} className="text-orange-500 w-4 h-4" />;
                if (rating >= i - 0.5) return <FaStarHalfAlt key={i} className="text-orange-500 w-4 h-4" />;
                return <FaRegStar key={i} className="text-orange-500 w-4 h-4" />;
            })}
        </div>
    );
};

// ── Carousel config ───────────────────────────────────────────────
// offset -2 -1 0 1 2
const SLOT_CONFIG = [
    { scale: 'scale-50', opacity: 'opacity-40', z: 'z-0',  blur: 'grayscale brightness-75', translate: '-translate-x-2' },
    { scale: 'scale-75', opacity: 'opacity-60', z: 'z-10', blur: 'grayscale brightness-90', translate: '' },
    { scale: 'scale-100',opacity: 'opacity-100',z: 'z-20', blur: '',                         translate: '' },
    { scale: 'scale-75', opacity: 'opacity-60', z: 'z-10', blur: 'grayscale brightness-90', translate: '' },
    { scale: 'scale-50', opacity: 'opacity-40', z: 'z-0',  blur: 'grayscale brightness-75', translate: 'translate-x-2' },
];

const HomePageReviews = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const total = reviews.length;

    const go = (dir) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + dir + total) % total);
            setAnimating(false);
        }, 250);
    };

    // Build 5 visible indices: offset -2 to +2
    const visibleIndices = [-2, -1, 0, 1, 2].map(
        (offset) => (current + offset + total) % total
    );

    const activeReview = reviews[current];

    return (
        <div className="w-full py-16 px-4 bg-gray-100">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

                {/* Badge */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded border border-orange-500 text-orange-500 text-sm font-semibold">
                    <MdOutlineRateReview className="w-4 h-4" />
                    Reviews
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center tracking-tight">
                    What People Are Saying
                </h2>

                {/* Subheading */}
                <p className="text-gray-500 text-base text-center">
                    Real stories from real event-goers across the Bahamas.
                </p>

                {/* ── Carousel ── */}
                <div className="relative w-full flex items-center justify-center mt-4">

                    {/* Left arrow */}
                    <button
                        onClick={() => go(-1)}
                        className="absolute left-0 z-30 w-10 h-10 flex items-center justify-center border border-gray-300 bg-white rounded hover:bg-gray-50 active:scale-95 transition-all shadow-sm text-gray-600 font-bold text-lg"
                    >
                        ←
                    </button>

                    {/* Images row */}
                    <div className="flex items-center justify-center gap-3 w-full px-14 overflow-hidden">
                        {visibleIndices.map((idx, slot) => {
                            const cfg = SLOT_CONFIG[slot];
                            const isCenter = slot === 2;
                            return (
                                <div
                                    key={`${idx}-${slot}`}
                                    className={`
                                        transition-all duration-500 ease-in-out flex-shrink-0 cursor-pointer
                                        ${cfg.z} ${cfg.scale} ${cfg.opacity} ${cfg.translate}
                                        ${isCenter ? 'w-56 h-64' : slot === 1 || slot === 3 ? 'w-36 h-44' : 'w-24 h-32'}
                                    `}
                                    onClick={() => !isCenter && go(slot < 2 ? -1 : 1)}
                                >
                                    <img
                                        src={reviews[idx].image}
                                        alt={reviews[idx].name}
                                        className={`w-full h-full object-cover rounded-xl shadow-lg transition-all duration-500 ${cfg.blur}`}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => go(1)}
                        className="absolute right-0 z-30 w-10 h-10 flex items-center justify-center border border-gray-300 bg-white rounded hover:bg-gray-50 active:scale-95 transition-all shadow-sm text-gray-600 font-bold text-lg"
                    >
                        →
                    </button>
                </div>

                {/* ── Review Content ── */}
                <div
                    className={`flex flex-col items-center gap-3 text-center max-w-xl transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
                >
                    {/* Name */}
                    <p className="font-bold text-gray-900 text-lg">{activeReview.name}</p>

                    {/* Stars */}
                    <StarRating rating={activeReview.rating} />

                    {/* Review text */}
                    <p className="text-gray-600 text-base leading-relaxed">
                        {activeReview.review}
                    </p>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2 mt-2">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { if (!animating) setCurrent(i); }}
                            className={`rounded-full transition-all duration-300 ${i === current ? 'bg-orange-500 w-5 h-2' : 'bg-gray-300 w-2 h-2'}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HomePageReviews;