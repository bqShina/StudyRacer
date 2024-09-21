"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Login to StudyRacer</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    Don&#39;t have an account? <Link href="/signup" className="text-primary hover:underline">Sign
                    up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
