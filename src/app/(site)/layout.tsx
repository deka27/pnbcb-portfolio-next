import "../globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Poppins, Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "PNBCB",
  description: "Poumai Naga Baptist Church, Bangalore",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={outfit.className}>

      <body className="">

        <Header/>

        <main>{children}</main>

        <Footer/>
        
      </body>
    </html>
  );
}
