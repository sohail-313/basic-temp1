import React from "react";
import Admissions from "./Admissions";

export default function page() {
  const admissionsData = {
    imageUrl: "/images/1200x675.svg",
    title: "Admission Open for the Academic Year 2024-2025",
    description: "Please contact us for more information.",
    guidelines: [
      "Leave space after each complete word while filling up the admission form.",
      "Admission form must be filled as per the Aadhar Card.",
      "Incomplete applications will be rejected.",
      "Information regarding name and date of birth submitted during admission will not be subjected to change at any time.",
      "Residential proof and identity proof must match the details filled in the form.",
      "Particulars provided in the admission form will be printed on the ID card. Ensure all details are accurate before submission.",
      "The applicant will be held responsible for any mistakes in the admission form.",
      "Previously submitted admission forms will not be carried over. A new application is required for each academic year.",
    ],
  };
  return (
    <>
      <Admissions {...admissionsData} />
    </>
  );
}
