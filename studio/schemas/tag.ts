import { defineField, defineType } from "sanity";

export default defineType({
  name: "tag",
  title: "Tags",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tag name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
  ],
});
