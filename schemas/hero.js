export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'preHeading',
      type: 'string',
      title: 'Pre-Heading',
      description: 'An optional pre-heading that goes above the main heading.',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero section',
        media,
      };
    },
  },
};
