"use client";

import React, { useEffect, useState } from 'react';
import AssignmentPage from '../../components/AssignmentPage';

const Assignments: React.FC = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('/api/assignments')
            .then((response) => response.json())
            .then((data) => setAssignments(data))
            .catch((error) => console.error('Error fetching assignments:', error));
    }, []);

    console.log('assignments:', assignments);

    return <AssignmentPage />;
};

export default Assignments;
