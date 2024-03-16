import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";

const sentences = [
  '"I don\'t trust your Bene Gesserit motives," he said. "You may think you can look through a man; you may <i>think</i> you can make a man do exactly what you--"',
  '"You poor <i>fool</i>, Thufir!" she raged.',
  'He scowled, pushing himself back in the chair.',
  '"Whatever rumors you\'ve heard about our schools," she said, "the truth is far greater. If I wished to destroy the Duke . . . or you, or any other person within my reach, you could not stop me."',
];

function App() {
  const [sentenceIndex, setSentenceIndex] = useState(0);

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

  const calculateDelay = (word: string) => {
    const basePause = 150;
    const wordLengthPause = word.length * 40;
    const commaPause = word.endsWith(",") ? 150 : 0;
    const sentencePause = word.endsWith(";") || word.endsWith(".") || word.endsWith('."') || word.endsWith('!') || word.endsWith('!"') || word.endsWith('?') || word.endsWith('?"') ? 350 : 0;

    return basePause + wordLengthPause + commaPause + sentencePause;
  };

  let delay = 0;
  const words = sentences[sentenceIndex].split(" ");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-center text-white font-dm-serif text-5xl leading-tight">
      <div className="max-w-[800px] m-auto mt-[360px]">
        {words.map((word, i) => {
          const prevWord = i === 0 ? "" : words[i - 1];
          delay += calculateDelay(prevWord);
          return <NextWord key={`${i}-${word}`} delay={delay} word={word} />;
        })}
      </div>
    </div>
  );
}

export default App
