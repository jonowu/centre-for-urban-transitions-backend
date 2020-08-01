export default {
  type: 'object',
  name: 'downloadSection',
  title: 'Download section',
  fields: [
    {
      name: 'preHeading',
      type: 'string',
      title: 'Pre-Heading',
      description: 'Optional.',
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
      name: 'textAlignment',
      type: 'string',
      title: 'Text alignment',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
      },
    },
    {
      name: 'files',
      type: 'array',
      title: 'Files',
      of: [
        {
          type: 'file',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Download section',
      };
    },
  },
};
