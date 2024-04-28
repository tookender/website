import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({ clockSkewInMs: 30000 });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
