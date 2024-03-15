import { useCallback, useEffect, useState } from "react";

const sentences = [
  '"You poor <i>fool</i>, Thufir!", she raged.',
  'He scowled, pushing himself back in the chair.',
  '"Whatever rumors you\'ve heard about our schools," she said, "the truth is far greater.',
  'If I wished to destroy the Duke . . . or you, or any other person within my reach, you could not stop me."',
];

function App() {
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === " ") setSentenceIndex(curr => Math.min(sentences.length - 1, curr + 1));
    if (event.key === "ArrowLeft") setSentenceIndex(curr => Math.max(0, curr - 1));
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);

    return () => document.removeEventListener("keydown", handleKeydown, false);
  }, [handleKeydown]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] text-center text-white">
      <div className="font-dm-serif text-5xl max-w-[800px] m-auto mt-[360px] leading-tight" dangerouslySetInnerHTML={{__html: sentences[sentenceIndex]}} />
    </div>
  );
}

export default App
