export default {
  name: 'researchPost',
  title: 'Research Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      description: 'This description will appear on the "Our Research" page.',
      type: 'text',
      rows: '3',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      description: 'This thumbnail will appear on the "Our Research" page.',
      type: 'image',
      options: {
        hotspot: true,
      },
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
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
};
