export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  title, description, logo, navigation, footerText, socialLinks
}`;

export const homePostsQuery = `*[_type == "post" && defined(publishedAt)]
  | order(publishedAt desc)[0...12]{
    _id, title, "slug": slug.current, excerpt, publishedAt,
    "category": category->{title, "slug": slug.current},
    "author": author->{name, "slug": slug.current},
    mainImage, featured
  }`;

export const featuredPostsQuery = `*[_type == "post" && featured == true && defined(publishedAt)]
  | order(publishedAt desc)[0...4]{
    _id, title, "slug": slug.current, excerpt, publishedAt, mainImage,
    "category": category->{title, "slug": slug.current}
  }`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug && defined(publishedAt)][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt, updatedAt,
  body, mainImage, imageAlt, seoTitle, seoDescription, canonicalUrl,
  "category": category->{title, "slug": slug.current},
  "author": author->{name, "slug": slug.current, bio, image},
  "tags": tags[]->{title, "slug": slug.current}
}`;

export const allPostSlugsQuery = `*[_type == "post" && defined(publishedAt)]{"slug": slug.current}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0]{
  title, description, "slug": slug.current,
  "posts": *[_type == "post" && references(^._id) && defined(publishedAt)]
    | order(publishedAt desc){
      _id, title, "slug": slug.current, excerpt, publishedAt, mainImage
    }
}`;

export const allCategoriesQuery = `*[_type == "category"] | order(title asc){
  _id, title, "slug": slug.current, description
}`;
