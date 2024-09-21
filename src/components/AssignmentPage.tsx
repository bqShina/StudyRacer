"use client";

import React, { useState } from 'react';
import TaskList from './TaskList';
import Leaderboard from './Leaderboard';

interface SubTask {
    id: number;
    description: string;
    assignment_id: number;
}

interface Assignment {
    id: number;
    description: string;
    subtasks: SubTask[];
}

interface Props {
    assignments: Assignment[];
}

const AssignmentPage: React.FC<Props> = ({ assignments }) => {
    const [selectedTask, setSelectedTask] = useState<SubTask | null>(null);

    const handleSelectTask = (task: SubTask) => {
        setSelectedTask(task);
    };

    return (
        <div className="flex-1 p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                {assignments.map((assignment) => (
                    <div key={assignment.id} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">{assignment.description}</h3>
                        <TaskList tasks={assignment.subtasks} onSelectTask={handleSelectTask} assignmentName={assignment.description} />
                    </div>
                ))}
            </div>
            <div className="w-full md:w-1/3">
                <Leaderboard selectedTask={selectedTask} />
            </div>
        </div>
    );
};

export default AssignmentPage;