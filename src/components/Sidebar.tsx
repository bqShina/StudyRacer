import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <nav className="bg-[#394B58] text-white w-64 h-screen p-4">
            <ul>
                <li className="mb-2">
                    <Link href="/dashboard" className="hover:text-gray-300">
                        Dashboard
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/assignments" className="hover:text-gray-300">
                        Assignments
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/leaderboard" className="hover:text-gray-300">
                        Leaderboard
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Sidebar;