import { createClient } from '@sanity/client'
import { webDevConcepts } from '../../lib/concepts-data'
import { conceptContent } from '../../lib/concept-content'

// Initialize Sanity client
const client = createClient({
    projectId: 'dwh5a0ih',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN, // You'll need to create this
    apiVersion: '2024-01-01',
})

async function migrateConcepts() {
    console.log(`🚀 Starting migration of ${webDevConcepts.length} concepts...`)

    let successCount = 0
    let errorCount = 0

    for (const concept of webDevConcepts) {
        try {
            const content = conceptContent[concept.slug]

            if (!content) {
                console.warn(`⚠️  No content found for ${concept.slug}, skipping...`)
                continue
            }

            // Create the Sanity document
            const doc = {
                _type: 'concept',
                title: concept.title,
                slug: {
                    _type: 'slug',
                    current: concept.slug,
                },
                description: concept.description,
                category: concept.category,
                difficulty: concept.difficulty,
                readTime: concept.readTime,
                whatItIs: content.whatItIs,
                analogy: {
                    _type: 'object',
                    title: content.analogy.title,
                    description: content.analogy.description || '',
                    items: content.analogy.items.map((item) => ({
                        _type: 'analogyItem',
                        _key: Math.random().toString(36).substring(7),
                        emoji: item.emoji,
                        title: item.title,
                        subtitle: item.subtitle,
                        highlighted: item.highlighted || false,
                    })),
                },
                diagram: content.diagram.map((node) => ({
                    _type: 'diagramNode',
                    _key: Math.random().toString(36).substring(7),
                    emoji: node.emoji,
                    title: node.title,
                    subtitle: node.subtitle,
                    color: node.color,
                })),
                howItWorks: content.howItWorks.map((step) => ({
                    _type: 'step',
                    _key: Math.random().toString(36).substring(7),
                    step: step.step,
                    title: step.title,
                    description: step.description,
                })),
                misunderstanding: {
                    _type: 'object',
                    wrong: content.misunderstanding.wrong,
                    correct: content.misunderstanding.correct,
                },
                realWorld: {
                    _type: 'object',
                    appName: '', // You can add this manually later if needed
                    title: content.realWorld.title,
                    description: content.realWorld.description,
                    points: content.realWorld.points,
                },
            }

            // Create the document in Sanity
            await client.create(doc)
            console.log(`✅ Migrated: ${concept.title}`)
            successCount++
        } catch (error) {
            console.error(`❌ Error migrating ${concept.title}:`, error)
            errorCount++
        }
    }

    console.log(`\n📊 Migration complete!`)
    console.log(`✅ Success: ${successCount}`)
    console.log(`❌ Errors: ${errorCount}`)
}

// Run the migration
migrateConcepts().catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
})
