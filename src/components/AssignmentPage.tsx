"use client";

import React from 'react';
import TaskList from './TaskList';
import Leaderboard from './Leaderboard';

const AssignmentPage: React.FC = () => {
    return (
        <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold mb-6">Assignments</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <TaskList />
                </div>
                <div className="flex-1">
                    <Leaderboard />
                </div>
            </div>
        </div>
    );
};

export default AssignmentPage;
