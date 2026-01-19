import { defineField, defineType } from 'sanity'

export const learningPath = defineType({
  name: 'learningPath',
  title: 'Learning Path',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'app',
      title: 'App',
      type: 'reference',
      to: [{ type: 'app' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stages',
      title: 'Stages',
      type: 'array',
      of: [
        {
          name: 'learningPathStage',
          title: 'Stage',
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'number', validation: (Rule) => Rule.required() }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'flowExplanation', title: 'Flow explanation', type: 'text', rows: 3 }),
            defineField({
              name: 'concepts',
              title: 'Concepts in this stage',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'concept' }] }],
            }),
            defineField({
              name: 'diagram',
              title: 'Architecture Diagram (Optional Override)',
              type: 'image',
              options: { hotspot: true },
              description: 'Upload a custom architecture diagram image for this stage. If left empty, it will fallback to the default hardcoded visualization.',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'subtitle' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'app.name' },
  },
})

