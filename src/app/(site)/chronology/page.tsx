import { getMembers } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import curve from "../../../../public/assets/curve.svg";
import user from "../../../../public/assets/user.png";

export default function chronology() {
  return (
    <div>
      <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>
      <div>
        <div className="text-center text-[45px] md:text-[60px] my-16 drop-shadow-xl font-extrabold text-gray-600">
          Chronology
        </div>
        <div className="flex w-9/12 h-1 bg-gradient-to-r from-slate-300 via-amber-300 to-rose-300 mx-auto mb-16 rounded-full drop-shadow-xl"></div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="text-4xl mb-8 font-semibold ">Founding Members</div>
          <div className="flex justify-center items-center">
            <Image
              src={curve}
              alt="curve"
              width={100}
              height={100}
              className=""
            ></Image>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Adam</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full border-[5px] border-gray-800 drop-shadow-xl"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Aiden</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full border-[5px] border-gray-800 drop-shadow-xl"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Bell</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full border-[5px] border-gray-800 drop-shadow-xl"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Mern</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full border-[5px] border-gray-800 drop-shadow-xl"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Vash</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full border-[5px] border-gray-800 drop-shadow-xl"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>

          </div>


        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="text-4xl mb-8 font-semibold ">Office Members 2013</div>
          <div className="flex justify-center items-center">
            <Image
              src={curve}
              alt="curve"
              width={100}
              height={100}
              className=""
            ></Image>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">

            <div className="flex flex-col items-center justify-center col-start-2 col-end-2">
              <div className="text-2xl mb-6">
                <h3>Adam</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-start-3 col-end-3">
              <div className="text-2xl mb-6">
                <h3>Aiden</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-start-4 col-end-4">
              <div className="text-2xl mb-6">
                <h3>Bell</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis.
              </div>
            </div>

          </div>



        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="text-4xl mb-8 font-semibold ">Office Members 2014</div>
          <div className="flex justify-center items-center">
            <Image
              src={curve}
              alt="curve"
              width={100}
              height={100}
              className=""
            ></Image>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Adam</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Aiden</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Bell</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>

          </div>



        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="text-4xl mb-8 font-semibold ">Office Members 2015</div>
          <div className="flex justify-center items-center">
            <Image
              src={curve}
              alt="curve"
              width={100}
              height={100}
              className=""
            ></Image>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Adam</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Aiden</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Bell</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>

          </div>



        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="text-4xl mb-8 font-semibold ">Office Members 2016</div>
          <div className="flex justify-center items-center">
            <Image
              src={curve}
              alt="curve"
              width={100}
              height={100}
              className=""
            ></Image>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Adam</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Aiden</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl mb-6">
                <h3>Bell</h3>
              </div>
              <Image
                src={user}
                height={200}
                width={200}
                alt="user"
                className="rounded-full"
              ></Image>
              <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum sodales erat in convallis. In pharetra sit amet nunc a
                mattis. Aliquam erat volutpat. Nunc sit amet libero euismod,
                semper nisi non, aliquet mauris. In tincidunt mi vel enim
                sodales vestibulum.
              </div>
            </div>

          </div>



        </div>


      </div>
    </div>
  );
}
