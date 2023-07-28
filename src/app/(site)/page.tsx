
import VerseHome from "./components/VerseHome";
import EventHome from "./components/EventHome";
import WeekHome from "./components/WeekHome";
import Contact from "./components/Contact";
import TestimonialHome from "./components/TestimonialHome";
import BgHome from "./components/BgHome";
import MaterialsHome from "./components/MaterialsHome";
import HeroHome from "./components/HeroHome";

export default function Home() {
  return (
    <div>
      
      <BgHome/>

      <VerseHome />

      <MaterialsHome/>

      <EventHome />

      <WeekHome />

      <TestimonialHome />

      <HeroHome/>

      <Contact />
      
    </div>
  );
}
