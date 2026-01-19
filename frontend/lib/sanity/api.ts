import { sanityClient } from './client'
import { appsQuery, conceptBySlugQuery, conceptsQuery, learningPathBySlugQuery, pageBySlugQuery } from './queries'
import type { SanityApp, SanityConceptDetail, SanityConceptListItem, SanityLearningPath, SanityPage } from './types'

/**
 * Returns null if Sanity is unreachable or empty.
 * We use this to fall back to local TS content during migration.
 */
export async function fetchConceptsFromSanity(): Promise<SanityConceptListItem[] | null> {
  try {
    const res = await sanityClient.fetch<SanityConceptListItem[]>(conceptsQuery)
    if (!Array.isArray(res) || res.length === 0) return null
    return res
  } catch {
    return null
  }
}

export async function fetchConceptBySlugFromSanity(slug: string): Promise<SanityConceptDetail | null> {
  try {
    const res = await sanityClient.fetch<SanityConceptDetail | null>(conceptBySlugQuery, { slug })
    if (!res || !res.slug) return null
    return res
  } catch {
    return null
  }
}

export async function fetchLearningPathBySlug(slug: string): Promise<SanityLearningPath | null> {
  try {
    const res = await sanityClient.fetch<SanityLearningPath | null>(learningPathBySlugQuery, { slug })
    return res
  } catch {
    return null
  }
}

export async function fetchAppsFromSanity(): Promise<SanityApp[] | null> {
  try {
    const res = await sanityClient.fetch<SanityApp[]>(appsQuery)
    return res
  } catch {
    return null
  }
}

export async function fetchPageBySlug(slug: string): Promise<SanityPage | null> {
  try {
    const res = await sanityClient.fetch<SanityPage | null>(pageBySlugQuery, { slug })
    return res
  } catch {
    return null
  }
}

