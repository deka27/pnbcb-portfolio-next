import { getWeeks } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function EventHome() {
  const weeks = await getWeeks();

  const latestweek = weeks[weeks.length - 1];

  return (
    <div className="relative w-full">
      <div
        className="absolute w-[350px] h-[870px] bg-gradient-to-r from-neutral-200 via-amber-300 to-rose-400 clip-path-polygon-side1 z-2"
        id="t1"
      ></div>
      <div
        className="relative w-full h-full bg-gradient-to-r from-neutral-200 via-amber-300 to-rose-300 clip-path-polygon-base py-64 mt-10 z-40"
        id="p1"
      >
        <div>
          <div className="text-center text-4xl md:text-5xl font-bold mb-10">
            Weely Service
          </div>
          <div className="text-center text-xl mx-10 mb-10">Experience transformative worship, powerful teaching, and a welcoming community. Join us on Sundays for our weekly service. Don't miss out!</div>
          <div className="flex flex-wrap justify-center">
            <Link
              href={`/weeks/${latestweek.slug}`}
              key={latestweek._id}
              className=" bg-white border border-gray-200 rounded-lg drop-shadow-md mx-10 min-w-[300px] hover:scale-105 transition duration-300"
            >
              {latestweek.image && (
                <Image
                  src={latestweek.image}
                  alt={latestweek.name}
                  width={750}
                  height={300}
                  className="rounded-t-lg"
                />
              )}
              <div className="p-5 text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {latestweek.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {latestweek.date}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[870px] bg-gradient-to-l from-neutral-200 via-amber-300 to-rose-400 clip-path-polygon-side2 z-1"
        id="t2"
      ></div>
    </div>
  );
}
