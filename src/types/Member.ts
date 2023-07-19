import { PortableTextBlock } from "sanity"

export type Member = {
  _id: string,
  _createdAt: Date,
  name: string,
  position: string,
  slug: string,
  image: string,
  content: PortableTextBlock[]
}
