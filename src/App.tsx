import { useCallback, useEffect, useState } from "react";

const sentences = [
  '"You poor <i>fool</i>, Thufir!", she raged.',
  'He scowled, pushing himself back in the chair.',
  '"Whatever rumors you\'ve heard about our schools," she said, "the truth is far greater.',
  'If I wished to destroy the Duke . . . or you, or any other person within my reach, you could not stop me."',
];

function App() {
  const [partialSentence, setPartialSentence] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      // setPartialSentence("");
      setSentenceIndex(curr => Math.min(sentences.length - 1, curr + 1));
    }
    if (event.key === "ArrowLeft") {
      // setPartialSentence("");
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
      const split = sentences[sentenceIndex].trim().split(" ");
      for (const word of split) {
        if (cancel) return;
        setPartialSentence(curr => (curr + " " + word).trim());
        await sleep(250);
      }
    };

    animateSentence();

    return () => {
      setPartialSentence("");
      cancel = true;
    }
  }, [sentenceIndex]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] text-white font-dm-serif text-5xl leading-tight">
      <div className="max-w-[800px] m-auto mt-[360px]">
        <span className="inline-block" dangerouslySetInnerHTML={{__html: partialSentence}} />
        <span className="inline-block"></span>
      </div>
    </div>
  );
}

export default App
