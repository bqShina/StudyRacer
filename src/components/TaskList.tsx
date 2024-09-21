import React from 'react';

interface Task {
    id: number;
    title: string;
    dueDate: string;
    completed: boolean;
}

const tasks: Task[] = [
    { id: 1, title: 'Assignment 1: Introduction to React', dueDate: '2024-04-15', completed: false },
    { id: 2, title: 'Quiz: JavaScript Basics', dueDate: '2024-04-18', completed: true },
    { id: 3, title: 'Group Project: Web App Development', dueDate: '2024-05-01', completed: false },
];

const TaskList: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Upcoming Tasks</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="mb-4 p-4 border-b last:border-b-0 border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">{task.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Due: {task.dueDate}</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => {}}
                                className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
