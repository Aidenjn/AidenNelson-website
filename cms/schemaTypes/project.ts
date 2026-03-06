import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),

    defineField({
      name: 'projectLink',
      title: 'Project Link (optional)',
      type: 'url',
      description: 'External link to the live project or repository',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }),
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'projectFeatures',
      title: 'Project Features',
      type: 'array',
      description: 'Features of the project to be noted in a list',
      of: [
        {
          type: 'object',
          name: 'projectFeature',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [
                {
                  type: 'block',
                  marks: {
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ]
        },
      ],
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Rich text sections, each optionally paired with an image',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [
                {
                  type: 'block',
                  marks: {
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'image',
              title: 'Image (optional)',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'imageCaption',
              title: 'Image Caption (optional)',
              type: 'string',
            },
          ],
          preview: {
            select: {
              text: 'text',
              image: 'image',
            },
            prepare({ text, image }) {
              const textPreview = text
                ?.map((block: { children: any[] }) => 
                  block.children?.map((child: { text: any }) => child.text).join('')
                )
                .join(' ')
                .slice(0, 50) || 'No text'
              return {
                title: textPreview + (textPreview.length > 50 ? '...' : ''),
                media: image,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'datetime',
      description: 'When this project was first published',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'dateLastUpdated',
      title: 'Date Last Updated',
      type: 'datetime',
      description: 'When this project was last modified',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
})
