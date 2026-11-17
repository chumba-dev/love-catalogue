import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL Slug", type: "slug", options: { source: "name" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "image", title: "Profile image", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Biography", type: "text", rows: 4 }),
  ],
});
