// lib/sqlite.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function connectToDatabase() {
    const db = await open({
        filename: '../studyracer.db', // Path to your SQLite database file
        driver: sqlite3.Database
    });
    return db;
}