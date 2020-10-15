import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdDescription, MdLocalOffer } from 'react-icons/md'
import { GiMaterialsScience, GiPerson } from 'react-icons/gi'
import { IoMdPaper } from 'react-icons/io'
import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = 'https://sanity-math-example.netlify.com'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view.component(IframePreview).title('Web preview').options({ previewURL }),
    ])
  }
  return S.document().views([S.view.form()])
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Topic articles')
        .icon(GiMaterialsScience)
        .schemaType('article')
        .child(
          S.documentList('article')
            .title('Topic articles')
            .menuItems(S.documentTypeList('article').getMenuItems())
            .filter('_type == "article"')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('article')
                .views([
                  S.view.form(),
                  S.view.component(IframePreview).title('Web preview').options({ previewURL }),
                ])
            )
        ),
      S.listItem()
        .title('Solutions')
        .icon(IoMdPaper)
        .schemaType('solution')
        .child(S.documentTypeList('solution').title('Solutions')),
      S.listItem()
        .title('Authors')
        .icon(GiPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems()
    ])
