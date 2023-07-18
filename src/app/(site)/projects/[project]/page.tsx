import { getProject } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  // Get the slug from the URL. This is the same as `params.project`.
  const slug = params.project;

  if (!slug) {
    // Handle the case when the slug is undefined or empty
    return <div>No Data Available</div>;
  }

  // Get the project from Sanity.
  const project = await getProject(slug); 


  return (
    <div>
      <header className="mt-10 mr-5 ml-5 mb-5 flex items-center justify-between pb-5">
        <h1 className="ml-5 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold bg-transparent">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-11 mx-10">
        <PortableText value={project.content} />
      </div>

      <div className="flex justify-center mt-8">
      <Image
        src={project.image}
        alt={project.name}
        width={1000}
        height={750}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
      </div>
    </div>
  );
}
