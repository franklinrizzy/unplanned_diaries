import Hero from "@/components/Hero";
import Image from "next/image";
import TrendingDestinations from "./pages/TrendingDestinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import StatsAndMission from "@/components/StatsAndMission";

export default function Home() {
  return (
  <>
  <Hero />
  <TrendingDestinations />
  <WhyChooseUs />
  <Testimonials />
  <StatsAndMission />
  </>
  );
}
