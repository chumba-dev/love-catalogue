import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Category name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Category image", type: "image", options: { hotspot: true } }),
  ],
});
