import { getEvents } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function EventHome() {
  
  const events = await getEvents();

  const latestevents = events.slice(-4);

  return (
    <div className="flex flex-col md:flex-row my-28">
      <div className=" bg-transparent w-1/3">
        <div className="ml-20 sm:ml-28 mx-auto mt-20 text-center text-4xl md:text-5xl font-bold md:text-left ">Latest <br/>Events</div>
      </div>
      <div className="mt-16 overflow-x-scroll p-5 ml-5 ">
        <div className="whitespace-nowrap flex gap-5  mb-5">

          {latestevents.map((event) => (
            <Link
              href={`/events/${event.slug}`}
              key={event._id}
              className=" bg-white border border-gray-200 rounded-lg drop-shadow-md min-w-[300px] hover:scale-105 transition duration-300"
            >
              {event.image && (
                <Image
                  src={event.image}
                  alt={event.name}
                  width={400}
                  height={400}
                  className="rounded-t-lg"
                />
              )}
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {event.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {event.date}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}
