import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typingSpeed = 100, pauseTime = 20) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex, words, typingSpeed, pauseTime]);

  return displayedText;
}
