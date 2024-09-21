import React from 'react';
import Link from 'next/link';
import UserProfile from './UserProfile';

const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-primary hover:text-secondary transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href="/assignments" className="text-primary hover:text-secondary transition-colors">Assignments</Link>
                    </li>
                    <li>
                        <Link href="/leaderboard" className="text-primary hover:text-secondary transition-colors">Leaderboard</Link>
                    </li>
                    <li>
                        <Link href="/login" className="text-primary hover:text-secondary transition-colors">Login</Link>
                    </li>
                    <li>
                        <Link href="/signup" className="text-primary hover:text-secondary transition-colors">Sign Up</Link>
                    </li>
                </ul>
                <UserProfile />
            </nav>
        </header>
    );
};

export default Header;
