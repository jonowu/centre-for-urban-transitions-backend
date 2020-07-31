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
        .title('Research')
        .schemaType('researchPost')
        .child(S.documentTypeList('researchPost').title('Research posts'))
        .icon(FaPencilAlt),
      S.listItem().title('Transitions Resources').icon(FaRegNewspaper),
      S.listItem().title('PhD Life').icon(FaUserGraduate),
      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events'))
        .icon(FaRegCalendarAlt),
      S.listItem()
        .title('Single Pages')
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
                .icon(FaHome),
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaInfo),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaEnvelope),
              S.listItem()
                .title('Our Research')
                .child(
                  S.editor()
                    .id('researchPage')
                    .schemaType('page')
                    .documentId('research')
                )
                .icon(FaPencilAlt),
              S.listItem()
                .title('Phd Life')
                .child(
                  S.editor()
                    .id('phdLifePage')
                    .schemaType('page')
                    .documentId('phdLife')
                )
                .icon(FaUserGraduate),
              S.listItem()
                .title('Events')
                .child(
                  S.editor()
                    .id('eventsPage')
                    .schemaType('page')
                    .documentId('events')
                )
                .icon(FaRegCalendarAlt),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
