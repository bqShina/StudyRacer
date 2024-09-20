"use client";

import React from 'react';
import TaskList from './TaskList';
import Leaderboard from './Leaderboard';

const AssignmentPage: React.FC = () => {
    return (
        <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold mb-6">Assignments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <TaskList />
                </div>
                <div>
                    <Leaderboard />
                </div>
            </div>
        </div>
    );
};

export default AssignmentPage;