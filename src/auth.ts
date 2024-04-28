// @ts-nocheck
import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import type { Provider } from "next-auth/providers";
import type { Session } from "next-auth";

export interface TokenSession extends Session {
  accessToken: string;
}

const providers: Provider[] = [Discord];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      session.user.token = token.accessToken as string;
      return session;
    },
  },
});
