'use client';
import Header from '@/Components/Common/Header';
import Link from 'next/link';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FiArrowUpRight, FiEye, FiEyeOff, FiX, FiAlertTriangle, FiLock } from 'react-icons/fi';

// ── Portal Modal Base ─────────────────────────────────────────────
const ModalPortal = ({ onClose, children }) =>
    ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors z-10"
                >
                    <FiX className="w-4 h-4" />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );

// ── Password Eye Toggle Input ─────────────────────────────────────
const PasswordInput = ({ placeholder, value, onChange }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <input
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-orange-400 pr-10 transition-colors"
            />
            <button
                type="button"
                onClick={() => setShow((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
                {show ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
            </button>
        </div>
    );
};

// ── Change Password Modal ─────────────────────────────────────────
const ChangePasswordModal = ({ onClose }) => {
    const [form, setForm] = useState({ current: '', newPass: '', confirm: '' });
    const [error, setError] = useState('');

    const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

    const handleSubmit = () => {
        if (!form.current || !form.newPass || !form.confirm) {
            return setError('All fields are required.');
        }
        if (form.newPass.length < 8) {
            return setError('New password must be at least 8 characters.');
        }
        if (form.newPass !== form.confirm) {
            return setError('New passwords do not match.');
        }
        setError('');
        // call your API here
        onClose();
    };

    return (
        <ModalPortal onClose={onClose}>
            {/* Header */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <FiLock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                    <h2 className="text-base font-black text-gray-900">Change Password</h2>
                    <p className="text-xs text-gray-400">Update your password to keep your account secure.</p>
                </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-4">
                <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Current Password</label>
                    <PasswordInput
                        placeholder="Enter current password"
                        value={form.current}
                        onChange={set('current')}
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">New Password</label>
                    <PasswordInput
                        placeholder="Enter new password"
                        value={form.newPass}
                        onChange={set('newPass')}
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Confirm New Password</label>
                    <PasswordInput
                        placeholder="Re-enter new password"
                        value={form.confirm}
                        onChange={set('confirm')}
                    />
                </div>

                {/* Strength hint */}
                {form.newPass && (
                    <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${form.newPass.length >= i * 3
                                    ? i <= 1 ? 'bg-red-400'
                                        : i <= 2 ? 'bg-yellow-400'
                                            : i <= 3 ? 'bg-blue-400'
                                                : 'bg-green-500'
                                    : 'bg-gray-200'
                                    }`}
                            />
                        ))}
                        <span className="text-[10px] text-gray-400 shrink-0">
                            {form.newPass.length < 4 ? 'Weak' : form.newPass.length < 7 ? 'Fair' : form.newPass.length < 10 ? 'Good' : 'Strong'}
                        </span>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                        {error}
                    </p>
                )}
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 flex gap-3">
                <button
                    onClick={onClose}
                    className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="flex-1 py-2.5 rounded-lg bg-orange-500 hover:brightness-110 active:scale-95 text-white text-sm font-semibold transition-all shadow-md shadow-orange-200"
                >
                    Update Password
                </button>
            </div>
        </ModalPortal>
    );
};

// ── Delete Account Modal ──────────────────────────────────────────
const DeleteAccountModal = ({ onClose }) => {
    const [confirmText, setConfirmText] = useState('');
    const isConfirmed = confirmText === 'DELETE';

    const handleDelete = () => {
        if (!isConfirmed) return;
        // call your delete API here
        onClose();
    };

    return (
        <ModalPortal onClose={onClose}>
            {/* Header */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <FiAlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                    <h2 className="text-base font-black text-gray-900">Delete Account</h2>
                    <p className="text-xs text-gray-400">This action is permanent and cannot be undone.</p>
                </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-4">
                {/* Warning box */}
                <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 flex flex-col gap-1">
                    <p className="text-sm font-semibold text-red-600">⚠ Warning — This is irreversible</p>
                    <ul className="text-xs text-red-500 space-y-0.5 list-disc list-inside">
                        <li>All your bookings will be permanently deleted</li>
                        <li>Your profile and personal data will be removed</li>
                        <li>You will lose access to all purchased tickets</li>
                        <li>This account cannot be recovered</li>
                    </ul>
                </div>

                {/* Confirm input */}
                <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                        Type <span className="text-red-500 font-black">DELETE</span> to confirm
                    </label>
                    <input
                        type="text"
                        placeholder="Type DELETE here"
                        value={confirmText}
                        onChange={(e) => setConfirmText(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-red-400 transition-colors"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 flex gap-3">
                <button
                    onClick={onClose}
                    className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick={handleDelete}
                    disabled={!isConfirmed}
                    className={`flex-1 py-2.5 rounded-lg text-white text-sm font-semibold transition-all
                        ${isConfirmed
                            ? 'bg-red-500 hover:brightness-110 active:scale-95 shadow-md shadow-red-200'
                            : 'bg-red-300 cursor-not-allowed opacity-60'
                        }`}
                >
                    Delete My Account
                </button>
            </div>
        </ModalPortal>
    );
};

// ── Toggle Switch ─────────────────────────────────────────────────
const Toggle = ({ enabled, onChange }) => (
    <button
        onClick={() => onChange(!enabled)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none shrink-0
            ${enabled ? 'bg-orange-500' : 'bg-gray-300'}`}
    >
        <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300
                ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
        />
    </button>
);

// ── Section Wrapper ───────────────────────────────────────────────
const Section = ({ children }) => (
    <div className=" border border-gray-300 rounded-xl py-10 px-6">
        {children}
    </div>
);

const SectionTitle = ({ icon, title }) => (
    <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-black text-gray-900">{title}</h2>
    </div>
);

const Input = ({ placeholder, type = 'text' }) => (
    <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white border border-gray-200 rounded px-3 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-orange-400 transition-colors"
    />
);

const NotificationRow = ({ icon, title, description, enabled, onChange }) => (
    <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
            <span className="text-xl shrink-0">{icon}</span>
            <div>
                <p className="text-sm font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-400">{description}</p>
            </div>
        </div>
        <Toggle enabled={enabled} onChange={onChange} />
    </div>
);

// ── Security Row — button OR link ─────────────────────────────────
const SecurityRow = ({ icon, title, description, onClick, href }) => {
    const inner = (
        <>
            <div className="flex items-center gap-3">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                    <p className="text-sm font-semibold text-gray-800">{title}</p>
                    <p className="text-xs text-gray-400">{description}</p>
                </div>
            </div>
            <div className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center shrink-0 group-hover:border-orange-400 transition-colors">
                <FiArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors" />
            </div>
        </>
    );

    const cls = "bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between gap-4 hover:border-orange-300 hover:bg-orange-50/30 transition-colors group w-full text-left";

    return onClick
        ? <button onClick={onClick} className={cls}>{inner}</button>
        : <Link href={href || '#'} className={cls}>{inner}</Link>;
};

// ── Main Page ─────────────────────────────────────────────────────
const Page = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        reminders: false,
    });
    const toggle = (key) => (val) =>
        setNotifications((prev) => ({ ...prev, [key]: val }));

    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showDeleteAccount, setShowDeleteAccount] = useState(false);

    const handleSubmitProfile = (e) => {
        e.preventDefault();
        const data = e.target;
        const profileData = {
            firstName: data[0].value,
            lastName: data[1].value,
            number: data[3].value,
        };
        console.log(profileData)
        // handle profile update API call here
    }


    return (
        <div>
            <Header />

            {/* Modals — rendered via portal at <body> level */}
            {showChangePassword && (
                <ChangePasswordModal onClose={() => setShowChangePassword(false)} />
            )}
            {showDeleteAccount && (
                <DeleteAccountModal onClose={() => setShowDeleteAccount(false)} />
            )}

            <div className="min-h-screen  px-4 py-6">
                <h1 className="text-xl font-black text-gray-900 mb-4">Settings</h1>

                <div className=" flex flex-col gap-5">

                    {/* ── Account ── */}
                    <form onSubmit={handleSubmitProfile} action="">
                        <Section>
                            <SectionTitle icon="🧑‍💼" title="Account" />
                            <div className="max-w-lg mx-auto flex flex-col gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Name</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Input placeholder="First Name" />
                                        <Input placeholder="Last Name" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address</label>
                                    <Input placeholder="someone@gmail.com" type="email" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Phone Number</label>
                                    <Input placeholder="+1 (242) 555-0123" type="tel" />
                                </div>
                            </div>
                            <button className="cursor-pointer w-full p-2 bg-primary font-semibold text-white rounded-md mt-5">Save</button>
                        </Section>
                    </form>

                    {/* ── Notifications ── */}
                    <Section>
                        <SectionTitle icon="🔔" title="Notifications" />
                        <div className="max-w-lg mx-auto flex flex-col gap-3">
                            <NotificationRow
                                icon="📧"
                                title="Email Notifications"
                                description="Receive booking confirmations via email"
                                enabled={notifications.email}
                                onChange={toggle('email')}
                            />
                            <NotificationRow
                                icon="🔔"
                                title="Push Notifications"
                                description="Receive push notifications on mobile app"
                                enabled={notifications.push}
                                onChange={toggle('push')}
                            />
                            <NotificationRow
                                icon="📅"
                                title="Booking Reminders"
                                description="Get reminded 24 hours before your experience"
                                enabled={notifications.reminders}
                                onChange={toggle('reminders')}
                            />
                        </div>
                    </Section>

                    {/* ── Security ── */}
                    <Section>
                        <SectionTitle icon="🛡️" title="Security" />
                        <div className="max-w-lg mx-auto flex flex-col gap-3">
                            {/* ← opens Change Password modal */}
                            <SecurityRow
                                icon="🔐"
                                title="Change Password"
                                description="Change your password using your old password"
                                onClick={() => setShowChangePassword(true)}
                            />
                            {/* ← navigates to forgot password page */}
                            <SecurityRow
                                icon="🔑"
                                title="Forget Password"
                                description="If you forgot your password, you can reset it."
                                href="/auth/forgot-password"
                            />
                            {/* ← opens Delete Account modal */}
                            <SecurityRow
                                icon="🔔"
                                title="Delete Account"
                                description="If you want you can delete your account, we will remove your information."
                                onClick={() => setShowDeleteAccount(true)}
                            />
                        </div>
                    </Section>

                </div>
            </div>
        </div>
    );
};

export default Page;