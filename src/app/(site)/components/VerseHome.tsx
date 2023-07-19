import { PortableText } from "@portabletext/react";
import { getVerses } from "@/sanity/sanity-utils";


export default async function VerseHome() {

     const verses = await getVerses();
     
  return (
    <div className="flex flex-col">
    <div className="text-4xl mx-auto mt-16 font-bold">Versology</div>
    <div>
      {verses.map((verse) => (
        <div key={verse._id}>
          <div className="text-2xl mt-10 mx-auto text-center w-1/2">
            <PortableText value={verse.content} />
          </div>
          <div className="text-xl mt-10 mb-16 text-center">
            {verse.name}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
