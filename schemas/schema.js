// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import author from './author';
import blockContent from './blockContent';
import blogPost from './blog-post';
import category from './category';
import content from './content';
import downloadSection from './downloadSection';
import event from './event';
import headingSection from './headingSection';
import hero from './hero';
import page from './page';
import researchPost from './research-post';
import resourcePost from './resource-post';
import textImageSection from './textImageSection';
import textSection from './textSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    author,
    blockContent,
    blogPost,
    category,
    content,
    downloadSection,
    event,
    headingSection,
    hero,
    page,
    researchPost,
    resourcePost,
    textImageSection,
    textSection,
  ]),
});
