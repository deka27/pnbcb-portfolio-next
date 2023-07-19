import { PortableTextBlock } from "sanity"

export type Verse = {
  _id: string,
  _createdAt: Date,
  name: string,
  slug: string,
  content: PortableTextBlock[]
};
