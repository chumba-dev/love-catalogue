import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "./sanity";

const builder = sanity ? imageUrlBuilder(sanity) : null;

export function imageUrl(source: unknown, width = 900) {
  if (!builder || !source) return "";
  return builder.image(source as Parameters<typeof builder.image>[0])
    .width(width)
    .auto("format")
    .fit("max")
    .url();
}
