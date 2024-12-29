import React from "react";
import Admissions from "./Admissions";
import data from "../../../data/data.json";

export default function page() {
  const admissionsData = data.admissionsData;

  return (
    <>
      <Admissions {...admissionsData} />
    </>
  );
}
