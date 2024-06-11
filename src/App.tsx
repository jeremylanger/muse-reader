import { useCallback, useEffect, useState } from "react";
import { openDuneEpub } from "./epubParser";
import { Message } from "./Message";
import { Range } from "./Range";
import { Search } from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Paragraph } from "./Paragraph";

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

  const goBack = useCallback(() => setSentenceIndex(curr => Math.max(0, curr - 1)), []);
  const goForward = useCallback(() => setSentenceIndex(curr => Math.min(sentences.length - 1, curr + 1)), []);

  const increaseReadingSpeed = useCallback(() => {
    setReadingSpeed(curr => {
      const newValue = curr + 0.2;
      setMessage(`Reading speed: ${newValue.toFixed(1)}`);
      return newValue;
    });
  }, []);
  const decreaseReadingSpeed = useCallback(() => {
    setReadingSpeed(curr => {
      const newValue = Math.max(0.2, curr - 0.2);
      setMessage(`Reading speed: ${newValue.toFixed(1)}`);
      return newValue;
    });
  }, []);

  const toggleSearch = useCallback(() => setIsSearchVisible(curr => !curr), []);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "KeyS" && event.metaKey) {
        event.preventDefault();
        setIsSearchVisible(curr => !curr);
        return;
      }
      if (isSearchVisible) return;
      if (event.key === "ArrowRight" || event.key === " ") goForward();
      if (event.key === "ArrowLeft") goBack();
      if (event.key === "ArrowUp") increaseReadingSpeed();
      if (event.key === "ArrowDown") decreaseReadingSpeed();
    },
    [decreaseReadingSpeed, increaseReadingSpeed, goBack, goForward, isSearchVisible],
  );

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
        <div className="no-text-shadow h-8 cursor-default rounded bg-white bg-opacity-50 text-base text-neutral-900">
          <button
            className="h-8 w-8 cursor-pointer rounded bg-white bg-opacity-50 transition-all hover:bg-opacity-100"
            onClick={decreaseReadingSpeed}
          >
            -
          </button>
          <span className="inline-block px-4 text-sm">Reading Speed</span>
          <button
            className="h-8 w-8 cursor-pointer rounded bg-white bg-opacity-50 transition-all hover:bg-opacity-100"
            onClick={increaseReadingSpeed}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={toggleSearch}
        className="fixed right-5 top-5 h-8 w-8 text-2xl opacity-30 transition-all hover:opacity-100"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <div className="flex h-full content-center overflow-auto px-safe">
        <Message message={message} setMessage={setMessage} />
        <Paragraph readingSpeed={readingSpeed} sentenceIndex={sentenceIndex} sentences={sentences} />
      </div>

      <div className="fixed bottom-0 top-0 flex flex-wrap content-center left-safe lg:hidden">
        <button
          className="px-1 py-4 text-7xl opacity-50 transition-all hover:opacity-100 focus:opacity-50"
          onClick={goBack}
        >
          &lsaquo;
        </button>
      </div>
      <div className="fixed bottom-0 top-0 flex flex-wrap content-center right-safe lg:hidden">
        <button
          className="px-1 py-4 text-7xl opacity-50 transition-all hover:opacity-100 focus:opacity-50"
          onClick={goForward}
        >
          &rsaquo;
        </button>
      </div>

      <Search
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
