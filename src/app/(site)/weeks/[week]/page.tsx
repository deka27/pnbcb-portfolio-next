import { getWeek } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { week: string };
};

export default async function Week({ params }: Props) {
  // Get the slug from the URL. This is the same as `params.project`.
  const slug = params.week;

  if (!slug) {
    // Handle the case when the slug is undefined or empty
    return <div>No Data Available</div>;
  }

  // Get the Week from Sanity.
  const week= await getWeek(slug); 


  return (
    <div>
     <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>
      <header className="mt-12 mr-5 ml-5 mb-5 flex items-center justify-between pb-5">
        <h1 className="ml-5 text-gray-600 text-5xl drop-shadow font-extrabold bg-transparent">
          {week.name}
        </h1>
        <a
          href={week.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 rounded-lg text-white font-bold py-3 px-4 whitespace-nowrap hover:bg-rose-300 hover:text-gray-600 transition"
        >
          View Drive
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-10 mx-10">
        <PortableText value={week.content} />
      </div>

      <div className="flex justify-center my-10">
      <Image
        src={week.image}
        alt={week.name}
        width={1000}
        height={750}
        className="mt-10 object-cover rounded-xl drop-shadow-lg"
      />
      </div>
    </div>
  );
}
