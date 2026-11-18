import type { APIRoute } from "astro";
import { sanityConfigured, sanityFetch } from "../lib/sanity";
import { searchIndexQuery } from "../lib/queries";

export const GET: APIRoute = async () => {
  const posts = sanityConfigured ? await sanityFetch<any[]>(searchIndexQuery).catch(() => []) : [];
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
