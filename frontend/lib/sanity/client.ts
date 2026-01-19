import {createClient} from '@sanity/client'

/**
 * Public Sanity client for reading published content.
 * Uses the CDN by default (fast). No token needed for public datasets.
 */
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dwh5a0ih',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01',
  useCdn: true,
})

