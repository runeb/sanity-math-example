export default {
  type: 'object',
  name: 'solutionStep',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      name: 'body',
      type: 'bodyPortableText'
    },
    {
      name: 'explanation',
      type: 'bodyPortableText'
    },
    {
      name: 'commonMistakes',
      title: 'Common mistakes',
      type: 'bodyPortableText'
    },
    {
      name: 'hints',
      title: 'Hints for next steps',
      type: 'bodyPortableText'
    }
  ]
}
