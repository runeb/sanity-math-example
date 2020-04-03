export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e875f581067ceebb0018f4f',
                  title: 'Sanity Studio',
                  name: 'sanity-math-example-studio',
                  apiId: '36f7a347-30c7-4915-b7e1-47296fddac11'
                },
                {
                  buildHookId: '5e875f588cc5d3095e06f4b6',
                  title: 'Blog Website',
                  name: 'sanity-math-example',
                  apiId: 'd219a101-8d05-4249-a5df-e54d19d7dbf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-math-example',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-math-example.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
