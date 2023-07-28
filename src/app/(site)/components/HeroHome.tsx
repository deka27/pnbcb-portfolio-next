import Image from "next/image";
import cross from "../../../../public/assets/cross.jpg";

export default function HeroHome() {
  return (
    <div><section className="mt-24">
    <div className="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
          The only place to be
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
        &quot;You&apos;re invited to join us for a warm and uplifting experience at
          our Church. Come as you are, and let&apos;s celebrate together in a
          spirit of love and community. Our doors are open to everyone, and
          we can&apos;t wait to welcome you with open arms. Discover the power of
          faith, find solace, and build meaningful connections with fellow
          seekers. Join us this Sunday as we come together to worship,
          learn, and grow in the presence of God. We look forward to meeting
          you and sharing this beautiful journey of faith. See you there!&quot;
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
              
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              
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
  </section></div>
  )
}
