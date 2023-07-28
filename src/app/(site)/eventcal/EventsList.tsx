import { getEventsByMonth } from "./eventsdata";
import { BsCalendarWeek } from "react-icons/bs";

import curve from "../../../../public/assets/curve.svg";
import Image from "next/image";

const EventsList = () => {
  const eventsByMonth = getEventsByMonth();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-6 my-6">
      {eventsByMonth.map((monthData) => (
        <div
          key={monthData.month}
          className="my-4 mx-8 flex flex-col items-center"
        >
          <div className="">
            <Image src={curve} alt="cross" width={100} height={100}></Image>
          </div>

          <div className="text-4xl md:text-5xl my-10 flex text-gray-700 drop-shadow-lg">
            <BsCalendarWeek />
            <h2 className="mx-4">{monthData.month}</h2>
          </div>

          <ul className="my-12 top-0 relative">
            {monthData.events.map((event) => (
              <li key={event.date} className="my-4 flex gap-8 md:text-xl">
                <div className="flex flex-col justify-center items-center bg-amber-300 h-16 w-16 md:h-20 md:w-20 rounded-full drop-shadow-xl">
                  <div className="">{event.date}</div>
                  <div className="font-semibold">{event.weekdays}</div>
                </div>

                <div className="flex justify-center items-center font-bold ">
                  {event.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
