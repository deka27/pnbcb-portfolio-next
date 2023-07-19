import { PortableTextBlock } from "sanity";

export type Week = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  date: string;
  url: string;
  content: PortableTextBlock[];
}