// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import researchPost from './research-post';
import author from './author';
import homePage from './homePage';
import aboutPage from './aboutPage';
import contactPage from './contactPage';
import hero from './hero';
import textSection from './textSection';
import downloadSection from './downloadSection';
import textImageSection from './textImageSection';
import page from './page';
import event from './event';
import blogPost from './blog-post';
import resourcePost from './resource-post';
import content from './content';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    researchPost,
    author,
    category,
    homePage,
    aboutPage,
    contactPage,
    hero,
    textSection,
    textImageSection,
    page,
    event,
    blogPost,
    resourcePost,
    downloadSection,
    content,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
