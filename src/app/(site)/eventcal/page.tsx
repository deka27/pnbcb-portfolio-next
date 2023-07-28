import curve from "../../../../public/assets/curve.svg";
import Image from "next/image";

import EventsList from "./EventsList";

export default function eventcal() {
  

  return (
    <div>
      <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>
      <div className="text-center text-[45px] md:text-[60px] my-16 drop-shadow-xl font-extrabold text-gray-600">
        Yearly Calendar
      </div>
      {/* <div>
        <div className="flex justify-center items-center">
          <Image
            src={curve}
            alt="cross"
            width={100}
            height={100}
            className=""
          ></Image>
        </div>
      </div> */}
      <div className="flex w-1/12 h-1 bg-gradient-to-r from-slate-300 via-amber-300 to-rose-300 mx-auto mb-16 rounded-full drop-shadow-xl" ></div>

      <div className="">
        <EventsList />
      </div>
    </div>
  );
}
