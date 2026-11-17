import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required().max(110) }),
    defineField({ name: "slug", title: "URL Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (Rule) => Rule.max(240) }),
    defineField({ name: "mainImage", title: "Featured Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alternative text", type: "string" }] }),
    defineField({ name: "imageAlt", title: "Featured image alternative text", type: "string" }),
    defineField({ name: "body", title: "Article Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "category", title: "Category", type: "reference", to: [{ type: "category" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "reference", to: [{ type: "tag" }] }] }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "featured", title: "Featured article", type: "boolean", initialValue: false }),
    defineField({ name: "publishedAt", title: "Publication date", type: "datetime" }),
    defineField({ name: "updatedAt", title: "Updated date", type: "datetime" }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", validation: (Rule) => Rule.max(60) }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 2, validation: (Rule) => Rule.max(160) }),
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url" }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "publishedAt" },
  },
});
