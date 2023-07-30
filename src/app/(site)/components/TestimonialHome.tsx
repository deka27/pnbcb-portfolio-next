"use client";

import cross from "../../../../public/assets/cross.svg";
import curve from '../../../../public/assets/curve.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const slides = [
  {
    text: "Attending the weekly service has been an incredible blessing. The worship experience is so uplifting, and the teachings are thought-provoking and applicable to my daily life. I've made wonderful friends and found a supportive community where I feel loved and accepted. It's truly a place where my faith has grown, and I'm grateful for the positive impact it has on my life.",
    author: "John Doe",
  },
  {
    text: "I started attending the weekly service out of curiosity, but it quickly became a significant part of my life. The messages speak directly to my heart, and the worship atmosphere is electric. It's a place where I can come as I am and feel God's presence in a profound way. The sense of belonging and connection with others who share the same journey is remarkable. I can honestly say that my faith has been revived, and I look forward to each Sunday with excitement.",
    author: "Jane Smith",
  },
  {
    text: "I had been searching for a church that felt like home, and I found it through the weekly service. It has become a sanctuary of peace and hope in my busy life. The warmth of the congregation, the welcoming smiles, and the heartwarming worship make me feel like I belong. The teachings have helped me grow spiritually, and the encouragement from fellow attendees has been life-changing. I am so grateful for the impact it has on my faith and my relationship with God.",
    author: "James Johnson",
  },
  {
    text: "The first time I walked into the weekly service, I was greeted with genuine kindness and love. The sense of community here is unlike anything I've experienced before. The teachings are relatable and challenging, pushing me to become a better person. The worship is powerful, and it's like a little taste of heaven on earth. I leave each Sunday feeling inspired and ready to face the week ahead with a renewed spirit. This community has truly become my second family, and I can't imagine my life without it.",
    author: "Kirk Boor",
  },
  {
    text: "As a newcomer to the area, I was looking for a place to connect with others and deepen my faith. The weekly service exceeded my expectations. From the moment I walked in, I felt welcomed and embraced by the friendly congregation. The messages are filled with wisdom, grace, and love, and they challenge me to grow in my relationship with God. The fellowship after the service has allowed me to form meaningful friendships, and I'm grateful for the support and encouragement I've received from this community.",
    author: "Landel Sycthe",
  },
];

export default function TestimonialHome() {
  return (
    <div className="my-24 w-full ">
      <div className="flex flex-col justify-center items-center align-middle">
        <div>
        <div className="flex justify-center items-center">
        <Image
          src={curve}
          alt="curve"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
          <div><h1 className="text-5xl font-bold mb-4">Testimonials</h1></div>
        </div>
        <p className="my-2 text-xl text-center p-6">
          From Their Hearts to Yours: Touching Testimonials of Faith, Hope, and
          Renewal. See How Lives Are Transformed through Our Community
        </p>
      </div>
      <div className="flex justify-center items-center my-2">
      <div className="flex justify-center items-center gap-8">
        
        <div className="flex justify-center items-center">
          <Image
          src={cross}
          alt="cross"          
          width={100}
          height={100}
          className=""
        ></Image>
        </div>
        
      </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="mt-10 bg-[#FAF3F0]">
            <div className="flex flex-col justify-center items-center h-full ">
              <div className="text-center md:text-2xl mx-auto w-3/4">{slide.text}</div>
              <div className="text-center font-bold mt-10 mb-16 md:text-2xl">{slide.author}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
