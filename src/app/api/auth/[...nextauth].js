// src/pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { getUserFromDatabase } from '../api/api';

export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const user = await getUserFromDatabase(credentials.username, credentials.password);
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session(session, token) {
            session.user.id = token.id;
            return session;
        }
    }
});