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
      description: 'This description will appear on the "PhD Life" page.',
      type: 'text',
      rows: '3',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    /*
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    */
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    /*
    {
      name: 'hero',
      title: 'Hero',
      description: 'Optional.',
      type: 'hero',
    },
    */
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
