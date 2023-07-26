import "../../globals.css";
import Link from "next/link";
import Image from "next/image";
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
// import {BiCurrentLocation} from 'react-icons/bi';
// import {AiOutlineFieldTime} from 'react-icons/ai';

export default async function Footer() {
  return (
    <div className="bg-gray-800 relative bottom-0">
      <footer>
        <div className="w-full h-ful grid grid-cols-2 text-white py-10">

          <div className="grid grid-rows-3  ml-10">
            <div className="text-2xl">Contact Details</div>
            <div className="grid mb-2 text-lg">
              <div>+123456789</div>
              <div>hello@church.com</div>
            </div>
            <div className="flex text-2xl mt-4 gap-3">
              <AiFillFacebook/>
              <AiFillInstagram/>
              <AiFillYoutube/>
            </div>
          </div>

          {/* <div className="flex flex-col md:flex-row items-center ml-10 text-xl">
            <div><BiCurrentLocation/></div>
            <div className="mx-5">St. Joseph's University</div>
            <div><AiOutlineFieldTime/></div>
            <div className="mx-5">8:30 AM to 9:30 AM</div>
          </div> */}

        </div>
      </footer>
    </div>
  );
}
