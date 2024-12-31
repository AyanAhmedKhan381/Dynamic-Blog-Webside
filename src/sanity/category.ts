// schemas/category.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'category', // Ensure the name is 'category'
    title: 'Category',
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
        type: 'text', // Allows a longer description
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block', // Rich text block type
            styles: [
              { title: 'Normal', value: 'normal' },
              { title: 'Heading 1', value: 'h1' },
              { title: 'Heading 2', value: 'h2' },
              { title: 'Heading 3', value: 'h3' },
              { title: 'Blockquote', value: 'blockquote' },
            ],
            lists: [
              { title: 'Bullet', value: 'bullet' },
              { title: 'Numbered', value: 'number' },
            ],
          },
        ],
        description: 'Detailed content of the category', // Description for the body field
      },
      {
        name: 'image', // Image field to store an image
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows for image cropping in Sanity Studio
        },
        description: 'Image representing the category',
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime', // Date and time of publication
      },
    ],
  };
  