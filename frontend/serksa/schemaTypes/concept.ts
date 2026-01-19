import { defineField, defineType } from 'sanity'

export const concept = defineType({
  name: 'concept',
  title: 'Concept',
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
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'string',
      description: 'Used in cards and search results',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'API & Backend', value: 'API & Backend' },
          { title: 'Frontend Architecture', value: 'Frontend Architecture' },
          { title: 'Security', value: 'Security' },
          { title: 'Performance & Scaling', value: 'Performance & Scaling' },
          { title: 'DevOps & Infrastructure', value: 'DevOps & Infrastructure' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read time',
      type: 'string',
      description: 'e.g. "6 min"',
      validation: (Rule) => Rule.required(),
    }),

    // Body sections
    defineField({
      name: 'whatItIs',
      title: '1) What it is',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'analogy',
      title: '2) Analogy',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              name: 'analogyItem',
              title: 'Analogy item',
              type: 'object',
              fields: [
                defineField({ name: 'emoji', title: 'Emoji', type: 'string' }),
                defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
                defineField({ name: 'highlighted', title: 'Highlighted', type: 'boolean', initialValue: false }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'subtitle' },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'diagram',
      title: '3) Diagram (structured nodes)',
      type: 'array',
      of: [
        {
          name: 'diagramNode',
          title: 'Diagram node',
          type: 'object',
          fields: [
            defineField({ name: 'emoji', title: 'Emoji', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Accent', value: 'accent' },
                ],
              },
              initialValue: 'primary',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'subtitle' },
          },
        },
      ],
      description:
        'Optional: if you later switch to images, you can ignore this and use Diagram image field instead.',
    }),
    defineField({
      name: 'diagramImage',
      title: '3) Diagram image (optional)',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload a diagram image if you prefer over structured nodes.',
    }),

    defineField({
      name: 'howItWorks',
      title: '4) Where you see it (steps)',
      type: 'array',
      of: [
        {
          name: 'step',
          title: 'Step',
          type: 'object',
          fields: [
            defineField({ name: 'step', title: 'Step number', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'misunderstanding',
      title: '5) Common misunderstanding',
      type: 'object',
      fields: [
        defineField({ name: 'wrong', title: 'Wrong', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
        defineField({
          name: 'correct',
          title: 'Correct',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'realWorld',
      title: 'Real-world example',
      type: 'object',
      fields: [
        defineField({ name: 'appName', title: 'App name (optional)', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
        defineField({
          name: 'points',
          title: 'Points',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
})

