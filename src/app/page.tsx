import Hero from "@/components/Home/Hero";
import WhyUs from "@/components/Home/WhyUs";

export default function Home() {
  const heroData = {
    title: "Welcome to Nasr International School",
    description:
      "Where the future begins, we are a school that is dedicated to providing the best education for your child.",
    imageUrl: "/images/1200x675.svg",
  };

  const whyUsData = {
    title: "Why Us",
    description:
      "Nasr International School is a leading educational institution in the region. We offer a wide range of courses and programs to help students achieve their academic goals. Our faculty is dedicated to providing students with the knowledge and skills they need to succeed in their chosen field. We also offer a variety of extracurricular activities to help students develop their talents and interests. Our campus is equipped with state-of-the-art facilities to provide students with a comfortable and supportive learning environment. We are committed to helping students reach their full potential and achieve their dreams.",
    imageUrl: "/images/400x400.svg",
    vision:
      "Our vision is to provide students with a high-quality education that prepares them for success in their chosen field. We are committed to helping students develop the knowledge and skills they need to achieve their academic goals. Our faculty is dedicated to providing students with a supportive learning environment that encourages them to reach their full potential.",
    staff:
      "Our faculty is made up of experienced professionals who are experts in their field. They are dedicated to providing students with a high-quality education that prepares them for success in their chosen field. Our faculty is committed to helping students develop the knowledge and skills they need to achieve their academic goals.",
  };
  return (
    <>
      <Hero {...heroData} />
      <WhyUs {...whyUsData} />
    </>
  );
}
