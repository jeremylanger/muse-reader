import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";

const sentences = [
  '<i>The shock must be severe and he\'s almost ready for it</i>, she thought.',
  '"You listen respectfully to me in Council," she said, "yet you seldom heed my advice. Why?"',
  '"I don\'t trust your Bene Gesserit motives," he said. "You may think you can look through a man; you may <i>think</i> you can make a man do exactly what you--"',
  '"You poor <i>fool</i>, Thufir!" she raged.',
  'He scowled, pushing himself back in the chair.',
  '"Whatever rumors you\'ve heard about our schools," she said, "the truth is far greater. If I wished to destroy the Duke . . . or you, or any other person within my reach, you could not stop me."',
  'And she thought: <i>Why do I let pride drive such words out of me? This is not the way I was trained. This is not how I must shock him.</i>',
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
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  const calculateDelay = (word: string) => {
    const basePause = 100;
    const wordLengthPause = word.length * 40;
    const commaPause = word.endsWith(",") ? 200 : 0;
    const sentencePause = word.endsWith(";") || word.endsWith(".") || word.endsWith('."') || word.endsWith('!') || word.endsWith('!"') || word.endsWith('?') || word.endsWith('?"') ? 350 : 0;

    return basePause + wordLengthPause + commaPause + sentencePause;
  };

  const startOfItalicPhrase = (word: string) => word.startsWith("<i>");
  const endOfItalicPhrase = (word: string) => (word.endsWith("</i>") || word.endsWith("</i>,") || word.endsWith("</i>."));

  let delay = 0;
  let italicMode = false;
  const words = sentences[sentenceIndex].split(" ");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-center text-white font-dm-serif p-8 text-2xl leading-normal sm:text-5xl sm:leading-tight">
      <div className="flex content-center h-full">
        <div className="max-w-[800px] m-auto select-none">
          {words.map((word, i) => {
            let displayedWord = word;

            if (startOfItalicPhrase(word)) italicMode = true;
            if (italicMode) displayedWord = `<i>${word}</i>`;
            if (endOfItalicPhrase(word)) italicMode = false;

            const prevWord = i === 0 ? "" : words[i - 1];
            delay += calculateDelay(prevWord);

            return <NextWord key={`${i}-${word}`} delay={delay} word={displayedWord} />;
          })}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-1">
        <div className="h-full bg-white opacity-50 transition-all" style={{ width: `${(sentenceIndex / (sentences.length - 1)) * 100}%` }} />
      </div>
    </div>
  );
}

export default App
