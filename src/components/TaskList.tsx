import React, { useState } from 'react';

interface SubTask {
    id: number;
    description: string;
    assignment_id: number;
}

interface TaskListProps {
    tasks: SubTask[];
    onSelectTask: (task: SubTask) => void;
    assignmentName: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onSelectTask, assignmentName }) => {
    const [taskList, setTaskList] = useState<SubTask[]>(tasks);

    const handleCheckboxChange = (taskId: number) => {
        setTaskList((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 h-full">
            <ul>
                {taskList.map((task) => (
                    <li
                        key={task.id}
                        className="mb-4 p-4 border-b last:border-b-0 border-gray-200 dark:border-gray-700 cursor-pointer"
                        onClick={() => onSelectTask(task)}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">{task.description}</h4>
                            </div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleCheckboxChange(task.id)}
                                className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400"
                                onClick={(e) => e.stopPropagation()} // Prevents the onClick event from firing on the parent element
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;