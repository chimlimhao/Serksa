import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
    projectId: 'dwh5a0ih',
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN,
    apiVersion: '2024-01-01',
})

async function cleanConcepts() {
    console.log('🧹 Cleaning up duplicate concepts...')

    try {
        console.log('🔗 Deleting learning paths first to break references...')
        await client.delete({ query: '*[_type == "learningPath"]' })

        console.log('📱 Deleting apps...')
        await client.delete({ query: '*[_type == "app"]' })

        console.log('💡 Deleting concepts...')
        await client.delete({ query: '*[_type == "concept"]' })

        console.log('✅ Successfully cleaned the database.')
        console.log('🚀 Now you can run the migration script again to have a clean dataset.')
    } catch (error: any) {
        console.error('❌ Error cleaning concepts:', error.message)
    }
}

cleanConcepts()
