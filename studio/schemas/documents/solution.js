export default {
  type: 'document',
  name: 'solution',
  fields: [
    {
      type: 'string',
      name: 'title',
      description: 'Could be associated with a book/chapter/problem, a question etc.',
    },
    {
      name: 'guidance',
      title: 'General guidance',
      type: 'bodyPortableText',
    },
    {
      name: 'steps',
      type: 'array',
      of: [{ type: 'solutionStep' }],
    },
    {
      name: 'answer',
      type: 'bodyPortableText',
    },
  ],
}
