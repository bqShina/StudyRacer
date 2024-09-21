import React from 'react';
import Link from 'next/link';

const Dashboard: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Welcome to StudyRacer</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4">Track Your Progress</h2>
                    <p className="mb-4">Stay on top of your assignments and watch your performance improve over time.</p>
                    <Link href="/assignments" className="text-primary hover:underline">View Assignments</Link>
                </div>
                <div className="card hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4">Compete with Peers</h2>
                    <p className="mb-4">Join the leaderboard and challenge yourself to reach the top.</p>
                    <Link href="/leaderboard" className="text-primary hover:underline">Check Leaderboard</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
