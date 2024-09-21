// src/pages/api/api.js

import { connectToDatabase } from '../../sqlite';

export async function getUserFromDatabase(username, password) {
    try {
        const db = await connectToDatabase();
        const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
    }
}

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (req.method === 'GET') {
        try {
            const db = await connectToDatabase();
            const assignments = await db.all('SELECT * FROM assignments');
            res.status(200).json(assignments);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch assignments' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}