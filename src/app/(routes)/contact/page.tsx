import React from "react";
import Contact from "./Contact";
export default function page() {
  const contactData = {
    imageUrl: "/images/1200x675.svg",
    contactDetails: [
      {
        title: "Address",
        description: "Survey No. 106/107, Serilingampally, Hyderabad, Telangana, India 500 019",
      },
      {
        title: "Phone",
        description: "+91 40 2303 1100",
        link: "tel:+914023031100", // Add the link for the phone number
      },
      {
        title: "Email",
        description: "nasr@gmail.com",
        link: "mailto:nasr@gmail.com", // Add the link for the email
      },
    ],
  };

  return (
    <div>
      <Contact {...contactData} />
    </div>
  );
}
