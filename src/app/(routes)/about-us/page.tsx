import React from "react";
import AboutUs from "./AboutUs";
import data from "../../../data/data.json";

export default function page() {
  const aboutUsData = data.aboutUsData;
  return (
    <>
      <AboutUs {...aboutUsData} />
    </>
  );
}
