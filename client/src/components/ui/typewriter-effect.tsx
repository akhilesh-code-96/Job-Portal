import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Import a style from react-syntax-highlighter
import { cn } from "../../utils/cn";

const customStyle = {
  ...dracula,
  'code[class*="language-"]': {
    ...dracula['code[class*="language-"]'],
    fontSize: "0.8rem", // Example: change font size
    background: "transparent", // Transparent background for custom container
  },
  'pre[class*="language-"]': {
    ...dracula['pre[class*="language-"]'],
    background: "transparent", // Transparent background for custom container
  },
};

const TypewriterEffect = ({
  words,
  className,
  language = "javascript", // Default language for syntax highlighting
}: {
  words: { text: string; className?: string }[];
  className?: string;
  language?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      if (currentWordIndex < words.length) {
        const currentWord = words[currentWordIndex].text;
        if (currentCharacterIndex < currentWord.length) {
          setDisplayedText((prev) => prev + currentWord[currentCharacterIndex]);
          setCurrentCharacterIndex(currentCharacterIndex + 1);
        } else {
          setDisplayedText((prev) => prev + "\n");
          setCurrentCharacterIndex(0);
          setCurrentWordIndex(currentWordIndex + 1);
        }
      } else {
        setTyping(false);
      }
    }
  }, [typing, currentWordIndex, currentCharacterIndex, words]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTyping((prev) => !prev);
    }, 300); // Adjust the interval duration here (e.g., increase to 300ms for slower typing)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative text-gray-200 w-full", className)}>
      <div className="p-4 rounded-lg shadow-lg">
        <SyntaxHighlighter language={language} style={customStyle}>
          {displayedText}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default TypewriterEffect;
