// src/pages/assignments/_middleware.js

import { getSession } from 'next-auth/client';

export async function middleware(req, ev) {
    const session = await getSession({ req });
    if (!session) {
        return new Response('Unauthorized', { status: 401 });
    }
    return new Response('OK', { status: 200 });
}