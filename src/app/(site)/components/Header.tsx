"use client";

import Link from "next/link";
import logo from "../../../../public/assets/logo.png";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { getPages } from "@/sanity/sanity-utils";
import {LiaHandPointRight} from 'react-icons/lia';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [pages, setPages] = useState<
    { title: string; slug: string; _id: string }[]
  >([]);

  const [hide, setHide] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      setHide(window.scrollY > 0);
    };

    localStorage.setItem('hideOnScroll', hide ? 'true' : 'false');

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    async function fetchPages() {
      const pages = await getPages();
      setPages(pages);
    }
    fetchPages();
  }, []);

  useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);




  return (
    <div className="bg-transparent p-5 fixed top-0 left-0 w-full flex justify-between items-center z-50">

      {/* Logo & Name */}
      <header className="flex items-center font-sans">
        <Link href="/">
        <Image
          src={logo}
          alt="pnbcb logo"
          className="relative h-11 w-11 self-center mr-2 drop-shadow-xl"
        />
        </Link>
        <Link
          href="/"
          className="text-3xl font-bold inline-block align-middle text-white sm:text-4xl"
        >
          <h1 className="drop-shadow-xl">pnbcb</h1>
        </Link>
      </header>

      {/* Navbar fixed links */}
      <div className={`hidden lg:flex md:text-2xl lg:text-3xl font-semibold transition-all ${hide ? '-translate-y-[200%]' : 'translate-y-0'}`}>
        <ul className="flex flex-row gap-6 mx-6  bg-transparent text-white drop-shadow relative z-0 ">
          <li className="hover:scale-110 transition duration-300">
            <Link href="/article/about" className="drop-shadow-2xl">About</Link>
          </li>
          <li className="hover:scale-110 transition duration-300">
            <Link href="/article/our-mission" className="drop-shadow-2xl">Mission</Link>
          </li>
          <li className="hover:scale-110 transition duration-300">
            <Link href="/department" className="drop-shadow-2xl">Dept.</Link>
          </li>
          <li className="hover:scale-110 transition duration-300">
            <Link href="/events" className="drop-shadow-2xl">Events</Link>
          </li>
          <li className="hover:scale-110 transition duration-300 ">
            <Link href="/weeks" className="drop-shadow-2xl">Weekly</Link>
          </li>
          
          <li className="hover:scale-110 transition duration-300">
            <Link href="/connect" className="drop-shadow-2xl">Connect</Link>
          </li>

        </ul>
      </div>
      
      {/* Menu Icon */}
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

      {/* Menu section */}
      {isOpen && (
        <div className="absolute top-0 left-0 max-h-fit min-w-full flex bg-gray-800 text-white drop-shadow-xl transition ease-in-out delay-300 text-xl py-2 z-10 border-b-[10px] border-amber-300" ref={menuRef}>
          <div className=" mx-6 my-20 bg-gray-800 relative z-20 flex flex-col gap-5 flex-wrap h-[280px] ">            
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/article/${page.slug}`}
                onClick={toggleMenu}
              >
                <div className="hover:scale-110 transition duration-300 flex items-center"><LiaHandPointRight/>&nbsp;{page.title}</div>
              </Link>
            ))}
            <div><Link href="/events" onClick={toggleMenu} className="hover:scale-110 transition duration-300 flex items-center"><LiaHandPointRight/>&nbsp;Events</Link></div>
            <div><Link href="/weeks" onClick={toggleMenu} className="hover:scale-110 transition duration-300 flex items-center"><LiaHandPointRight/>&nbsp;Weekly</Link></div>
            <div><Link href="/connect" onClick={toggleMenu} className="hover:scale-110 transition duration-300 flex items-center"><LiaHandPointRight/>&nbsp;Connect</Link></div>
            <div><Link href="/members" onClick={toggleMenu} className="hover:scale-110 transition duration-300 flex items-center"><LiaHandPointRight/>&nbsp;Departments</Link></div>
            <div><Link href="/eventcal" onClick={toggleMenu} className="hover:scale-110 transition duration-300 flex items-center"><LiaHandPointRight/>&nbsp;Calendar</Link></div>
          </div>

          <div className="flex absolute top-0 text-xl bg-gray-800 w-screen text-white p-1 justify-end ">
            <button
              onClick={toggleMenu}
              className="drop-shadow-lg hover:scale-110 transition duration-300 p-3"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* cross sign */}
      {isOpen && (
        <div className="relative right-6 sm:right-32 top-[360px] z-20">
          <div className=" clip-path-polygon-cross bg-gradient-to-bl from-amber-300 to-rose-300 w-[90px] sm:w-[110px] h-[120px] sm:h-[130px] drop-shadow-2xl"></div>
        </div>
      )}

    </div>
  );
}
