"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typeMs = 70,
  deleteMs = 40,
  pauseMs = 1400
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[wordIndex % words.length];

    const delay = !deleting && text === current ? pauseMs : deleting ? deleteMs : typeMs;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, pauseMs]);

  return text;
}