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

// ── Slot visual config by offset (-2 to +2) ──────────────────────
const slotStyle = (offset) => {
    const abs = Math.abs(offset);
    // translateX: each slot is 220px apart
    const tx = offset * 220;
    // scale: center = 1, ±1 = 0.78, ±2 = 0.58
    const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.58;
    // opacity: center = 1, ±1 = 0.65, ±2 = 0.35, beyond = 0
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.65 : abs === 2 ? 0.35 : 0;
    // z-index: center on top
    const zIndex = abs === 0 ? 30 : abs === 1 ? 20 : 10;
    // grayscale
    const grayscale = abs === 0 ? 0 : abs === 1 ? 0.8 : 1;
    // image size (width x height)
    const w = abs === 0 ? 224 : abs === 1 ? 148 : 96;
    const h = abs === 0 ? 280 : abs === 1 ? 180 : 124;

    return {
        transform: `translateX(${tx}px) scale(${scale})`,
        opacity,
        zIndex,
        filter: `grayscale(${grayscale}) brightness(${abs === 0 ? 1 : abs === 1 ? 0.85 : 0.7})`,
        width: `${w}px`,
        height: `${h}px`,
        transition: 'transform 600ms cubic-bezier(0.4,0,0.2,1), opacity 600ms ease, filter 600ms ease',
        pointerEvents: abs > 2 ? 'none' : 'auto',
        cursor: abs === 0 ? 'default' : 'pointer',
    };
};

// ── Star renderer ─────────────────────────────────────────────────
const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
        <span className="text-orange-500 font-bold text-base mr-1">{rating}</span>
        {[1, 2, 3, 4, 5].map((i) => {
            if (rating >= i) return <FaStar key={i} className="text-orange-500 w-4 h-4" />;
            if (rating >= i - 0.5) return <FaStarHalfAlt key={i} className="text-orange-500 w-4 h-4" />;
            return <FaRegStar key={i} className="text-orange-500 w-4 h-4" />;
        })}
    </div>
);

// ── Main component ────────────────────────────────────────────────
const HomePageReviews = () => {
    const [current, setCurrent] = useState(0);
    const [textVisible, setTextVisible] = useState(true);
    const total = reviews.length;

    const go = (dir) => {
        // fade text out → change → fade in
        setTextVisible(false);
        setTimeout(() => {
            setCurrent((prev) => (prev + dir + total) % total);
            setTextVisible(true);
        }, 300);
    };

    const goTo = (i) => {
        if (i === current) return;
        setTextVisible(false);
        setTimeout(() => {
            setCurrent(i);
            setTextVisible(true);
        }, 300);
    };

    return (
        <div className="flex items-center justify-center py-12 overflow-hidden">
            <div className="border-y border-gray-300 md:py-20 py-10 w-full">
                <div className="px-5 mx-auto flex flex-col items-center gap-6">

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

                    {/* ── Carousel track ── */}
                    <div className="relative w-full flex items-center justify-center mt-4" style={{ height: '300px' }}>

                        {/* Left arrow */}
                        <button
                            onClick={() => go(-1)}
                            className="absolute left-0 z-30 w-16 h-16 flex items-center justify-center border border-gray-300  rounded hover:bg-gray-50 active:scale-95 transition-all shadow-sm text-gray-600 font-bold text-2xl"
                        >
                            ←
                        </button>

                        {/* All images — always in DOM, positions animate smoothly */}
                        <div className="relative flex items-center justify-center w-full" style={{ height: '300px' }}>
                            {reviews.map((review, i) => {
                                // compute offset, normalised to -floor(total/2)..+floor(total/2)
                                let offset = i - current;
                                if (offset > Math.floor(total / 2)) offset -= total;
                                if (offset < -Math.floor(total / 2)) offset += total;

                                const style = slotStyle(offset);

                                return (
                                    <div
                                        key={i}
                                        style={{ position: 'absolute', ...style }}
                                        onClick={() => Math.abs(offset) > 0 && go(offset > 0 ? 1 : -1)}
                                    >
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-full h-full object-cover rounded-xl shadow-lg"
                                            draggable={false}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right arrow */}
                        <button
                            onClick={() => go(1)}
                            className="absolute right-0 z-30 w-16 h-16 flex items-center justify-center border border-gray-300  rounded hover:bg-gray-50 active:scale-95 transition-all shadow-sm text-gray-600 font-bold text-2xl"
                        >
                            →
                        </button>
                    </div>

                    {/* ── Review text (fades in/out) ── */}
                    <div
                        className="flex flex-col items-center gap-3 text-center max-w-xl"
                        style={{
                            opacity: textVisible ? 1 : 0,
                            transform: textVisible ? 'translateY(0)' : 'translateY(8px)',
                            transition: 'opacity 300ms ease, transform 300ms ease',
                        }}
                    >
                        <p className="font-bold text-gray-900 text-lg">{reviews[current].name}</p>
                        <StarRating rating={reviews[current].rating} />
                        <p className="text-gray-600 text-base leading-relaxed">{reviews[current].review}</p>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center gap-2 mt-2">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full transition-all duration-300 ${i === current ? 'bg-orange-500 w-5 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePageReviews;