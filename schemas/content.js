export default {
  name: 'content',
  type: 'array',
  title: 'Page sections',
  of: [
    { type: 'textSection' },
    { type: 'textImageSection' },
    { type: 'downloadSection' },
    { type: 'headingSection' },
  ],
};
