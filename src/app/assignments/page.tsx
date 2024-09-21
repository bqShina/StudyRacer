"use client";

import React, { useEffect, useState } from 'react';
import AssignmentPage from '../../components/AssignmentPage';

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

const Assignments: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);

    useEffect(() => {
        fetch('/api/assignments')
            .then((response) => response.json())
            .then((data) => {
                const fetchSubTasks = data.map((assignment: Assignment) =>
                    fetch(`/api/assignments/subtasks/${assignment.id}`)
                        .then((response) => response.json())
                        .then((subtasks) => ({ ...assignment, subtasks }))
                );
                return Promise.all(fetchSubTasks);
            })
            .then((assignmentsWithSubTasks) => setAssignments(assignmentsWithSubTasks))
            .catch((error) => console.error('Error fetching assignments:', error));
    }, []);

    return <AssignmentPage assignments={assignments} />;
};

export default Assignments;