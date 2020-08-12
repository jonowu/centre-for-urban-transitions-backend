export default {
  type: 'object',
  name: 'headingSection',
  title: 'Heading',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'headingAlignment',
      type: 'string',
      title: 'Heading alignment',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
      },
    },
    {
      name: 'headingSize',
      type: 'string',
      title: 'Heading Size',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra large', value: 'xl' },
        ],
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
        subtitle: 'Heading',
      };
    },
  },
};
