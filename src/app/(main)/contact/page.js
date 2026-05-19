'use client';
import Header from '@/Components/Common/Header';
import React, { useState } from 'react';

const ContactPage = () => {
    const [focused, setFocused] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClass = (name) => `
        w-full bg-white border rounded-lg px-4 py-3 text-sm text-gray-800
        placeholder-gray-400 outline-none transition-all duration-200
        ${focused === name
            ? 'border-orange-400 shadow-[0_0_0_3px_rgba(251,146,60,0.15)]'
            : 'border-gray-200 hover:border-gray-300'}
    `;

    const contacts = [
        { icon: '📍', label: 'Address', value: '123 Fashion Street, NY 10001' },
        { icon: '📞', label: 'Phone', value: '+1 (800) 555-0199' },
        { icon: '✉️', label: 'Email', value: 'hello@yourstore.com' },
        { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am – 6pm EST' },
    ];

    return (
        <div>
            <Header />
            <div className=" flex items-center justify-center py-12 ">
                <div className=" border-y border-gray-300  w-full">

                    <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(22px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .fade-up { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.1) both; }
                .fade-up-1 { animation-delay: .05s; }
                .fade-up-2 { animation-delay: .13s; }
                .fade-up-3 { animation-delay: .21s; }
                .fade-up-4 { animation-delay: .29s; }
                .fade-up-5 { animation-delay: .37s; }

                @keyframes checkPop {
                    0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
                    65%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
                    100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
                .check-pop { animation: checkPop 0.5s cubic-bezier(.34,1.56,.64,1) both; }
            `}</style>

                    {/* Hero strip */}
                    <div className=" border-b  py-10 mt-10 px-4 text-center fade-up fade-up-1">
                        <span className="inline-flex items-center gap-1.5 border border-orange-400 text-orange-500 font-semibold px-4 py-1.5 rounded-md text-xs mb-4">
                            ✦ Get in Touch
                        </span>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight my-5">Contact Us</h1>
                        <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
                            Have a question or need help? We'd love to hear from you. Our team typically replies within 24 hours.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-8">

                        {/* ── Left: info cards ── */}
                        <div className="md:col-span-2 flex flex-col gap-4">
                            {contacts.map((c, i) => (
                                <div
                                    key={i}
                                    className={`fade-up fade-up-${i + 2} bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-lg flex-shrink-0">
                                        {c.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">{c.label}</p>
                                        <p className="text-sm font-medium text-gray-800">{c.value}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Social row */}
                            <div className="fade-up fade-up-5 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Follow Us</p>
                                <div className="flex gap-2">
                                    {['𝕏', 'in', 'f', '📷'].map((s, i) => (
                                        <button key={i} className="w-9 h-9 rounded-lg border border-gray-200 text-sm font-bold text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-colors">
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Right: form ── */}
                        <div className="md:col-span-3 fade-up fade-up-2">
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">

                                {submitted ? (
                                    /* Success state */
                                    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                                        <div className="check-pop w-16 h-16 rounded-full bg-orange-50 border-2 border-orange-400 flex items-center justify-center text-2xl">
                                            ✅
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                                        <p className="text-sm text-gray-500 max-w-xs">
                                            Thanks for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                                            className="mt-2 text-sm text-orange-500 font-semibold underline underline-offset-2"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">Send a Message</h2>
                                            <p className="text-xs text-gray-400 mt-0.5">Fill in the form and we'll be in touch soon.</p>
                                        </div>

                                        {/* Name */}
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name <span className="text-orange-400">*</span></label>
                                            <input
                                                required
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('name')}
                                                onBlur={() => setFocused(null)}
                                                placeholder="John Doe"
                                                className={inputClass('name')}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address <span className="text-orange-400">*</span></label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('email')}
                                                onBlur={() => setFocused(null)}
                                                placeholder="you@example.com"
                                                className={inputClass('email')}
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Subject</label>
                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('subject')}
                                                onBlur={() => setFocused(null)}
                                                className={inputClass('subject')}
                                            >
                                                <option value="">Select a topic…</option>
                                                <option>Order & Shipping</option>
                                                <option>Returns & Refunds</option>
                                                <option>Product Question</option>
                                                <option>Partnership</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Message <span className="text-orange-400">*</span></label>
                                            <textarea
                                                required
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('message')}
                                                onBlur={() => setFocused(null)}
                                                placeholder="Tell us how we can help…"
                                                rows={5}
                                                className={`${inputClass('message')} resize-none`}
                                            />
                                            <p className="text-right text-xs text-gray-400 mt-1">{form.message.length} / 500</p>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-orange-500 hover:bg-orange-600 active:scale-[.98] text-white font-semibold rounded-lg text-sm transition-all duration-150 shadow-sm shadow-orange-200 mt-1"
                                        >
                                            Send Message →
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;