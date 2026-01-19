import groq from 'groq'

export const conceptsQuery = groq`
  *[_type == "concept"]|order(title asc){
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    difficulty,
    readTime
  }
`

export const conceptBySlugQuery = groq`
  *[_type == "concept" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    description,
    category,
    difficulty,
    readTime,
    whatItIs,
    analogy{
      title,
      description,
      items[]{
        emoji,
        title,
        subtitle,
        highlighted
      }
    },
    diagram[]{
      emoji,
      title,
      subtitle,
      color
    },
    "diagramImage": diagramImage.asset->url,
    howItWorks[]{step, title, description},
    misunderstanding{wrong, correct},
    realWorld{appName, title, description, points[]}
  }
`

export const learningPathBySlugQuery = groq`
  *[_type == "learningPath" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    app-> {
      _id,
      name,
      "slug": slug.current,
      "logo": logo.asset->url,
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
        title,
        "slug": slug.current,
        description,
        category,
        difficulty,
        readTime
      },
      "diagramImage": diagram.asset->url
    }
  }
`

export const appsQuery = groq`
  *[_type == "app"]|order(name asc){
    _id,
    name,
    "slug": slug.current,
    "logo": logo.asset->url,
    shortDescription
  }
`

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    blocks,
    seoDescription
  }
`
