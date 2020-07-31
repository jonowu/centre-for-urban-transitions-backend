export default {
  type: 'object',
  name: 'textImageSection',
  title: 'Text with Image',
  validation: (Rule) =>
    Rule.custom(
      (fields = {}) =>
        !fields.page || !fields.link || 'Only one link type is allowed'
    ),
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
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
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'External link',
      name: 'link',
      type: 'url',
      fieldset: 'link',
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
