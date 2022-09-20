import NextAuth from 'next-auth';

export default NextAuth({
  providers: [
  ],
  callbacks: {
    async session(session, token) {
      session.accessToken = token;
      return session;
    },
  },
});