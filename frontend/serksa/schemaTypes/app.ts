import {defineField, defineType} from 'sanity'

export const app = defineType({
  name: 'app',
  title: 'App',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required().max(180),
    }),
  ],
  preview: {
    select: {title: 'name', media: 'logo'},
  },
})

