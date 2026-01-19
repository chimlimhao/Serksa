import { createClient } from '@sanity/client'
import { learningPath } from '../lib/learning-path'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Initialize Sanity client
const client = createClient({
    projectId: 'dwh5a0ih',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN,
    apiVersion: '2024-01-01',
})

async function migrateAppAndLearningPath() {
    if (!process.env.SANITY_WRITE_TOKEN) {
        console.error('❌ Error: SANITY_WRITE_TOKEN not found in .env file')
        process.exit(1)
    }

    console.log(`🚀 Starting migration of App and Learning Path...`)

    try {
        // Step 1: Create the Instagram app
        console.log('\n📱 Creating Instagram app...')
        const appDoc = {
            _type: 'app',
            name: 'Instagram',
            slug: {
                _type: 'slug',
                current: 'instagram',
            },
            shortDescription: 'Photo sharing social media platform with over 2 billion users worldwide',
        }

        // Check if app already exists
        const existingApp = await client.fetch(`*[_type == "app" && slug.current == "instagram"][0]`)
        let appId: string

        if (existingApp) {
            console.log(`⏭️  App already exists: ${existingApp.name}`)
            appId = existingApp._id
        } else {
            const app = await client.create(appDoc)
            console.log(`✅ Created app: ${app.name}`)
            appId = app._id
        }

        // Step 2: Get all concept IDs for references
        console.log('\n🔍 Fetching concept IDs for references...')
        const concepts = await client.fetch(`*[_type == "concept"]{ _id, "slug": slug.current }`)
        const conceptMap = new Map(concepts.map((c: any) => [c.slug, c._id]))
        console.log(`✅ Found ${concepts.length} concepts`)

        // Step 3: Create the Learning Path
        console.log('\n📚 Creating Instagram Learning Path...')

        const learningPathDoc = {
            _type: 'learningPath',
            title: 'Build Instagram from Scratch',
            slug: {
                _type: 'slug',
                current: 'build-instagram',
            },
            app: {
                _type: 'reference',
                _ref: appId,
            },
            summary: 'Learn system design by building Instagram from scratch. See how it grows from 1 user to millions through 6 progressive stages.',
            stages: learningPath.map((level) => ({
                _type: 'learningPathStage',
                _key: `stage-${level.level}`,
                number: level.level,
                title: level.title,
                subtitle: level.subtitle,
                description: level.description,
                flowExplanation: level.outcome, // Using outcome as flow explanation
                concepts: level.concepts
                    .map((concept) => {
                        const conceptId = conceptMap.get(concept.slug)
                        if (!conceptId) {
                            console.warn(`⚠️  Concept not found: ${concept.slug}`)
                            return null
                        }
                        return {
                            _type: 'reference',
                            _ref: conceptId,
                            _key: Math.random().toString(36).substring(7),
                        }
                    })
                    .filter(Boolean), // Remove null entries
            })),
        }

        // Check if learning path already exists
        const existingPath = await client.fetch(`*[_type == "learningPath" && slug.current == "build-instagram"][0]`)

        if (existingPath) {
            console.log(`⏭️  Learning path already exists, updating...`)
            const updated = await client
                .patch(existingPath._id)
                .set(learningPathDoc)
                .commit()
            console.log(`✅ Updated learning path: ${updated.title}`)
        } else {
            const learningPathResult = await client.create(learningPathDoc)
            console.log(`✅ Created learning path: ${learningPathResult.title}`)
        }

        console.log(`\n📊 Migration complete!`)
        console.log(`✅ App: Instagram`)
        console.log(`✅ Learning Path: Build Instagram from Scratch`)
        console.log(`✅ Stages: ${learningPath.length}`)
        console.log(`\n🎉 Check your Sanity Studio at http://localhost:3333`)
    } catch (error: any) {
        console.error('❌ Error during migration:', error.message)
        if (error.response) {
            console.error('Response:', error.response.body)
        }
        process.exit(1)
    }
}

// Run the migration
migrateAppAndLearningPath().catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
})
