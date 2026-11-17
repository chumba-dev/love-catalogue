import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "body", title: "Page content", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text" }),
  ],
});
