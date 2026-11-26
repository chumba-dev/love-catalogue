export const homePostsQuery = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...12]{
  _id, title, "slug": slug.current, excerpt, publishedAt, mainImage, featured,
  "category": category->{title, "slug": slug.current},
  "author": author->{name, "slug": slug.current}
}`;

export const featuredPostsQuery = `*[_type == "post" && featured == true && defined(publishedAt)] | order(publishedAt desc)[0...4]{
  _id, title, "slug": slug.current, excerpt, publishedAt, mainImage,
  "category": category->{title, "slug": slug.current}
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug && defined(publishedAt)][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt, updatedAt,
  body, mainImage, imageAlt, seoTitle, seoDescription, canonicalUrl,
  "category": category->{_id, title, "slug": slug.current},
  "author": author->{name, "slug": slug.current, bio, image},
  "tags": tags[]->{title, "slug": slug.current}
}`;

export const relatedPostsQuery = `*[
  _type == "post" &&
  defined(publishedAt) &&
  _id != $currentId &&
  references($categoryId)
] | order(publishedAt desc)[0...3]{
  _id, title, "slug": slug.current, excerpt, mainImage,
  "category": category->{title, "slug": slug.current}
}`;

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, body, seoTitle, seoDescription
}`;

export const allPostSlugsQuery = `*[_type == "post" && defined(publishedAt)]{"slug": slug.current}`;
export const allPageSlugsQuery = `*[_type == "page" && defined(slug.current)]{"slug": slug.current}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0]{
  title, description, "slug": slug.current,
  "posts": *[_type == "post" && references(^._id) && defined(publishedAt)] | order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, publishedAt, mainImage,
    "category": category->{title, "slug": slug.current}
  }
}`;

export const allCategoriesQuery = `*[_type == "category"] | order(title asc){
  _id, title, "slug": slug.current, description
}`;

export const authorBySlugQuery = `*[_type == "author" && slug.current == $slug][0]{
  name, bio, image, "slug": slug.current,
  "posts": *[_type == "post" && references(^._id) && defined(publishedAt)] | order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, publishedAt, mainImage,
    "category": category->{title, "slug": slug.current}
  }
}`;

export const tagBySlugQuery = `*[_type == "tag" && slug.current == $slug][0]{
  title, "slug": slug.current,
  "posts": *[_type == "post" && references(^._id) && defined(publishedAt)] | order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, publishedAt, mainImage,
    "category": category->{title, "slug": slug.current}
  }
}`;

export const searchIndexQuery = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc){
  title, "slug": slug.current, excerpt, publishedAt, "category": category->{title}
}`;
