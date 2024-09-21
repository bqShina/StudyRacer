"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHome, FiBook, FiAward, FiLogIn, FiUserPlus, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { icon: FiHome, text: 'Dashboard', href: '/dashboard' },
        { icon: FiBook, text: 'Assignments', href: '/assignments' },
        { icon: FiAward, text: 'Leaderboard', href: '/leaderboard' },
        { icon: FiLogIn, text: 'Login', href: '/login' },
        { icon: FiUserPlus, text: 'Sign Up', href: '/signup' },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'w-64' : 'w-20'
            }`}
        >
            <button
                className="absolute -right-3 top-9 bg-primary text-white rounded-full p-1 shadow-md"
                onClick={handleToggle}
            >
                {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
            </button>
            <div className="flex flex-col h-full">
                <div className={`p-4 flex justify-center items-center ${isOpen ? 'mb-6' : 'mb-4'}`}>
                    {isOpen ? (
                        <Image
                            src="/StudyRacer_Banner.png"
                            alt="StudyRacer Banner"
                            width={200}
                            height={60}
                            className="transition-all duration-300"
                        />
                    ) : (
                        <Image
                            src="/logo_notext.png"
                            alt="StudyRacer Logo"
                            width={40}
                            height={40}
                            className="transition-all duration-300"
                        />
                    )}
                </div>
                <div className="flex-grow overflow-y-auto">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="mb-4">
                                <Link
                                    href={item.href}
                                    className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                        isOpen ? 'justify-start' : 'justify-center'
                                    }`}
                                >
                                    <item.icon className={`text-xl ${isOpen ? 'mr-3' : ''}`} />
                                    <span className={`whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0 w-0'} transition-all duration-300`}>
                                        {item.text}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;