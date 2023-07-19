import clientConfig from "./config/client-config";
import { createClient, groq } from "next-sanity";


import { Page } from "../types/Page";
import { Event } from "../types/Event";
import {Verse} from "../types/Verse"
import {Member} from "../types/Member"
import { Gallery } from "../types/Gallery";


//Events

export async function getEvents(): Promise<Event[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event"]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         url,
         content
       }`
  );
}

export async function getEvent(slug: string): Promise<Event> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event" && slug.current == $slug][0]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         url,
         content
       }`,
    { slug }
  );
}

//page

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
         _id,
         _createdAt,
         title,
         "slug": slug.current
       }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
         _id,
         _createdAt,
         title,
         "slug": slug.current,
         content
       }`,
    { slug }
  );
}

//verse

export async function getVerses(): Promise<Verse[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "verse"]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         content
       }`
  );
}

//gallery

export async function getGallery(): Promise<Event[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event"]{
         _id,
         _createdAt,
         title,
         "slug": slug.current,
         "image": image.asset->url,
       }`
  );
}

//members

export async function getMembers(): Promise<Event[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event"]{
         _id,
         _createdAt,
         name,
         position,
         "slug": slug.current,
         "image": image.asset->url,
         content
       }`
  );
}
