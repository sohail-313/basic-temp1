import Hero from "@/components/Home/Hero";
import WhyUs from "@/components/Home/WhyUs";
import data from "../data/data.json";

export default function Home() {
  const heroData = data.heroData;
  const whyUsData = data.whyUsData;
  
  return (
    <>
      <Hero {...heroData} />
      <WhyUs {...whyUsData} />
    </>
  );
}
