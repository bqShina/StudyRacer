"use client";

import React from 'react';

interface LeaderboardEntry {
    rank: number;
    name: string;
    points: number;
}

const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: 'Alice', points: 1500 },
    { rank: 2, name: 'Bob', points: 1350 },
    { rank: 3, name: 'Charlie', points: 1200 },
    { rank: 4, name: 'David', points: 1100 },
    { rank: 5, name: 'Eve', points: 1000 },
];

const Leaderboard: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mx-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Leaderboard</h3>
            <ul>
                {leaderboardData.map((entry) => (
                    <li key={entry.rank} className="mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="font-bold mr-2 text-gray-900 dark:text-gray-100">{entry.rank}.</span>
                            <span className="text-gray-900 dark:text-gray-100">{entry.name}</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{entry.points} pts</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
