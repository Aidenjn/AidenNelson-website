import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'serving',
      title: 'Servings',
      type: 'number',
      description: 'How many people the meal serves',
      validation: (Rule) => Rule.required().positive().integer(),
    }),

    defineField({
      name: 'prepTime',
      title: 'Prep Time (minutes)',
      type: 'number',
      description: 'Time to prepare the recipe',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'cookTime',
      title: 'Cook Time (minutes)',
      type: 'number',
      description: 'Time to cook the recipe',
      validation: (Rule) => Rule.min(0).integer(),
    }),

    defineField({
      name: 'source',
      title: 'Recipe Source Link (optional)',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }),
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'recipeTag' }] }],
    }),

    defineField({
      name: 'dateLastUpdated',
      title: 'Date Last Updated',
      type: 'datetime',
      description: 'The date this recipe was last updated',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'specialEquipment',
      title: 'Special Equipment (optional)',
      description: 'Special equipment required for recipe preparation',
      type: 'array',
      of: [{ type: 'string'}],
    }),

    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ingredient',
          fields: [
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule) => Rule.required().positive(),
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'string',
              options: {
                list: [
                  { title: 'Cup', value: 'cup' },
                  { title: 'Ounce (oz)', value: 'oz' },
                  { title: 'Tablespoon (Tbsp)', value: 'Tbsp' },
                  { title: 'Teaspoon (tsp)', value: 'tsp' },
                  { title: 'Milliliter (ml)', value: 'ml' },
                  { title: 'Can', value: 'can' },
                  { title: 'Bushel', value: 'bushel' },
                  { title: 'Stick', value: 'stick' },
                ],
                layout: 'dropdown',
              },
            },
            {
              name: 'ingredient',
              title: 'Ingredient',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              quantity: 'quantity',
              unit: 'unit',
              name: 'ingredient',

            },
            prepare({ name, quantity, unit }) {
              const unitDisplay = unit ? ` ${unit}` : ''
              return {
                title: `${quantity}${unitDisplay} ${name}`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'steps',
      title: 'Preparation Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          fields: [
            {
              name: 'instruction',
              title: 'Instruction',
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
                        fields: [{ name: 'href', type: 'url', title: 'URL' }],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'note',
              title: 'Note (optional)',
              description: 'A helpful tip or note for this step',
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
                        fields: [{ name: 'href', type: 'url', title: 'URL' }],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'image',
              title: 'Step Image (optional)',
              type: 'image',
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              instruction: 'instruction',
            },
            prepare({ instruction }) {
              const text = instruction
                ?.map((block: { children: any[] }) => block.children?.map((child: { text: any }) => child.text).join(''))
                .join(' ')
                .slice(0, 50) || 'No instruction'
              return {
                title: text + (text.length > 50 ? '...' : ''),
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
})
