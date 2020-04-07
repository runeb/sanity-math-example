export default {
  type: 'document',
  name: 'article',
  title: 'Topic article',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // // will be ignored if slugify is set
      },
    },
    {
      type: 'mainImage',
      name: 'image',
    },
    {
      type: 'string',
      name: 'pronounciation',
    },
    {
      type: 'text',
      name: 'definition',
      rows: 5,
    },
    {
      name: 'body',
      type: 'bodyPortableText',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      weak: false,
      to: [{ type: 'author' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
