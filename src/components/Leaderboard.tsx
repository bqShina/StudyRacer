"use client";

import React from 'react';

interface LeaderboardEntry {
    rank: number;
    name: string;
    points: number;
    dueDate: string;
}

const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: 'Alice', points: 1500, dueDate: '2024-04-15' },
    { rank: 2, name: 'Bob', points: 1350, dueDate: '2024-04-18' },
    { rank: 3, name: 'Charlie', points: 1200, dueDate: '2024-05-01' },
    { rank: 4, name: 'David', points: 1100, dueDate: '2024-05-05' },
    { rank: 5, name: 'Eve', points: 1000, dueDate: '2024-05-10' },
];

const Leaderboard: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 h-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Leaderboard</h3>
            <ul>
                {leaderboardData.map((entry) => (
                    <li key={entry.rank} className="mb-4 p-4 border-b last:border-b-0 border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <span className="font-bold mr-2 text-gray-900 dark:text-gray-100">{entry.rank}.</span>
                                <span className="text-gray-900 dark:text-gray-100">{entry.name}</span>
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{entry.points} pts</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(entry.points / 1500) * 100}%` }}></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Due: {entry.dueDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
