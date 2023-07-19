import Image from "next/image";
import Link from "next/link";
import bg from "../../../public/assets/bg.jpg";

export default async function Home() {
  return (
    <div className="relative">
      <Image
        src={bg}
        alt="Background Home"
        className="w-full h-screen object-cover"
      />
      <div className="absolute bottom-12 right-10 ml-10 p-4 text-2xl font-bold flex max-w-xl  sm:bg-transparent transition">
          <span className="text-center sm:text-right">
          May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.
          <br/>
          ~Romans 15:13
          </span>                   
     </div>
     <div>
          <span>Versology</span>
          <div></div>
     </div>
    </div>
  );
}
