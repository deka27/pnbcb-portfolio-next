"use client";

import { getEvents } from "../../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Events() {

  const [events, setEvents] = useState<
    { slug: string; _id: string; image: string; name: string; date: string; }[]
  >([]);

  useEffect(() => {    

    async function fetchEvents() {
      const events = await getEvents();
      setEvents(events);
    }
    fetchEvents();
  }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div className="">
      <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col items-center justify-center my-10">
          <div>
            <h1 className="text-4xl font-bold text-center text-gray-800">
              Events
            </h1>
          </div>
          <div className="mt-10">
            <p className="text-xl text-center text-gray-800">
              "Elevate Your Experience: Unforgettable Events, Heartwarming
              Connections, and Memories That Will Stay With You Forever."
            </p>
          </div>
        </div>

        <div className="my-10">
          
          {/* events mapping */}
          <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentEvents.map((event) => (
              <Link
                href={`/events/${event.slug}`}
                key={event._id}
                className="border-2 border-gray-300 rounded-lg hover:scale-105 hover:border-blue-500 transition-all duration-300"
              >
                {event.image && (
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={750}
                    height={300}
                    className="rounded-t-lg object-cover"
                  />
                )}

                <div className="mt-4 mb-4 mr-4 text-right text-gray-700">
                  <div className="font-extrabold text-lg">{event.name}</div>
                  <div className="">{event.date}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* pagination button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 mr-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100"
            >
              Previous
            </button>
            {Array.from({
              length: Math.ceil(events.length / eventsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 mx-1 border border-gray-300 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(events.length / eventsPerPage))
                )
              }
              disabled={
                currentPage === Math.ceil(events.length / eventsPerPage)
              }
              className="px-4 py-2 ml-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
