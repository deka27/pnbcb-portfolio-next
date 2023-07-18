import { getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-7xl font-extrabold">
        Hello I'm
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          &nbsp;Kaustav!
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">Checkout my projects</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {projects.map((project) => (

        <Link
        href={`/projects/${project.slug}`}
          key={project._id}
          className="border-2 border-gray-300 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="rounded-lg object-cover border border-gray-500"
            />
          )}
          <div className="mt-4 mb-4 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}

      </div>

    </div>
  );
}
