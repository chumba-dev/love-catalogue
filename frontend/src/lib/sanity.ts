import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const sanityConfigured = Boolean(projectId);

export const sanity = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  if (!sanity) {
    throw new Error(
      "Sanity is not configured. Set PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET.",
    );
  }
  return sanity.fetch<T>(query, params);
}
