export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [{ type: 'hero' }, { type: 'textSection' }],
    },
  ],
};
