import { useCallback, useEffect, useState } from "react";
import { openDuneEpub } from "./epubParser";
import { Message } from "./Message";
import { Range } from "./Range";
import { SearchModal } from "./SearchModal";
import { Paragraph } from "./Paragraph";
import { GoBack, GoForward, ReadingSpeed, SearchButton } from "./components";

const chapters = await openDuneEpub();
console.log({ chapters });
const sentences = chapters?.flat() ?? [];

function App() {
  const [readingSpeed, setReadingSpeed] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const s = parseFloat(params.get("s") ?? "1");
    return Math.max(0.2, s);
  });
  const [sentenceIndex, setSentenceIndex] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("p") ?? "0");
    // Keep it between the first and last page
    return Math.min(sentences.length - 1, Math.max(0, p));
  });
  const [message, setMessage] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.code === "KeyS" && event.metaKey) {
      event.preventDefault();
      setIsSearchVisible(curr => !curr);
    }
  }, []);

  const saveUrlParam = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    window.history.pushState({}, "", `?${params.toString()}`);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  useEffect(() => {
    saveUrlParam("p", sentenceIndex.toString());
  }, [sentenceIndex, saveUrlParam]);

  useEffect(() => {
    saveUrlParam("s", readingSpeed.toFixed(1));
  }, [readingSpeed, saveUrlParam]);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-[url('/dune-wallpaper.jpg')] bg-cover bg-center p-8 text-center font-dm-serif text-2xl !leading-tight text-white sm:text-3xl lg:text-5xl">
      <div className="fixed left-1/2 -mt-3 -translate-x-1/2 opacity-30 transition-all hover:opacity-100">
        <ReadingSpeed isSearchVisible={isSearchVisible} setMessage={setMessage} setReadingSpeed={setReadingSpeed} />
      </div>
      <SearchButton setIsSearchVisible={setIsSearchVisible} />

      <div className="flex h-full content-center overflow-auto px-safe">
        <Message message={message} setMessage={setMessage} />
        <Paragraph readingSpeed={readingSpeed} sentenceIndex={sentenceIndex} sentences={sentences} />
      </div>

      <GoBack isSearchVisible={isSearchVisible} setSentenceIndex={setSentenceIndex} />
      <GoForward
        isSearchVisible={isSearchVisible}
        sentencesLength={sentences.length}
        setSentenceIndex={setSentenceIndex}
      />

      <SearchModal
        isVisible={isSearchVisible}
        setIsSearchVisible={setIsSearchVisible}
        sentences={sentences}
        setSentenceIndex={setSentenceIndex}
      />

      <Range sentenceIndex={sentenceIndex} sentencesLength={sentences.length} setSentenceIndex={setSentenceIndex} />
    </div>
  );
}

export default App;
