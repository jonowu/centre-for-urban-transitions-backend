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
      name: 'hero',
      title: 'Hero',
      description:
        'Large image at the top of the page. To show no hero, ensure the image field is empty.',
      type: 'hero',
    },
    {
      name: 'content',
      title: 'Page Sections',
      type: 'content',
    },
  ],
};
