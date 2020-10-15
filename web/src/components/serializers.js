import React from 'react'
import Figure from './Figure'
import Latex from './Latex'
import Protein from './Protein'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    latex: props => <Latex {...props} />,
    protein: props => <Protein node={props.node} />
  }
}

export default serializers
