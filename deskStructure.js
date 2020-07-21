import S from '@sanity/desk-tool/structure-builder';
import {
  FaEnvelope,
  FaFile,
  FaHome,
  FaInfo,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaRegNewspaper,
  FaUserGraduate,
} from 'react-icons/fa';

const hiddenTypes = ['homePage', 'aboutPage', 'contactPage'];

export default () =>
  S.list() // defines the first pane
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homePage').documentId('homePage'))
        .icon(FaHome),
      S.listItem()
        .title('About Us')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage'))
        .icon(FaInfo),
      S.listItem()
        .title('Our Research')
        .schemaType('researchPost')
        .child(S.documentTypeList('researchPost').title('Research posts'))
        .icon(FaPencilAlt),
      S.listItem().title('Transitions Resources').icon(FaRegNewspaper),
      S.listItem().title('PhD Life').icon(FaUserGraduate),
      S.listItem().title('Events').icon(FaRegCalendarAlt),
      S.listItem()
        .title('Contact Us')
        .child(S.document().schemaType('contactPage').documentId('contactPage'))
        .icon(FaEnvelope),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(
                  S.editor()
                    .id('homePage')
                    .schemaType('page')
                    .documentId('home')
                )
                .icon(FaFile),
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
