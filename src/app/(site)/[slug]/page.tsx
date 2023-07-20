import { getPage } from "../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { FaCross } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="">
      <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>

      <div className=" mx-6 sm:ml-10 flex flex-col px-5">      
      <div>
        <h1 className="px-5 flex justify-start text-[60px] drop-shadow font-extrabold mb-10 mt-16 text-gray-600 ">
          <div className="flex relative top-4 mr-3">
            <FaCross />
          </div>
          <div className="flex relative">{page.title}</div>
        </h1>
      </div>

      <div className="flex w-11/12 h-1 bg-gradient-to-r from-slate-300 via-amber-300 to-rose-300 mx-auto mb-16"></div>
      <div className="px-5 flex justify-center">
        <Image
          src={page.image}
          alt={page.title}
          width={1200}
          height={1200}
          className="rounded-lg"
        ></Image>
      </div>
      <div className="text-xl text-gray-700 my-16 px-5">
        <PortableText value={page.content} />
      </div>
      </div>
    </div>
  );
}
