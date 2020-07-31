export default {
  name: 'blogPost',
  title: 'Phd Life Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'This description will appear on the "PhD Life" page.',
      type: 'text',
      rows: '3',
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
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
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
