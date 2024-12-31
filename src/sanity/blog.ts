// schemas/blog.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'blog', // Unique document name for "blog"
    title: 'Blog',
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
        type: 'string',
      },
      {
        name: 'Description',
        title: 'Dynamic-Page-Description',
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
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }], // Correct reference to the 'author' document
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }], // Correct reference to the 'category' document
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
      {
        name: 'image',
        title: ' Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'image2',
        title: 'Second Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  