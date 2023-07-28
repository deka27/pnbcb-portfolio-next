import Contact from "../components/Contact";
import cross from '../../../../public/assets/cross.svg'
import curve from '../../../../public/assets/curve.svg'
import Image from "next/image";
import Link from "next/link";

export default function Connect() {
  return (
    <div>
      <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>

      <div className="text-center text-[45px] md:text-[60px] my-16 drop-shadow-xl font-extrabold text-gray-600">Connect with us</div>

      <div className="flex w-9/12 h-1 bg-gradient-to-r from-slate-300 via-amber-300 to-rose-300 mx-auto mb-16 rounded-full drop-shadow-xl"></div>

      {/* Testimonial */}
      <div className="my-24 mx-8">
        
        <div className="grid md:grid md:grid-cols-2 gap-4 my-8">
          <div>
          <div className="text-4xl md:text-5xl text-center">
          Share your Experience
        </div>
          <div className="text-xl mx-auto w-3/4 my-12 text-center">
            &quot;Sharing experiences is a powerful act of connection and
            growth. As we open our hearts and minds to others, we bridge gaps,
            inspire empathy, and find common ground. It's through the exchange
            of our stories that we discover the universality of human emotions
            and triumphs. Each shared experience becomes a stepping stone,
            paving the way for understanding and collective wisdom. So, let us
            come together, embrace vulnerability, and celebrate the beauty of
            shared experiences that unite us as one human family.&quot;
          </div>
          </div>
          <div className="px-12 lg:px-16">
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Kaustav"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@email.com"
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your message
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* partition */}
      <div className="flex justify-center items-center gap-8">
        <div className="flex justify-center items-center">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
          src={cross}
          alt="cross"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="flex justify-center items-center">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
      </div>

      {/* Prayer Request */}
      <div className="my-24 mx-8">
        <div className="grid md:grid md:grid-cols-2 gap-4 my-8">
          <div>
            <div className="text-4xl md:text-5xl text-center">
              Request a Prayer
            </div>
            <div className="text-xl mx-auto w-3/4 my-12 text-center">
              &quot;Requesting a prayer is an act of faith and trust, inviting
              others to stand with us in times of need. When we humbly share our
              burdens, we create a circle of support and compassion. In asking
              for prayers, we find strength, hope, and comfort, knowing that we
              are not alone in our struggles. So, let us reach out, with hearts
              open and voices sincere, leaning on one another in love, and
              uplifting each other through the power of prayer.&quot;
            </div>
          </div>
          <div className="px-12 lg:px-16">
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Kaustav"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@email.com"
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your message
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* partition */}
      <div className="flex justify-center items-center gap-8">
        <div className="flex justify-center items-center">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
          src={cross}
          alt="cross"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="flex justify-center items-center">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
      </div>

      {/* Newsletter */}
      <div className="my-24 mx-8">
        <div className="text-4xl md:text-5xl text-center">Sign up for our newsletter</div>
        <div className="text-xl py-10 mx-auto text-center w-3/4">Join our vibrant community and stay connected through our newsletter. Be the first to receive inspiring messages, event updates, and valuable resources straight to your inbox. Don't miss out on this opportunity to be part of our journey of faith and growth together. Sign up now and embrace a world of inspiration and positivity delivered right to your email. Let's walk this path of hope and transformation hand in hand.</div>
        <div className="flex justify-center items-center">
        <Link href='/connect/signup' passHref prefetch={true}>
        <button type="button" className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-base px-5 py-3 text-center mr-2 mb-2 transition-all duration-300">Sign Up</button>
        </Link>
        </div>
      </div>

      {/* Contact */}
      <Contact />
    </div>
  );
}
