// Language configuration for Khmer and English
export type Language = 'en' | 'km';

export const translations = {
    en: {
        // Site Info
        siteName: 'Serksa',
        tagline: 'Web development concepts explained simply',

        // Navigation
        nav: {
            allConcepts: 'All Concepts',
            about: 'About',
            support: 'Support',
            suggest: 'Suggest',
        },

        // Home Page
        home: {
            badge: '#1 Web Dev Learning Platform',
            heroTitle: 'Web Development Concepts',
            heroTitleHighlight: 'Explained Simply',
            heroSubtitle: 'Learn core web development concepts through simple analogies, clear diagrams, and mental models that actually stick.',
            ctaPrimary: 'Start Learning',
            ctaSecondary: 'Explore Concepts',

            valueProps: {
                quick: {
                    title: 'Quick to Grasp',
                    subtitle: '5-min reads',
                },
                visual: {
                    title: 'Visual Learning',
                    subtitle: 'Diagrams included',
                },
                free: {
                    title: 'Always Free',
                    subtitle: 'No paywalls',
                },
            },

            featuredTitle: 'Start Here',
            featuredSubtitle: 'Popular concepts that help things "click" for beginners',
            viewAll: 'View All Concepts',

            howItWorks: {
                title: 'How Each Concept Works',
                subtitle: 'Every explanation follows the same simple structure',
                steps: [
                    { title: 'What It Is', description: '1-2 sentence definition' },
                    { title: 'Simple Analogy', description: 'Real-world comparison' },
                    { title: 'Visual Diagram', description: 'See how it works' },
                    { title: 'How It Works', description: 'Step-by-step flow' },
                    { title: 'Common Mistake', description: 'What people get wrong' },
                ],
            },

            whyExists: {
                title: 'Why This Exists',
                description: 'I built this because I wish someone had explained these concepts to me this way when I was learning. No jargon. No complexity. Just clarity.',
                subtitle: 'This is the resource I needed as a beginner. Now it\'s here for you.',
                cta: 'Read the Full Story',
            },

            finalCta: {
                title: 'Ready to Learn?',
                subtitle: 'Start with any concept. They\'re all free, forever.',
                button: 'Explore All Concepts',
                note: 'No signup required · No credit card · No catch',
            },
        },

        // Concepts Page
        concepts: {
            title: 'All Concepts',
            subtitle: 'Browse all web development concepts. Each one is designed to help things "click" in under 10 minutes.',
            searchPlaceholder: 'Search concepts...',
            backToHome: 'Back to Home',
            comingSoon: {
                title: 'More Coming Soon',
                description: 'New concepts are added regularly. Have a suggestion?',
                button: 'Suggest a Concept',
            },
            categories: {
                all: 'All',
                htmlCss: 'HTML & CSS',
                javascript: 'JavaScript',
                webBasics: 'Web Basics',
                tools: 'Tools',
            },
            difficulty: {
                beginner: 'Beginner',
                intermediate: 'Intermediate',
                advanced: 'Advanced',
            },
        },

        // Concept Page Structure
        concept: {
            backToConcepts: 'All Concepts',
            readTime: 'min read',
            sections: {
                whatItIs: 'What It Is',
                analogy: 'Simple Analogy',
                diagram: 'Visual Diagram',
                howItWorks: 'How It Works',
                commonMistake: 'Common Misunderstanding',
            },
            analogyTitle: 'The Restaurant Analogy',
            mistakeTitle: 'What People Get Wrong',
            mistakeWrong: 'Wrong:',
            mistakeCorrect: 'Correct:',
            realWorldExample: 'Real-World Example',
            wasHelpful: 'Was this helpful? Share it with someone learning to code!',
            navigation: {
                previous: 'Previous:',
                next: 'Next:',
            },
        },

        // About Page
        about: {
            title: 'About Serksa',
            quote: 'A simple site that explains web development concepts the way you wish someone explained them to you.',
            whyExists: {
                title: 'Why This Exists',
                paragraphs: [
                    'When I was learning to code, I struggled with technical jargon and overly complex explanations. I\'d read documentation that assumed I already knew what I was trying to learn.',
                    'I wished someone would just explain things simply, with analogies I could relate to and diagrams that made sense.',
                    'So I built this. It\'s the resource I needed as a beginner. Now it\'s here for you.',
                ],
            },
            philosophy: {
                title: 'The Philosophy',
                items: [
                    {
                        title: 'Clarity Over Completeness',
                        description: 'I\'d rather you understand 80% really well than be confused by 100% of the details.',
                    },
                    {
                        title: 'Mental Models Over Memorization',
                        description: 'Good analogies stick. They help you reason about new problems, not just remember facts.',
                    },
                    {
                        title: 'Visual Over Textual',
                        description: 'A simple diagram can explain in seconds what paragraphs of text cannot.',
                    },
                ],
            },
            whatIsNot: {
                title: 'What This Is NOT',
                items: [
                    'Not a comprehensive course (there are plenty of those)',
                    'Not interactive coding exercises (use freeCodeCamp for that)',
                    'Not AI-generated content (every word is written by a human)',
                    'Not behind a paywall (and never will be)',
                ],
            },
            whoMade: {
                title: 'Who Made This?',
                paragraphs: [
                    'Hi! I\'m a developer who believes that learning should be accessible and enjoyable. I\'ve spent years explaining web development concepts to beginners, and this site is a collection of those explanations.',
                    'This is a side project built with love, maintained in my free time, and shared freely with the community.',
                ],
            },
            howToHelp: {
                title: 'How You Can Help',
                items: [
                    {
                        icon: '📢',
                        title: 'Share It',
                        description: 'If this helped you, share it with someone else who\'s learning. That\'s the best support.',
                    },
                    {
                        icon: '💡',
                        title: 'Suggest Concepts',
                        description: 'Have a concept you wish was explained simply? Let me know!',
                    },
                    {
                        icon: '❤️',
                        title: 'Support',
                        description: 'If you found this valuable and want to support the project, you can buy me a coffee.',
                        button: 'Support This Project',
                    },
                ],
            },
            thankYou: {
                title: 'Thank you for being here.',
                subtitle: 'Every person who learns from this site makes the effort worthwhile.',
            },
        },

        // Support Page
        support: {
            title: 'Support This Project',
            subtitle: 'Serksa is 100% free and always will be. If you found it helpful, here\'s how you can support the project.',
            freeWays: {
                title: 'Free Ways to Help',
                items: [
                    {
                        icon: '📢',
                        title: 'Share with Others',
                        description: 'Tell a friend, share on Twitter, or post in a learning community. Every share helps someone discover this resource.',
                    },
                    {
                        icon: '⭐',
                        title: 'Star on GitHub',
                        description: 'If you\'re a developer, starring the repo helps others find it.',
                        button: 'Star on GitHub',
                    },
                    {
                        icon: '💡',
                        title: 'Suggest Concepts',
                        description: 'Have an idea for a concept that should be explained? Let me know!',
                    },
                ],
            },
            financial: {
                title: 'Buy Me a Coffee',
                description: 'Creating and maintaining this site takes time. If you\'d like to support the project financially, you can buy me a coffee. It\'s completely optional and doesn\'t unlock any features—everything stays free for everyone.',
                buttonCoffee: 'Buy Me a Coffee',
                buttonKofi: 'Support on Ko-fi',
                note: 'Your support helps cover hosting costs and motivates me to create more content.',
            },
            whatHelps: {
                title: 'What Your Support Helps With',
                items: [
                    'Keeps the site running (hosting, domain, etc.)',
                    'Motivates me to create more concepts',
                    'Allows me to spend more time improving explanations',
                    'Shows that this work is valued by the community',
                ],
            },
            thankYou: {
                title: 'Thank You! 🙏',
                description: 'Whether you share, star, suggest, or support financially—every bit of help makes a difference. Thank you for being part of this journey to make web development education more accessible.',
            },
        },

        // Suggest Page
        suggest: {
            title: 'Suggest a Concept',
            subtitle: 'Have a web development concept you wish was explained simply? Let me know!',
            form: {
                conceptName: {
                    label: 'Concept Name',
                    placeholder: 'e.g., "What is Flexbox?"',
                },
                category: {
                    label: 'Category',
                    placeholder: 'Select a category',
                },
                why: {
                    label: 'Why is this concept confusing?',
                    placeholder: 'Tell me what makes this concept hard to understand...',
                },
                email: {
                    label: 'Your Email (Optional)',
                    placeholder: 'your@email.com',
                },
                submit: 'Submit Suggestion',
            },
            thankYou: {
                title: 'Thank You!',
                description: 'Your suggestion has been received. I\'ll review it and consider adding it to the site.',
            },
        },

        // 404 Page
        notFound: {
            title: '404 - Page Not Found',
            description: 'Oops! The page you\'re looking for doesn\'t exist.',
            suggestion: 'Maybe you\'d like to explore our concepts instead?',
            button: 'Browse All Concepts',
            backHome: 'Back to Home',
        },

        // Footer
        footer: {
            tagline: 'Web development concepts explained the way you wish someone explained them to you.',
            learn: 'Learn',
            about: 'About',
            copyright: '© 2025 Serksa. Made with ❤️ for learners.',
            social: {
                twitter: 'Twitter',
                github: 'GitHub',
            },
        },
    },

    km: {
        // Site Info
        siteName: 'សិក្សា',
        tagline: 'គំនិតអភិវឌ្ឍន៍គេហទំព័រពន្យល់ដោយសាមញ្ញ',

        // Navigation
        nav: {
            allConcepts: 'គំនិតទាំងអស់',
            about: 'អំពី',
            support: 'គាំទ្រ',
            suggest: 'ស្នើសុំ',
        },

        // Home Page
        home: {
            badge: '#១ វេទិកាសិក្សាអភិវឌ្ឍន៍គេហទំព័រ',
            heroTitle: 'គំនិតអភិវឌ្ឍន៍គេហទំព័រ',
            heroTitleHighlight: 'ពន្យល់ដោយសាមញ្ញ',
            heroSubtitle: 'រៀនគំនិតអភិវឌ្ឍន៍គេហទំព័រតាមរយៈការប្រៀបធៀបសាមញ្ញ ដ្យាក្រាមច្បាស់លាស់ និងគំរូផ្លូវចិត្តដែលពិតជាជាប់',
            ctaPrimary: 'ចាប់ផ្តើមរៀន',
            ctaSecondary: 'ស្វែងរកគំនិត',

            valueProps: {
                quick: {
                    title: 'យល់បានលឿន',
                    subtitle: 'អាន ៥ នាទី',
                },
                visual: {
                    title: 'ការរៀនដោយមើលឃើញ',
                    subtitle: 'មានដ្យាក្រាម',
                },
                free: {
                    title: 'ឥតគិតថ្លៃជានិច្ច',
                    subtitle: 'គ្មានការបង់ប្រាក់',
                },
            },

            featuredTitle: 'ចាប់ផ្តើមទីនេះ',
            featuredSubtitle: 'គំនិតពេញនិយមដែលជួយឱ្យយល់បានសម្រាប់អ្នកចាប់ផ្តើម',
            viewAll: 'មើលគំនិតទាំងអស់',

            howItWorks: {
                title: 'របៀបដែលគំនិតនីមួយៗដំណើរការ',
                subtitle: 'ការពន្យល់នីមួយៗធ្វើតាមរចនាសម្ព័ន្ធសាមញ្ញដូចគ្នា',
                steps: [
                    { title: 'វាជាអ្វី', description: 'និយមន័យ ១-២ ប្រយោគ' },
                    { title: 'ការប្រៀបធៀបសាមញ្ញ', description: 'ការប្រៀបធៀបពិភពលោកពិត' },
                    { title: 'ដ្យាក្រាមដែលមើលឃើញ', description: 'មើលរបៀបដែលវាដំណើរការ' },
                    { title: 'របៀបដែលវាដំណើរការ', description: 'លំហូរជាជំហាន' },
                    { title: 'កំហុសទូទៅ', description: 'អ្វីដែលមនុស្សយល់ខុស' },
                ],
            },

            whyExists: {
                title: 'ហេតុអ្វីបានជាមានវា',
                description: 'ខ្ញុំបានបង្កើតវាពីព្រោះខ្ញុំសង្ឃឹមថានរណាម្នាក់បានពន្យល់គំនិតទាំងនេះដល់ខ្ញុំតាមវិធីនេះនៅពេលខ្ញុំកំពុងរៀន។ គ្មានពាក្យបច្ចេកទេស។ គ្មានភាពស្មុគស្មាញ។ គ្រាន់តែភាពច្បាស់លាស់។',
                subtitle: 'នេះគឺជាធនធានដែលខ្ញុំត្រូវការជាអ្នកចាប់ផ្តើម។ ឥឡូវនេះវានៅទីនេះសម្រាប់អ្នក។',
                cta: 'អានរឿងពេញលេញ',
            },

            finalCta: {
                title: 'ត្រៀមខ្លួនរៀនហើយឬនៅ?',
                subtitle: 'ចាប់ផ្តើមជាមួយគំនិតណាមួយ។ ពួកគេទាំងអស់គឺឥតគិតថ្លៃជារៀងរហូត។',
                button: 'ស្វែងរកគំនិតទាំងអស់',
                note: 'មិនត្រូវការចុះឈ្មោះ · មិនត្រូវការកាតឥណទាន · គ្មានការចាប់',
            },
        },

        // Concepts Page
        concepts: {
            title: 'គំនិតទាំងអស់',
            subtitle: 'រកមើលគំនិតអភិវឌ្ឍន៍គេហទំព័រទាំងអស់។ នីមួយៗត្រូវបានរចនាឡើងដើម្បីជួយឱ្យយល់បានក្នុងរយៈពេលតិចជាង ១០ នាទី។',
            searchPlaceholder: 'ស្វែងរកគំនិត...',
            backToHome: 'ត្រឡប់ទៅទំព័រដើម',
            comingSoon: {
                title: 'មកដល់ឆាប់ៗនេះ',
                description: 'គំនិតថ្មីត្រូវបានបន្ថែមជាទៀងទាត់។ មានការស្នើសុំ?',
                button: 'ស្នើសុំគំនិត',
            },
            categories: {
                all: 'ទាំងអស់',
                htmlCss: 'HTML & CSS',
                javascript: 'JavaScript',
                webBasics: 'មូលដ្ឋានគេហទំព័រ',
                tools: 'ឧបករណ៍',
            },
            difficulty: {
                beginner: 'អ្នកចាប់ផ្តើម',
                intermediate: 'មធ្យម',
                advanced: 'កម្រិតខ្ពស់',
            },
        },

        // Concept Page Structure (using English for now - can be translated later)
        concept: {
            backToConcepts: 'គំនិតទាំងអស់',
            readTime: 'នាទីអាន',
            sections: {
                whatItIs: 'វាជាអ្វី',
                analogy: 'ការប្រៀបធៀបសាមញ្ញ',
                diagram: 'ដ្យាក្រាមដែលមើលឃើញ',
                howItWorks: 'របៀបដែលវាដំណើរការ',
                commonMistake: 'កំហុសទូទៅ',
            },
            analogyTitle: 'ការប្រៀបធៀប',
            mistakeTitle: 'អ្វីដែលមនុស្សយល់ខុស',
            mistakeWrong: 'ខុស:',
            mistakeCorrect: 'ត្រឹមត្រូវ:',
            realWorldExample: 'ឧទាហរណ៍ពិតប្រាកដ',
            wasHelpful: 'តើនេះមានប្រយោជន៍ទេ? ចែករំលែកវាជាមួយនរណាម្នាក់ដែលកំពុងរៀនសរសេរកូដ!',
            navigation: {
                previous: 'មុន:',
                next: 'បន្ទាប់:',
            },
        },

        // About Page (using English for now)
        about: {
            title: 'អំពីសិក្សា',
            quote: 'គេហទំព័រសាមញ្ញដែលពន្យល់គំនិតអភិវឌ្ឍន៍គេហទំព័រតាមវិធីដែលអ្នកសង្ឃឹមថានរណាម្នាក់បានពន្យល់ដល់អ្នក។',
            whyExists: {
                title: 'ហេតុអ្វីបានជាមានវា',
                paragraphs: [
                    'When I was learning to code, I struggled with technical jargon and overly complex explanations.',
                    'I wished someone would just explain things simply, with analogies I could relate to.',
                    'So I built this. It\'s the resource I needed as a beginner.',
                ],
            },
            philosophy: {
                title: 'ទស្សនវិជ្ជា',
                items: [
                    { title: 'Clarity Over Completeness', description: 'I\'d rather you understand 80% really well than be confused by 100%.' },
                    { title: 'Mental Models Over Memorization', description: 'Good analogies stick.' },
                    { title: 'Visual Over Textual', description: 'A simple diagram can explain in seconds what paragraphs cannot.' },
                ],
            },
            whatIsNot: {
                title: 'វាមិនមែនជាអ្វី',
                items: [
                    'Not a comprehensive course',
                    'Not interactive coding exercises',
                    'Not AI-generated content',
                    'Not behind a paywall',
                ],
            },
            whoMade: {
                title: 'អ្នកណាបានបង្កើតវា?',
                paragraphs: [
                    'Hi! I\'m a developer who believes learning should be accessible.',
                    'This is a side project built with love.',
                ],
            },
            howToHelp: {
                title: 'របៀបដែលអ្នកអាចជួយ',
                items: [
                    { icon: '📢', title: 'ចែករំលែកវា', description: 'If this helped you, share it with someone else.' },
                    { icon: '💡', title: 'ស្នើសុំគំនិត', description: 'Have a concept you wish was explained simply?' },
                    { icon: '❤️', title: 'គាំទ្រ', description: 'Support the project financially.', button: 'គាំទ្រគម្រោងនេះ' },
                ],
            },
            thankYou: {
                title: 'សូមអរគុណសម្រាប់ការមកទីនេះ។',
                subtitle: 'រាល់មនុស្សដែលរៀនពីគេហទំព័រនេះធ្វើឱ្យការខិតខំប្រឹងប្រែងមានតម្លៃ។',
            },
        },

        // Support Page
        support: {
            title: 'គាំទ្រគម្រោងនេះ',
            subtitle: 'សិក្សាគឺឥតគិតថ្លៃ ១០០% ហើយនឹងតែងតែជាបែបនេះ។',
            freeWays: {
                title: 'វិធីឥតគិតថ្លៃក្នុងការជួយ',
                items: [
                    { icon: '📢', title: 'ចែករំលែកជាមួយអ្នកដទៃ', description: 'Tell a friend, share on social media.' },
                    { icon: '⭐', title: 'Star on GitHub', description: 'Help others find it.', button: 'Star on GitHub' },
                    { icon: '💡', title: 'ស្នើសុំគំនិត', description: 'Have an idea for a concept?' },
                ],
            },
            financial: {
                title: 'Buy Me a Coffee',
                description: 'Creating this site takes time. Support is optional.',
                buttonCoffee: 'Buy Me a Coffee',
                buttonKofi: 'Support on Ko-fi',
                note: 'Your support helps cover hosting costs.',
            },
            whatHelps: {
                title: 'ការគាំទ្ររបស់អ្នកជួយអ្វី',
                items: [
                    'Keeps the site running',
                    'Motivates me to create more',
                    'Improves explanations',
                    'Shows this work is valued',
                ],
            },
            thankYou: {
                title: 'សូមអរគុណ! 🙏',
                description: 'Every bit of help makes a difference.',
            },
        },

        // Suggest Page
        suggest: {
            title: 'ស្នើសុំគំនិត',
            subtitle: 'មានគំនិតអភិវឌ្ឍន៍គេហទំព័រដែលអ្នកចង់បានពន្យល់ដោយសាមញ្ញ?',
            form: {
                conceptName: { label: 'ឈ្មោះគំនិត', placeholder: 'ឧ. "Flexbox គឺជាអ្វី?"' },
                category: { label: 'ប្រភេទ', placeholder: 'ជ្រើសរើសប្រភេទ' },
                why: { label: 'ហេតុអ្វីបានជាគំនិតនេះច្របូកច្របល់?', placeholder: 'ប្រាប់ខ្ញុំថាអ្វីធ្វើឱ្យគំនិតនេះពិបាកយល់...' },
                email: { label: 'អ៊ីមែលរបស់អ្នក (ស្រេចចិត្ត)', placeholder: 'your@email.com' },
                submit: 'ដាក់ស្នើសុំ',
            },
            thankYou: {
                title: 'សូមអរគុណ!',
                description: 'ការស្នើសុំរបស់អ្នកត្រូវបានទទួល។',
            },
        },

        // 404 Page
        notFound: {
            title: '404 - រកមិនឃើញទំព័រ',
            description: 'អូ! ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមាន។',
            suggestion: 'ប្រហែលជាអ្នកចង់ស្វែងរកគំនិតរបស់យើង?',
            button: 'រកមើលគំនិតទាំងអស់',
            backHome: 'ត្រឡប់ទៅទំព័រដើម',
        },

        footer: {
            tagline: 'គំនិតអភិវឌ្ឍន៍គេហទំព័រពន្យល់តាមវិធីដែលអ្នកសង្ឃឹមថានរណាម្នាក់បានពន្យល់ដល់អ្នក។',
            learn: 'រៀន',
            about: 'អំពី',
            copyright: '© ២០២៥ សិក្សា។ បង្កើតដោយ ❤️ សម្រាប់អ្នករៀន។',
            social: {
                twitter: 'Twitter',
                github: 'GitHub',
            },
        },
    },
} as const;

// Helper function to get translation
export function getTranslation(lang: Language = 'en') {
    return translations[lang];
}

// Helper function to get current language from localStorage or default
export function getCurrentLanguage(): Language {
    if (typeof window === 'undefined') return 'en';
    return (localStorage.getItem('language') as Language) || 'en';
}

// Helper function to set language
export function setLanguage(lang: Language) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
    }
}
