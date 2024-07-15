import React from "react";
import  TypewriterEffect  from "./ui/typewriter-effect";

const codeSnippet = [
  { text: "import React, { useState } from 'react';" },
  { text: "import DatePicker from 'react-datepicker';" },
  { text: "import 'react-datepicker/dist/react-datepicker.css';" },
  { text: "" },
  { text: "const DatePickerComponent = () => {" },
  { text: "  const [startDate, setStartDate] = useState(new Date());" },
  { text: "  return (" },
  { text: "    <div>" },
  { text: "      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />" },
  { text: "    </div>" },
  { text: "  );" },
  { text: "};" },
  { text: "" },
  { text: "export default DatePickerComponent;" },
];

const CodeSnippetUI = () => {
  return (
      <TypewriterEffect
        words={codeSnippet}
        className="text-xs xs:text-base font-mono leading-relaxed"
      />
  );
};

export default CodeSnippetUI;
