import EventsResourcesGrid from "@/components/articles";
import FooterSection from "@/components/footerSection";
import HeroSection from "@/components/hero";
import InfiniteCards from "@/components/infiniteCards";
import MentalHealth from "@/components/mentalHealth";
import Navbar from "@/components/navbar";
import StudentSuccessSection from "@/components/reviews";
import Reviews from "@/components/reviews";
import StatsAndPromiseSection from "@/components/stats";

export default function Home() {
  return (
    <>
    <Navbar/>
   <HeroSection/>
    <InfiniteCards />
 
    <MentalHealth />
       
    <StudentSuccessSection  />
    <StatsAndPromiseSection />
    <EventsResourcesGrid />
    <FooterSection />
    </>

  );
}
