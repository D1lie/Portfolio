import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

const TypewriterText = ({
  words = ["Cybersecurity Analyst", "Penetration Tester", "Bug Bounty Hunter"],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
  className,
}: TypewriterTextProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const tick = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      // Set the text based on whether we're deleting or typing
      setText((prev) => {
        if (shouldDelete) {
          return prev.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });

      // Set the typing speed
      if (shouldDelete) {
        setDelta(deletingSpeed);
      } else {
        setDelta(typingSpeed);
      }

      // If word is complete and not deleting, start deleting after delay
      if (!shouldDelete && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }

      // If deleted completely, move to next word
      if (shouldDelete && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [
    text,
    delta,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={cn("text-red-500 font-bold inline-block", className)}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;
