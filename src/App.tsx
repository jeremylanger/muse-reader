import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";
import { openDuneEpub } from "./epubParser";
import { Reader } from "./reader";
import { Message } from "./Message";
import { Range } from "./Range";
import { Search } from "./Search";

const chapters = await openDuneEpub();
console.log({ chapters });
const sentences = chapters?.flat() ?? [];

function App() {
  const [readingSpeed, setReadingSpeed] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const s = parseFloat(params.get('s') ?? '1');
    return Math.max(0.2, s);
  });
  const [sentenceIndex, setSentenceIndex] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get('p') ?? '0');
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

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.code === 'KeyS' && event.metaKey) {
      event.preventDefault();
      setIsSearchVisible(curr => !curr);
      return;
    }
    if (isSearchVisible) return;
    if (event.key === "ArrowRight" || event.key === " ") goForward();
    if (event.key === "ArrowLeft") goBack();
    if (event.key === "ArrowUp") increaseReadingSpeed();
    if (event.key === "ArrowDown") decreaseReadingSpeed();
  }, [decreaseReadingSpeed, increaseReadingSpeed, goBack, goForward, isSearchVisible]);

  const saveUrlParam = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    window.history.pushState({}, '', `?${params.toString()}`);
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

  let delay = 0;
  let italicMode = false;
  const words = Reader.getWordsFromElement(sentences[sentenceIndex]).split(" ").filter(x => x !== "");

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-center text-white font-dm-serif p-8 text-2xl leading-normal sm:text-5xl sm:leading-tight">
      <div className="opacity-30 hover:opacity-100 transition-all flex justify-center -mt-3">
        <div className="text-neutral-900 text-base bg-white bg-opacity-50 no-text-shadow rounded cursor-default">
          <button className="bg-white bg-opacity-50 h-8 w-8 rounded cursor-pointer hover:bg-opacity-100 transition-all" onClick={decreaseReadingSpeed}>-</button>
          <span className="inline-block px-4 text-sm">Reading Speed</span>
          <button className="bg-white bg-opacity-50 h-8 w-8 rounded cursor-pointer hover:bg-opacity-100 transition-all" onClick={increaseReadingSpeed}>+</button>
        </div>
      </div>
      <div className="flex content-center h-full overflow-auto">
        <Message message={message} setMessage={setMessage} />
        <div className={`max-w-[800px] m-auto select-none node-${sentences[sentenceIndex].nodeName}`}>
          {words.map((word, i) => {
            let displayedWord = word;

            if (Reader.startOfItalicPhrase(word)) italicMode = true;
            if (italicMode) displayedWord = `<em>${word}</em>`;
            if (Reader.endOfItalicPhrase(word)) italicMode = false;

            const prevWord = i === 0 ? "" : words[i - 1];
            delay += Reader.calculateDelay(prevWord, readingSpeed);

            return <NextWord key={`${sentenceIndex}-${i}-${word}`} delay={delay} word={displayedWord} />;
          })}
        </div>
      </div>

      <div className="lg:hidden fixed left-0 top-0 bottom-0 flex flex-wrap content-center">
        <button className="text-7xl py-4 px-1 opacity-50 hover:opacity-100 focus:opacity-50 transition-all" onClick={goBack}>&lsaquo;</button>
      </div>
      <div className="lg:hidden fixed right-0 top-0 bottom-0 flex flex-wrap content-center">
        <button className="text-7xl py-4 px-1 opacity-50 hover:opacity-100 focus:opacity-50 transition-all" onClick={goForward}>&rsaquo;</button>
      </div>

      <Search isVisible={isSearchVisible} setIsSearchVisible={setIsSearchVisible} sentences={sentences} setSentenceIndex={setSentenceIndex} />
      
      <Range sentenceIndex={sentenceIndex} sentencesLength={sentences.length} setSentenceIndex={setSentenceIndex} />
    </div>
  );
}

export default App
