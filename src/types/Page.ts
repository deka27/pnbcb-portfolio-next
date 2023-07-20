import { PortableTextBlock } from "sanity"

export type Page = {
  _id: string,
  _createdAt: Date,
  title: string,
  slug: string,
  image: string,
  content: PortableTextBlock[]
};