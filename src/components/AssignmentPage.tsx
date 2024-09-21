"use client";

import React, { useState } from 'react';
import TaskList from './TaskList';
import Leaderboard from './Leaderboard';

interface Task {
    id: number;
    title: string;
    dueDate: string;
    completed: boolean;
}

const AssignmentPage: React.FC = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleSelectTask = (task: Task) => {
        setSelectedTask(task);
    };

    return (
        <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold mb-6">Assignments</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <TaskList onSelectTask={handleSelectTask} />
                </div>
                <div className="flex-1">
                    <Leaderboard selectedTask={selectedTask} />
                </div>
            </div>
        </div>
    );
};

export default AssignmentPage;
