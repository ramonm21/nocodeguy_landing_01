export interface Author {
  name: string;
  avatar: string;
  x: string;
  bio?: string;
}

export interface ContentUpgrade {
  title: string;
  description: string;
  downloadLink: string;
}

export interface RelatedPost {
  title: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  thumbnail: string;
  author: Author;
  contentUpgrade?: ContentUpgrade;
  relatedPosts?: RelatedPost[];
  featured?: boolean;
  content: string;
}
