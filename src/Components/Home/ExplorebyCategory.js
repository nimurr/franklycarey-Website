import React, { useEffect, useRef, useState } from 'react';

const categories = [
    { label: "Street Wear", color: "#FFF3E0", accent: "#FF6B00", icon: "👟" },
    { label: "Vintage",     color: "#F3E5F5", accent: "#8B00FF", icon: "🧥" },
    { label: "Minimalist",  color: "#E8F5E9", accent: "#00A86B", icon: "🤍" },
    { label: "Formal",      color: "#E3F2FD", accent: "#1565C0", icon: "👔" },
    { label: "Bohemian",    color: "#FFF8E1", accent: "#D4A017", icon: "🌸" },
    { label: "Sporty",      color: "#FCE4EC", accent: "#C2185B", icon: "⚡" },
    { label: "Techwear",    color: "#ECEFF1", accent: "#37474F", icon: "🔩" },
    { label: "Y2K",         color: "#F8BBD9", accent: "#E91E63", icon: "✨" },
];

const GAP        = 14;
const SMALL_W    = 120;   // card size when stacked inside folder (≈ w-30)
const SMALL_H    = 75;

export default function ExplorebyCategory() {
    const sectionRef = useRef(null);
    const stageRef   = useRef(null);
    const [phase,  setPhase]  = useState('idle');
    const [stageW, setStageW] = useState(0);
    const [cols,   setCols]   = useState(4);

    /* measure container */
    useEffect(() => {
        const update = () => {
            if (!stageRef.current) return;
            const w = stageRef.current.offsetWidth;
            setStageW(w);
            setCols(w < 480 ? 2 : w < 720 ? 3 : 4);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    /* scroll trigger */
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting && phase === 'idle') {
                    setPhase('arriving');
                    setTimeout(() => setPhase('spread'), 750);
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, [phase]);

    /* full grid card size — fills 100% width */
    const FULL_W = stageW > 0 ? Math.floor((stageW - GAP * (cols - 1)) / cols) : 185;
    const FULL_H = Math.round(FULL_W * 0.62);

    /* folder + stack anchor */
    const FOLDER_W   = 240;
    const FOLDER_H   = 270;
    const folderLeft = Math.max(0, (stageW - FOLDER_W) / 2);
    const STACK_LEFT = folderLeft + FOLDER_W / 2 - SMALL_W / 2;
    const STACK_TOP  = FOLDER_H - 40 - SMALL_H;

    /* grid target position (top-left of each cell) */
    const rows       = Math.ceil(categories?.length / cols);
    const gridTotalH = rows * FULL_H + (rows - 1) * GAP;
    const getGridPos = (i) => ({
        x: (i % cols) * (FULL_W + GAP),
        y: Math.floor(i / cols) * (FULL_H + GAP),
    });

    const isArriving = phase === 'arriving' || phase === 'spread';
    const isSpread   = phase === 'spread';
    const stageH     = isSpread ? gridTotalH + 20 : FOLDER_H + 10;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
                .ebc-root { font-family: 'DM Sans', sans-serif; overflow: hidden; }

                .ebc-slide {
                    transform: translateY(150px);
                    opacity: 0;
                    transition: transform 0.72s cubic-bezier(.22,.68,0,1.15),
                                opacity   0.55s ease;
                }
                .ebc-slide.up { transform: translateY(0); opacity: 1; }

                .ebc-stage {
                    position: relative;
                    width: 100%;
                    transition: height 0.65s cubic-bezier(.4,0,.2,1) 0.28s;
                }

                .folder-img {
                    position: absolute;
                    bottom: 0;
                    pointer-events: none;
                    transition: opacity 0.45s ease 0.1s;
                }

                .fly-card {
                    position: absolute;
                    border-radius: 14px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    overflow: hidden;
                    /* animate position + size + rotation together */
                    transition-property: left, top, width, height, transform, box-shadow, border-radius;
                    transition-duration: 0.62s;
                    transition-timing-function: cubic-bezier(.34,1.18,.64,1);
                    will-change: left, top, width, height;
                }
                .fly-card:hover {
                    box-shadow: 0 14px 36px rgba(0,0,0,.16) !important;
                    transform: translateY(-6px) scale(1.03) rotate(0deg) !important;
                    z-index: 10 !important;
                }

                /* icon + label scale with card via font-size clamp */
                .fly-card .c-icon {
                    font-size: clamp(16px, 4cqw, 30px);
                    line-height: 1;
                    transition: font-size 0.4s ease;
                }
                .fly-card .c-label {
                    font-size: clamp(7px, 1.6cqw, 11px);
                    font-weight: 700;
                    letter-spacing: .05em;
                    text-transform: uppercase;
                    transition: font-size 0.4s ease;
                }
                .fly-card .c-arrow {
                    font-size: 14px; opacity: 0;
                    transform: translateX(-4px);
                    transition: opacity .22s, transform .22s;
                }
                .fly-card:hover .c-arrow { opacity: .65; transform: translateX(0); }

                @keyframes badge-pulse {
                    0%,100% { box-shadow: 0 0 0 0 rgba(251,146,60,.45); }
                    50%      { box-shadow: 0 0 0 6px rgba(251,146,60,0); }
                }
                .ebc-badge { animation: badge-pulse 2.4s ease infinite; }
            `}</style>

            <div ref={sectionRef} className="ebc-root flex items-center justify-center py-12">
                <div className="border-y border-gray-200 md:py-20 py-10 w-full">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="ebc-badge inline-flex items-center gap-1.5 border border-orange-400 text-orange-500 font-semibold px-4 py-2 rounded-md mb-4 text-sm">
                            ✦ Browse
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            Explore by Category
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Find your perfect vibe from our curated collection.
                        </p>
                    </div>

                    {/* Slide-in wrapper */}
                    <div className={`ebc-slide ${isArriving ? 'up' : ''} px-4 md:px-8`}>

                        {/* Stage */}
                        <div ref={stageRef} className="ebc-stage" style={{ height: stageH }}>

                            {/* Folder back */}
                            <img
                                className="folder-img"
                                style={{ left: folderLeft, width: FOLDER_W, opacity: isSpread ? 0 : 1, zIndex: 1 }}
                                src="/Images/Home/folder_image_down.png"
                                alt=""
                            />

                            {/* 8 cards — small → full size */}
                            {categories.map((cat, i) => {
                                const gp    = getGridPos(i);
                                const delay = isSpread ? `${i * 0.055}s` : '0s';

                                return (
                                    <div
                                        key={i}
                                        className="fly-card hover:rotate-0"
                                        style={{
                                            /* SIZE: small in folder → full in grid */
                                            width:  isSpread ? FULL_W  : SMALL_W,
                                            height: isSpread ? FULL_H  : SMALL_H,

                                            /* POSITION: stacked → grid cell */
                                            left: isSpread ? gp.x       : STACK_LEFT,
                                            top:  isSpread ? gp.y + 10  : STACK_TOP,

                                            /* ROTATION: fanned → straight */
                                            transform: isSpread
                                                ? 'rotate(10deg) scale(1)'
                                                : `rotate(${(i - 3.5) * 2.5}deg) scale(0.95)`,

                                            transitionDelay: delay,
                                            background:  cat.color,
                                            boxShadow:   isSpread
                                                ? '0 4px 18px rgba(0,0,0,.09)'
                                                : '0 2px 6px rgba(0,0,0,.07)',
                                            zIndex: 2,
                                            cursor: isSpread ? 'pointer' : 'default',
                                        }}
                                    >
                                        <span className="c-icon">{cat.icon}</span>
                                        <span className="c-label" style={{ color: cat.accent }}>
                                            {cat.label}
                                        </span>
                                        <span className="c-arrow" style={{ color: cat.accent }}>→</span>
                                    </div>
                                );
                            })}

                            {/* Folder front */}
                            <img
                                className="folder-img"
                                style={{ left: folderLeft, width: FOLDER_W, opacity: isSpread ? 0 : 1, zIndex: 6 }}
                                src="/Images/Home/folder_image_up.png"
                                alt=""
                            />

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}