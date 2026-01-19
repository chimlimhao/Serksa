import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'dwh5a0ih',
    dataset: 'production',
    useCdn: true, // Use CDN for faster reads
    apiVersion: '2024-01-01',
})

// Concept queries
export async function getAllConcepts() {
    return sanityClient.fetch(`
    *[_type == "concept"] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      category,
      difficulty,
      readTime
    }
  `)
}

export async function getConceptBySlug(slug: string) {
    return sanityClient.fetch(`
    *[_type == "concept" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      category,
      difficulty,
      readTime,
      whatItIs,
      analogy,
      diagram,
      diagramImage,
      howItWorks,
      misunderstanding,
      realWorld
    }
  `, { slug })
}

export async function getConceptsByCategory(category: string) {
    return sanityClient.fetch(`
    *[_type == "concept" && category == $category] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      category,
      difficulty,
      readTime
    }
  `, { category })
}

// Learning Path queries
export async function getAllLearningPaths() {
    return sanityClient.fetch(`
    *[_type == "learningPath"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      summary,
      app-> {
        _id,
        name,
        "slug": slug.current,
        logo,
        shortDescription
      }
    }
  `)
}

export async function getLearningPathBySlug(slug: string) {
    return sanityClient.fetch(`
    *[_type == "learningPath" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      summary,
      app-> {
        _id,
        name,
        "slug": slug.current,
        logo,
        shortDescription
      },
      stages[] {
        _key,
        number,
        title,
        subtitle,
        description,
        flowExplanation,
        concepts[]-> {
          _id,
          title,
          "slug": slug.current,
          description,
          category,
          difficulty,
          readTime
        }
      }
    }
  `, { slug })
}

// App queries
export async function getAllApps() {
    return sanityClient.fetch(`
    *[_type == "app"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      logo,
      shortDescription
    }
  `)
}

export async function getAppBySlug(slug: string) {
    return sanityClient.fetch(`
    *[_type == "app" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      logo,
      shortDescription
    }
  `, { slug })
}

// Helper: Get concept count by category
export async function getConceptCountByCategory() {
    const concepts = await getAllConcepts()
    return concepts.reduce((acc: any, concept: any) => {
        acc[concept.category] = (acc[concept.category] || 0) + 1
        return acc
    }, {})
}
