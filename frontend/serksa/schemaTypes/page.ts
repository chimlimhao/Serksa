import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            description: 'Used for search engines and social media',
        }),
        defineField({
            name: 'blocks',
            title: 'Page Sections',
            description: 'Add and reorder sections to build your page. Every detail can be managed here.',
            type: 'array',
            of: [
                // Hero Section
                {
                    name: 'hero',
                    title: 'Hero Section',
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'subtitle', type: 'text', title: 'Highlight/Quote Text' }),
                        defineField({ name: 'badge', type: 'string', title: 'Top Badge Text' }),
                    ]
                },
                // Rich Text Section
                {
                    name: 'contentSection',
                    title: 'Rich Text Section',
                    type: 'object',
                    fields: [
                        defineField({ name: 'heading', type: 'string' }),
                        defineField({
                            name: 'body',
                            type: 'array',
                            of: [{ type: 'block' }, { type: 'image' }]
                        }),
                    ]
                },
                // Features/Grid Section (For Philosophy, Support items, etc.)
                {
                    name: 'gridSection',
                    title: 'Grid/List Section',
                    type: 'object',
                    fields: [
                        defineField({ name: 'heading', type: 'string' }),
                        defineField({
                            name: 'items',
                            type: 'array',
                            of: [{
                                type: 'object',
                                fields: [
                                    defineField({ name: 'icon', type: 'string', title: 'Emoji or Icon Name' }),
                                    defineField({ name: 'title', type: 'string' }),
                                    defineField({ name: 'description', type: 'text' }),
                                    defineField({ name: 'buttonText', type: 'string' }),
                                    defineField({ name: 'buttonLink', type: 'string' }),
                                    defineField({ name: 'variant', type: 'string', options: { list: ['normal', 'highlight', 'danger', 'success'] } }),
                                ]
                            }]
                        })
                    ]
                },
                // Info List (For "What This Is NOT")
                {
                    name: 'infoList',
                    title: 'Information List',
                    type: 'object',
                    fields: [
                        defineField({ name: 'heading', type: 'string' }),
                        defineField({
                            name: 'items',
                            type: 'array',
                            of: [{
                                type: 'object',
                                fields: [
                                    defineField({ name: 'text', type: 'string' }),
                                    defineField({ name: 'isPositive', type: 'boolean', title: 'Is this a positive/check item?' }),
                                ]
                            }]
                        })
                    ]
                }
            ]
        }),
    ],
})
