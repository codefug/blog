export type FrontMatter = {
  title: string;
  excerpt: string;
  categories: string[];
  date: string;
  header: {
    teaser: string;
  };
};

export type ParsedFrontMatter = {
  title: string;
  excerpt: string;
  categories: string[];
  date: Date;
  header: {
    teaser: string;
  };
};
