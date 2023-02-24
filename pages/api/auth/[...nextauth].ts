import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any, req: any) {
                const payload = {
                    username: credentials.username,
                    password: credentials.password,
                };

                const res = await fetch('https://tkdcsqa2.tallykhata.com/api/auth/token/login', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: { 'Content-Type': 'application/json' },
                });

                const { auth_token, auth_user_info } = await res.json();
                if (!res.ok) throw new Error('error');
                if (res.ok && auth_token) return { token: auth_token, ...auth_user_info };
                return null;
            },
        }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        async jwt({ token, user, account }: any) {
            if (account && user) {
                return {
                    ...token,
                    user: user,
                    accessToken: user.token,
                    refreshToken: user.refreshToken,
                };
            }

            return token;
        },

        async session({ session, token }: any) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.accessTokenExpires = token.accessTokenExpires;
            return session;
        }
    },
    debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions)