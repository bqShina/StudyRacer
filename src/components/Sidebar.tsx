"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHome, FiBook, FiAward, FiChevronRight, FiChevronLeft, FiUser } from 'react-icons/fi';
import { useSidebar } from './SidebarContext';

const Sidebar: React.FC = () => {
    const { isOpen, setIsOpen } = useSidebar();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { icon: FiHome, text: 'Dashboard', href: '/dashboard' },
        { icon: FiBook, text: 'Assignments', href: '/assignments' },
        { icon: FiAward, text: 'Leaderboard', href: '/leaderboard' },
        { icon: FiUser, text: 'Profile', href: '/profile' },
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
                    <Image
                        src={isOpen ? "/StudyRacer_Banner.png" : "/logo_notext.png"}
                        alt="Project Logo"
                        width={isOpen ? 200 : 40}
                        height={isOpen ? 60 : 40}
                        className="transition-all duration-300"
                    />
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
                                    <span className={`whitespace-nowrap transition-all duration-300 ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
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
