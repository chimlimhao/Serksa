import { createClient } from '@sanity/client'

/**
 * Public Sanity client for reading published content.
 * Uses the CDN by default (fast). No token needed for public datasets.
 */
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
})
