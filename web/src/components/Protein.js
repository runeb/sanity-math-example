import PropTypes from 'prop-types'
import React from 'react'
import {io, Viewer} from 'bio-pv'
import PDBS from './PDBS'

const VIEWER_OPTIONS = {
  width: 'auto',
  height: '500',
  antialias: true,
  fog: true,
  outline: true,
  quality: 'high',
  style: 'phong',
  selectionColor: 'white',
  transparency: 'screendoor',
  background: '#fff',
  animateTime: 500,
  doubleClick: null
}

const DEFAULT_PDB = PDBS[0].id

const getAttr = (value, propName) => value && value[propName]

export default class ProteinInput extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    const {value} = this.props
    this.viewer = new Viewer(this._viewerElement, VIEWER_OPTIONS)
    this.loadPdb((value && value.pdb) || DEFAULT_PDB)
  }

  componentWillUnmount() {
    this.viewer.destroy()
  }

  componentDidUpdate(prevProps) {
    const camera = getAttr(this.props.node, 'camera')

    const prevPdb = getAttr(prevProps.node, 'pdb')
    const pdb = getAttr(this.props.node, 'pdb')

    if (prevPdb !== pdb) {
      this.loadPdb(pdb)
      return
    }

    if (camera) {
      this.updateViewerCamera(camera)
    } else {
      this.resetViewerCamera()
    }
  }

  loadPdb(id) {
    this.setState({
      isLoading: true
    })
    this.viewer.clear()
    const url = `//files.rcsb.org/view/${id}.pdb`
    io.fetchPdb(url, structure => {
      const ligand = structure.select({rnames: ['SAH', 'RVP']})
      this.viewer.spheres('structure.ligand', ligand, {})
      this.viewer.cartoon('structure.protein', structure, {boundingSpheres: false})
      this.setState({
        isLoading: false
      })
    })
  }

  resetViewerCamera = () => {
    this.viewer.autoZoom()
  }

  handleSelectChange = item => {
    this.setPdb(item.id)
  }

  updateViewerCamera = camera => {
    this.viewer.setCamera(camera.rotation, camera.center, camera.zoom)
  }

  handlePdbStringChange = event => {
    const pdbId = event.target.value
    if (pdbId && pdbId.length === 4) {
      this.setPdb(pdbId)
    }
  }

  setPdb(pdbId) {
    const {onChange, type} = this.props
    onChange(PatchEvent.from([set({_type: type.name, pdb: pdbId})]))
  }

  getPdbById = id => {
    return PDBS.find(item => item.id === id)
  }

  setViewerElement = element => {
    this._viewerElement = element
  }

  render() {
    const {value, type, level} = this.props

    const pdbId = (value && value.pdb) || DEFAULT_PDB

    const {isLoading} = this.state

    return <div ref={this.setViewerElement} />
  }
}
