import { getMembers } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import curve from '../../../../public/assets/curve.svg'

export default async function Members() {
  const members = await getMembers();

  return (
    <div>
      <div className="w-full h-24 bg-gradient-to-l from-gray-300 via-amber-300 to-rose-300"></div>
      <div>
        <div className="text-center text-[45px] md:text-[60px] my-16 drop-shadow-xl font-extrabold text-gray-600">
          Members
        </div>
        <div className="flex w-9/12 h-1 bg-gradient-to-r from-slate-300 via-amber-300 to-rose-300 mx-auto mb-16 rounded-full drop-shadow-xl"></div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="text-4xl mb-8 font-semibold ">Pastor</div>
          <div className="flex justify-center items-center">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
          <div>
            {members.map((member) => {
              if (member.department === "aa") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="text-4xl mb-8 font-semibold ">Associate Pastor</div>
          <div className="flex justify-center items-center">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
          <div>
            {members.map((member) => {
              if (member.department === "ab") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">
        <div className="text-4xl mb-8 font-semibold ">Deacon Board</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "b") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">
        <div className="text-4xl mb-8 font-semibold ">Worship Team</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "j") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">
        <div className="text-4xl mb-8 font-semibold ">Worship Team</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "d") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">        
        <div className="text-4xl mb-8 font-semibold text-center">Baptist Youth Fellowship</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "c") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">        
        <div className="text-4xl mb-8 font-semibold ">Hospitality Team</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "f") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">        
        <div className="text-4xl mb-8 font-semibold text-center">Sunday School Department</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "e") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">        
        <div className="text-4xl mb-8 font-semibold ">Sound System</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "i") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">        
        <div className="text-4xl mb-8 font-semibold ">Editorial Board</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "g") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">        
        <div className="text-4xl mb-8 font-semibold ">Media</div>
        <div className="flex justify-center items-center my-6">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {members.map((member) => {
              if (member.department === "h") {
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl mb-6">
                      <h3>{member.name}</h3>
                    </div>
                    <Image
                      src={member.image}
                      height={200}
                      width={200}
                      alt={member.name}
                      className="rounded-full"
                    ></Image>
                    <div className="text-xl text-gray-700 my-10 w-3/4 text-center">
                      <PortableText value={member.content} />
                    </div>
                  </div>
                );
              }
              return null; // Return null for members not belonging to this department
            })}</div>
        </div>

      </div>
    </div>
  );
}
