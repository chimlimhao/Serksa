import { createClient } from '@sanity/client'
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

const generateKey = () => Math.random().toString(36).substring(2, 11)

const pages = [
    {
        _type: 'page',
        _id: 'page-about',
        title: 'About Serksa',
        slug: { _type: 'slug', current: 'about' },
        seoDescription: 'Learn why Serksa exists and our philosophy on teaching system design.',
        blocks: [
            {
                _key: generateKey(),
                _type: 'hero',
                title: 'About Serksa',
                subtitle: '"A simple site that explains system design concepts the way you wish someone explained them to you."',
                badge: 'Our Mission'
            },
            {
                _key: generateKey(),
                _type: 'contentSection',
                heading: 'Why This Exists',
                body: [
                    {
                        _key: generateKey(),
                        _type: 'block',
                        children: [{ _key: generateKey(), _type: 'span', text: 'When I was learning system design, I struggled with overly academic explanations and scattered resources. I\'d read articles that assumed I already understood distributed systems, scalability, and architecture patterns.' }]
                    },
                    {
                        _key: generateKey(),
                        _type: 'block',
                        children: [{ _key: generateKey(), _type: 'span', text: 'I wished someone would just explain things simply, with real-world analogies and clear diagrams that showed how everything connects.' }]
                    }
                ]
            },
            {
                _key: generateKey(),
                _type: 'gridSection',
                heading: 'The Philosophy',
                items: [
                    {
                        _key: generateKey(),
                        icon: '💡',
                        title: 'Clarity Over Completeness',
                        description: 'I\'d rather you understand 80% really well than be confused by 100% of the details.',
                        variant: 'highlight'
                    },
                    {
                        _key: generateKey(),
                        icon: '🧠',
                        title: 'Mental Models Over Memorization',
                        description: 'Good analogies stick. They help you reason about new problems, not just remember facts.',
                        variant: 'highlight'
                    },
                    {
                        _key: generateKey(),
                        icon: '🖼️',
                        title: 'Visual Over Textual',
                        description: 'A simple diagram can explain in seconds what paragraphs of text cannot.',
                        variant: 'highlight'
                    }
                ]
            },
            {
                _key: generateKey(),
                _type: 'infoList',
                heading: 'What This Is NOT',
                items: [
                    { _key: generateKey(), text: 'Not a comprehensive course', isPositive: false },
                    { _key: generateKey(), text: 'Not interactive coding exercises', isPositive: false },
                    { _key: generateKey(), text: 'Not behind a paywall (and never will be)', isPositive: true }
                ]
            },
            {
                _key: generateKey(),
                _type: 'gridSection',
                heading: 'How You Can Help',
                items: [
                    {
                        _key: generateKey(),
                        icon: '📢',
                        title: 'Share It',
                        description: 'If this helped you, share it with someone else who\'s learning. That\'s the best support.',
                        buttonText: 'Share Serksa',
                        buttonLink: '/',
                        variant: 'normal'
                    },
                    {
                        _key: generateKey(),
                        icon: '💡',
                        title: 'Suggest Concepts',
                        description: 'Have a concept you wish was explained simply? Let me know!',
                        buttonText: 'Suggest a Concept',
                        buttonLink: '/suggest',
                        variant: 'highlight'
                    },
                    {
                        _key: generateKey(),
                        icon: '❤️',
                        title: 'Support Project',
                        description: 'If you found this valuable and want to support the project, you can help us grow.',
                        buttonText: 'Support Serksa',
                        buttonLink: '/support',
                        variant: 'highlight'
                    }
                ]
            },
            {
                _key: generateKey(),
                _type: 'contentSection',
                heading: 'Who Made This?',
                body: [
                    {
                        _key: generateKey(),
                        _type: 'block',
                        children: [{ _key: generateKey(), _type: 'span', text: 'Hi! I\'m Lim Hao, a developer who believes that system design should be accessible to everyone.' }]
                    }
                ]
            }
        ]
    }
]

async function seedPages() {
    if (!process.env.SANITY_WRITE_TOKEN) {
        console.error('❌ Error: SANITY_WRITE_TOKEN not found in .env file')
        process.exit(1)
    }

    console.log('🚀 Seeding granular pages to Sanity...')

    for (const page of pages) {
        try {
            await client.createOrReplace(page)
            console.log(`✅ Seeded page with every detail: ${page.title}`)
        } catch (error: any) {
            console.error(`❌ Error seeding page ${page.title}:`, error.message)
        }
    }

    console.log('\n🎉 Seeding complete! Refresh Sanity Studio to see the new granular controls.')
}

seedPages()
