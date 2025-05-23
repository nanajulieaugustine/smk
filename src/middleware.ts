// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Liste over offentlige ruter
// Her kan du tilføje flere ruter, som ikke skal beskyttes
const isPublicRoute = createRouteMatcher([
  "/", // forside
  "/arrangementer(.*)", // korrekt sti
  "/ordrebekraeftelse(.*)",
  "/ordreoversigt(.*)", // korrekt sti
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    console.log(req.nextUrl.pathname);
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
