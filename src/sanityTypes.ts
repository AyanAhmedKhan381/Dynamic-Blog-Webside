export type Author = {
  _id: string;
  name: string;
  description: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
};

export type Category = {
  _id: string;
  title: string;
  description: string;
  body: Array<any>;
  image: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
};

export type Blog = {
  _id: string;
  title: string;
  description: string;
  dynamicPageDescription: string;
  slug: {
    current: string;
  };
  author: Author;
  category: Category;
  publishedAt: string;
  image: {
    asset: {
      url: string;
    };
  };
  likes: number;
  reviews: number;
};
