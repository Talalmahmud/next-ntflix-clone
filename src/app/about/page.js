import React from "react";
import Herosection from "../components/Herosection";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Herosection title="OUR STORY" imageUrl={"/about1.svg"} />;
};

export default Page;
