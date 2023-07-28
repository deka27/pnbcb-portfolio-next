import { PortableTextBlock } from "sanity"

export type Member = {
  _id: string,
  _createdAt: Date,
  name: string,
  department: string,
  image: string,
  content: PortableTextBlock[]
}
