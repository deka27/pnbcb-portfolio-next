import { PortableTextBlock } from "sanity";

export type Event = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  date: string;
  url: string;
  content: PortableTextBlock[];
}