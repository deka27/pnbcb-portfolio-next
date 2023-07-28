"use client";

import curve from "../../../../public/assets/curve.svg";

import { getWeeks } from "../../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Weeks() {
  const [weeks, setWeeks] = useState<
    { slug: string; _id: string; image: string; name: string; date: string }[]
  >([]);

  useEffect(() => {
    async function fetchWeeks() {
      const weeks = await getWeeks();
      setWeeks(weeks);
    }
    fetchWeeks();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const weeksPerPage = 6;

  const indexOfLastWeek = currentPage * weeksPerPage;
  const indexOfFirstWeek = indexOfLastWeek - weeksPerPage;
  const currentWeeks = weeks.slice(indexOfFirstWeek, indexOfLastWeek);

  return (
    <div className="">
      <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col items-center justify-center my-10">
          <div>
            <h1 className="text-4xl font-bold text-center text-gray-800">
              Weeklys
            </h1>
            <div className="flex justify-center items-center mt-8">
              <Image
                src={curve}
                alt="curve"
                width={100}
                height={100}
              ></Image>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xl text-center text-gray-800">
            &quot;Discover Spiritual Renewal and Heartfelt Connections: Elevate
              Your Faith at Our Transformative Weekly Service.&quot;
            </p>
          </div>
        </div>

        <div className="my-10">
          {/* Weekly mapping */}
          <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-2">
            {currentWeeks.map((week) => (
              <Link
                href={`/weeks/${week.slug}`}
                key={week._id}
                className="border-2 border-gray-300 rounded-lg hover:scale-105 hover:border-blue-500 transition-all duration-300"
              >
                {week.image && (
                  <Image
                    src={week.image}
                    alt={week.name}
                    width={750}
                    height={300}
                    className="rounded-t-lg object-cover"
                  />
                )}

                <div className="mt-4 mb-4 mr-4 text-right text-gray-700">
                  <div className="font-extrabold text-lg">{week.name}</div>
                  <div className="">{week.date}</div>
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
              length: Math.ceil(weeks.length / weeksPerPage),
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
                  Math.min(prev + 1, Math.ceil(weeks.length / weeksPerPage))
                )
              }
              disabled={currentPage === Math.ceil(weeks.length / weeksPerPage)}
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
