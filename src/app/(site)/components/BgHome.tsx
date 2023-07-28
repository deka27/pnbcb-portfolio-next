import Image from "next/image";
import bg from "../../../../public/assets/bg.jpg";

export default function BgHome() {
  return (
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
      <div className="h-7 bg-gradient-to-l from-neutral-200 via-amber-300 to-rose-400"></div>
    </div>
  );
}
