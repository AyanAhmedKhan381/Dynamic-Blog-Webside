import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next/static|_next/image|favicon.ico|[^?]*\\.(?:html?|css|js|json|jpg|jpeg|webp|png|gif|svg|ttf|woff2|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/api/(.*)',
    // Add routes you explicitly want to include
    '/some-specific-route',
  ],
};