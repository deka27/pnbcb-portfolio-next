'use client'

import { useState, useEffect } from "react";
import "../../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import logo from "../../../../public/assets/logo.png";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";


export default function Header() {

//   const pages = await getPages();

  return (
    <div
    className='bg-transparent p-5 fixed top-0 left-0 w-full flex justify-between items-center z-50'
    >
      <header className="flex items-center font-sans">
        <Image
          src={logo}
          alt="pnbcb logo"
          className="relative h-11 w-11 self-center mr-2 drop-shadow-md"
        />
        <Link href="/" className="text-3xl font-bold inline-block align-middle text-white sm:text-4xl">
          <h1 className="drop-shadow-lg">pnbcb</h1>
        </Link>
      </header>
      <div className="sm:mb-0 text-2xl mr-2 py-2 px-3 bg-white text-black rounded-lg hover:bg-black hover:text-white transition drop-shadow-lg">
        <HiMenu />
      </div>
    </div>
  );
}
