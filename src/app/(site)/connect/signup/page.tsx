import curve from "../../../../../public/assets/curve.svg";
import Image from "next/image";

export default function signUp() {
  return (
    <div>
      <div>
        <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>
        <div className="text-center text-[45px] md:text-[60px] my-16 drop-shadow-xl font-extrabold text-gray-600">
          Sign Up
        </div>
        <div className="text-xl my-10 mx-auto text-center w-3/4">Join our vibrant community and stay connected through our newsletter. Be the first to receive inspiring messages, event updates, and valuable resources straight to your inbox. Don't miss out on this opportunity to be part of our journey of faith and growth together. Sign up now and embrace a world of inspiration and positivity delivered right to your email. Let's walk this path of hope and transformation hand in hand.</div>
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

      <div className="w-3/4 lg:w-2/3 mx-auto my-10">
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
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Village
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Assam"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Why Bangalore?
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Studies & work"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Date of Birth
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="29-Feb-1996"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Occupation
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Engineer"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Gender
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Male"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Address
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="BTM 2nd Stage"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Interests
                </label>
                <input
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Sleeping"
                ></input>
              </div>              
          
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Sign Up
              </button>
            </form>
      </div>
    </div>
  );
}
