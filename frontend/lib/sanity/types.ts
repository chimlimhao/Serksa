export type ConceptDifficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type ConceptCategory =
  | 'API & Backend'
  | 'Frontend Architecture'
  | 'Security'
  | 'Performance & Scaling'
  | 'DevOps & Infrastructure'

export interface SanityConceptListItem {
  title: string
  slug: string
  description: string
  category: ConceptCategory
  difficulty: ConceptDifficulty
  readTime: string
}

export interface SanityConceptContent {
  whatItIs: string
  analogy: {
    title: string
    description?: string
    items: Array<{
      emoji?: string
      title: string
      subtitle?: string
      highlighted?: boolean
    }>
  }
  diagram?: Array<{
    emoji?: string
    title: string
    subtitle?: string
    color: 'primary' | 'secondary' | 'accent'
  }>
  diagramImage?: string | null
  howItWorks: Array<{ step?: string; title: string; description?: string }>
  misunderstanding: { wrong: string; correct: string }
  realWorld: { appName?: string; title: string; description: string; points: string[] }
}

export interface SanityConceptDetail extends SanityConceptListItem, SanityConceptContent { }

export interface SanityApp {
  _id: string
  name: string
  slug: string
  logo?: string
  shortDescription?: string
}

export interface SanityLearningPathStage {
  _key: string
  number: number
  title: string
  subtitle: string
  description: string
  flowExplanation: string
  concepts: SanityConceptListItem[]
  diagramImage?: string | null
}

export interface SanityLearningPath {
  _id: string
  title: string
  slug: string
  summary: string
  app: SanityApp
  stages: SanityLearningPathStage[]
}


export interface SanityPage {
  title: string
  slug: string
  content: any // Should ideally be PortableTextBlock[]
  seoDescription?: string
}
