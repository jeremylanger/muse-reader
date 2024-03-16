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

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);

    return () => document.removeEventListener("keydown", handleKeydown, false);
  }, [handleKeydown]);

  useEffect(() => {
    let cancel = false;
    const animateSentence = async () => {
      const span = document.getElementById("next-word");
      if (!span) return;

      const split = sentences[sentenceIndex].trim().split(" ");
      for (let i = -1; i < split.length - 1; i++) {
        if (cancel) return;

        const curr = i === -1 ? "" : split[i];
        const next = split[i + 1];

        setPartialSentence(sentence => (sentence + " " + curr).trim());
        setNextWord(next);

        const basePause = 500;
        const wordLengthPause = next.length * 40;
        const commaPause = next.endsWith(",") ? 150 : 0;
        const periodPause = next.endsWith(";") || next.endsWith(".") || next.endsWith('."') ? 250 : 0;
    
        span.style["transitionDuration"] = "0ms";
        span.style["opacity"] = "0%";
    
        setTimeout(() => {
          span.style["transitionDuration"] = "500ms";
          span.style["opacity"] = "100%";
        }, 10);

        // await sleep(basePause + wordLengthPause + commaPause + periodPause);
        await sleep(500);
      }
    };

    animateSentence();

    return () => {
      console.log("deleting shit")
      setPartialSentence("");
      cancel = true;
    }
  }, [sentenceIndex]);

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
