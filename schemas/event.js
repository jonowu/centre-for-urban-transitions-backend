export default {
  name: 'event',
  title: 'Event',
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
      name: 'dateTime',
      title: 'Date / Time',
      type: 'datetime',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
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
