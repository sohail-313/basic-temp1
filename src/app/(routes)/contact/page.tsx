import React from "react";
import Contact from "./Contact";
import data from "@/data/data.json";

export default function page() {
  const contactData = data.contactData;

  return (
    <div>
      <Contact {...contactData} />
    </div>
  );
}
