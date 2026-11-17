import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site title", type: "string", initialValue: "Love Catalogue" }),
    defineField({ name: "description", title: "Site description", type: "text" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "navigation", title: "Navigation links", type: "array", of: [{ type: "object", fields: [
      { name: "label", title: "Label", type: "string" },
      { name: "url", title: "URL", type: "string" }
    ] }] }),
    defineField({ name: "footerText", title: "Footer text", type: "text" }),
    defineField({ name: "socialLinks", title: "Social links", type: "array", of: [{ type: "object", fields: [
      { name: "platform", title: "Platform", type: "string" },
      { name: "url", title: "URL", type: "url" }
    ] }] }),
  ],
});
