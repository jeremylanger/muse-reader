import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";

const sentences = [
  '"I don\'t trust your Bene Gesserit motives," he said. "You may think you can look through a man; you may <i>think</i> you can make a man do exactly what you--"',
  '"You poor <i>fool</i>, Thufir!" she raged.',
  'He scowled, pushing himself back in the chair.',
  '"Whatever rumors you\'ve heard about our schools," she said, "the truth is far greater. If I wished to destroy the Duke . . . or you, or any other person within my reach, you could not stop me."',
];

function App() {
  const [partialSentence, setPartialSentence] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [nextWord, setNextWord] = useState("");

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      setSentenceIndex(curr => Math.min(sentences.length - 1, curr + 1));
    }
    if (event.key === "ArrowLeft") {
      setSentenceIndex(curr => Math.max(0, curr - 1));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);

    return () => document.removeEventListener("keydown", handleKeydown, false);
  }, [handleKeydown]);

  const animateSentence = useCallback((prev: string, curr: string) => {
    const span = document.getElementById("next-word");
    if (!span) return;

    setPartialSentence(sentence => (sentence + " " + prev).trim());
    setNextWord(curr);

    const basePause = 500;
    const wordLengthPause = curr.length * 40;
    const commaPause = curr.endsWith(",") ? 150 : 0;
    const periodPause = curr.endsWith(";") || curr.endsWith(".") || curr.endsWith('."') ? 250 : 0;

    span.style["transitionDuration"] = "0ms";
    span.style["opacity"] = "0%";

    setTimeout(() => {
      span.style["transitionDuration"] = "500ms";
      span.style["opacity"] = "100%";
    }, 10);
  }, []);

  useEffect(() => {
    const words = sentences[sentenceIndex].trim().split(" ");

    let wordIndex = -1;
    const interval = setInterval(() => {
      const prev = wordIndex === -1 ? "" : words[wordIndex];
      const curr = words[wordIndex + 1];

      if (wordIndex + 1 === words.length) {
        clearInterval(interval);
        return;
      }

      animateSentence(prev, curr);
      wordIndex++;
    }, 500);

    return () => {
      clearInterval(interval);
      setPartialSentence("");
      setNextWord("");
    }
  }, [sentenceIndex, animateSentence]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-white font-dm-serif text-5xl leading-tight">
      <div className="max-w-[800px] m-auto mt-[360px]">
        <span className="inline" dangerouslySetInnerHTML={{__html: partialSentence + " "}} />
        {/* <NextWord word={nextWord} /> */}
        <span id="next-word" className="transition-opacity inline-block" dangerouslySetInnerHTML={{__html: nextWord}} />
      </div>
    </div>
  );
}

export default App
