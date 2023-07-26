import Image from "next/image";
import bg from "../../../public/assets/bg.jpg";
import cross from "../../../public/assets/cross.jpg";
import VerseHome from "./components/VerseHome";
import EventHome from "./components/EventHome";
import WeekHome from "./components/WeekHome";
import Contact from "./components/Contact";
import TestimonialHome from "./components/TestimonialHome";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image
          src={bg}
          alt="Background Home"
          className="w-full h-screen object-cover"
        />
        <div className="absolute bottom-14 right-10 ml-10 p-4 text-2xl font-bold flex max-w-xl  sm:bg-transparent transition text-white">
          <span className="text-center sm:text-right">
            May the God of hope fill you with all joy and peace as you trust in
            him, so that you may overflow with hope by the power of the Holy
            Spirit.
            <br />
            ~Romans 15:13
          </span>
        </div>
      </div>

      <div className="h-7 bg-gradient-to-l from-neutral-200 via-amber-300 to-rose-400"></div>

      <VerseHome />

      <div className="w-full h-full bg-gradient-to-r from-neutral-200 via-amber-300 to-rose-400 clip-path-polygon p-16">
        <div className="flex flex-col md:flex-row md:flex-wrap h-full items-center justify-end gap-6 my-40">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg hover:scale-110 transition duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Messages
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Discover transformative messages that inspire growth and deepen
              your faith. Explore wisdom & find purpose in our inspiring
              content."
            </p>
            <a className="inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </a>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg hover:scale-110 transition duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Podcasts
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Unlock insights and inspiration through captivating podcasts.
              Expand your mind with enriching audio journeys. Tune in and grow."
            </p>
            <a className="inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </a>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg hover:scale-110 transition duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Articles
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Enriching articles that ignite curiosity and inspire growth
              through captivating reads. Explore and expand your horizons."
            </p>
            <a className="inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </a>
          </div>
        </div>
      </div>

      <EventHome />

      <WeekHome />

      <TestimonialHome />

      <section className="mt-24">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              The only place to be
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              You're invited to join us for a warm and uplifting experience at
              our Church. Come as you are, and let's celebrate together in a
              spirit of love and community. Our doors are open to everyone, and
              we can't wait to welcome you with open arms. Discover the power of
              faith, find solace, and build meaningful connections with fellow
              seekers. Join us this Sunday as we come together to worship,
              learn, and grow in the presence of God. We look forward to meeting
              you and sharing this beautiful journey of faith. See you there!
            </p>
            <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
              Connect
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={cross}
              width={500}
              height={500}
              alt="mockup"
              className="rounded-lg"
            ></Image>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
