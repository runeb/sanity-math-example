import ProteinInput from '../components/input/ProteinInput'
import { GiMolecule } from 'react-icons/gi'

const camera = {
  name: 'camera',
  title: 'camera',
  type: 'object',
  fields: [
    {
      name: 'rotation',
      type: 'array',
      of: [{ type: 'number' }],
    },
    {
      name: 'center',
      type: 'array',
      of: [{ type: 'number' }],
    },
    {
      name: 'zoom',
      type: 'number',
    },
  ],
}

const protein = {
  name: 'protein',
  title: 'Protein Data Bank',
  icon: GiMolecule,
  type: 'object',
  inputComponent: ProteinInput,
  fields: [
    {
      name: 'pdb',
      title: 'PDB',
      type: 'string',
    },
    {
      type: 'camera',
      name: 'camera',
    },
  ],
  preview: {
    select: { pdb: 'pdb' },
    prepare({ pdb }) {
      let title = 'Protein Data Bank'
      return {
        title: pdb ? title + ': ' + pdb : title,
      }
    },
  },
}

export { camera, protein }
