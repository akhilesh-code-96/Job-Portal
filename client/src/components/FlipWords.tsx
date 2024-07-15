import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export default function FlipWordsComponent() {
  const words = ["better", "easier", "smarter", "fluent"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Tech job portal made connection with <br />
        top global opportunities
        <FlipWords words={words} />.
        <div className="text-sm mt-5"
        >Created and founded by <a href="#" className="text-blue-400">Akhilesh Srivastav</a>.
        </div>
        <div className="text-[18px] mx-auto font-normal text-neutral-600 w-[600px] mt-5">
        Our tech job portal offers curated listings,advanced search filters, and personalized recommendations
         to match skilled professionals with ideal opportunities, ensuring career growth and success.
        </div>
      </div>
    </div>
  );
}
