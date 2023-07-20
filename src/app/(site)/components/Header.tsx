"use client";

import Link from "next/link";
import logo from "../../../../public/assets/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { getPages } from "@/sanity/sanity-utils";
import { AiFillCloseSquare } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [pages, setPages] = useState<
    { title: string; slug: string; _id: string }[]
  >([]);

  useEffect(() => {
    async function fetchPages() {
      const pages = await getPages();
      setPages(pages);
    }
    fetchPages();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-transparent p-5 fixed top-0 left-0 w-full flex justify-between items-center z-50">
      <header className="flex items-center font-sans">
        <Image
          src={logo}
          alt="pnbcb logo"
          className="relative h-11 w-11 self-center mr-2 drop-shadow-xl"
        />
        <Link
          href="/"
          className="text-3xl font-bold inline-block align-middle text-white sm:text-4xl"
        >
          <h1 className="drop-shadow-xl">pnbcb</h1>
        </Link>
      </header>

      <div>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="sm:mb-0 text-2xl mr-2 py-2 px-3 bg-white text-black rounded-lg hover:bg-black hover:text-white transition drop-shadow-lg"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 max-h-fit min-w-full flex bg-gray-800 text-white drop-shadow-xl transition ease-in-out delay-300 text-xl py-4 z-10">

          <div className="flex flex-col gap-3 mx-6 my-20 bg-gray-800 relative z-20">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} onClick={toggleMenuClose}>
                <div className="hover:scale-110 transition duration-300">
                  {page.title}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex absolute top-0 text-xl bg-gray-800 w-screen text-white p-1 justify-end ">
            <button
              onClick={toggleMenuClose}
              className="drop-shadow-lg hover:scale-110 transition duration-300 p-3"
            >
              Close
            </button>
          </div>

        </div>
      )}

      {isOpen && (
        <div className="absolute top-0 left-0 max-h-fit min-w-full flex bg-amber-300 transition ease-in-out delay-300 text-xl py-4 z-0 mt-2">
          <div className="flex flex-col gap-3 mx-6 my-20 bg-gray-800 relative z-20 invisible">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                <div className="hover:scale-110 transition duration-300">
                  {page.title}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex absolute top-0 text-xl bg-white w-screen text-white p-1 justify-end invisible">
            <button
              onClick={toggleMenuClose}
              className="drop-shadow-lg hover:scale-110 transition duration-300 text-gray-800 p-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="relative right-6 sm:right-32 top-[320px] z-20">
        <div className=" clip-path-polygon-cross bg-gradient-to-bl from-amber-300 to-rose-300 w-[90px] sm:w-[110px] h-[120px] sm:h-[130px] drop-shadow-2xl"></div>
        </div>
      )}

    </div>
  );
}
