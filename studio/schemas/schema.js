// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
// import math from './math'
import article from './documents/article'

import solutionStep from './objects/solutionStep.js'
import solution from './documents/solution'


const learningTopic = {
  type: 'document',
  name: 'learningTopic',
  fields: [
    {
      title: 'title',
      name: 'name',
      type: 'string',
    }
  ]
}

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    learningTopic,
    solution,
    solutionStep,
    // math,
    article,
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    /*
    post,
    category,
    */
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
