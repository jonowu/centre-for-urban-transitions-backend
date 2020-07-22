export default {
  type: 'object',
  name: 'textImageSection',
  title: 'Text with Image',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Pre-Heading',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'blockContent',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      type: 'string',
      description: 'Optional',
      title: 'URL to link to',
    },
    {
      name: 'mediaPosition',
      type: 'string',
      title: 'Image position',
      options: {
        list: ['left', 'right'],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text and Image section',
      };
    },
  },
};
