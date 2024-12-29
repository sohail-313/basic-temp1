import React from 'react'
import AboutUs from './AboutUs'

export default function page() {
  const aboutUsData = {
    title: "About Us",
    description:
      "Nasr International School is a leading educational institution in the region. We offer a wide range of courses and programs to help students achieve their academic goals. Our faculty is dedicated to providing students with the knowledge and skills they need to succeed in their chosen field. We also offer a variety of extracurricular activities to help students develop their talents and interests. Our campus is equipped with state-of-the-art facilities to provide students with a comfortable and supportive learning environment. We are committed to helping students reach their full potential and achieve their dreams.",
    imageUrl: "/images/1200x675.svg",
    vision:
      "Our vision is to provide students with a high-quality education that prepares them for success in their chosen field. We are committed to helping students develop the knowledge and skills they need to achieve their academic goals. Our faculty is dedicated to providing students with a supportive learning environment that encourages them to reach their full potential.",
    staff:
      "Our faculty is made up of experienced professionals who are experts in their field. They are dedicated to providing students with a high-quality education that prepares them for success in their chosen field. Our faculty is committed to helping students develop the knowledge and skills they need to achieve their academic goals.",
  };
  return (
    <>
       <AboutUs {...aboutUsData} />
    </>
  )
}
