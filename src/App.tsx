import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";
import { openDuneEpub } from "./epubReader";

const chapters = await openDuneEpub();
const sentences = chapters?.flat() ?? [];

function App() {
  const savedSentenceIndex = +(localStorage.getItem("sentenceIndex") || 0);
  const [sentenceIndex, setSentenceIndex] = useState(savedSentenceIndex);

  const goBack = () => setSentenceIndex(curr => Math.max(0, curr - 1));
  const goForward = () => setSentenceIndex(curr => Math.min(sentences.length - 1, curr + 1));

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      goForward();
    }
    if (event.key === "ArrowLeft") {
      goBack();
    }
  }, []);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => setSentenceIndex(+event.target.value);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  useEffect(() => {
    localStorage.setItem("sentenceIndex", sentenceIndex.toString());
  }, [sentenceIndex]);

  const calculateDelay = (word: string) => {
    const basePause = 150;
    const wordLengthPause = word.length * 40;
    const commaPause = word.endsWith(",") ? 200 : 0;
    const endOfSentencePause = word.endsWith(";")
      || word.endsWith(".")
      || word.endsWith('."')
      || word.endsWith('.’')
      || word.endsWith('!')
      || word.endsWith('!"')
      || word.endsWith('!’')
      || word.endsWith('?')
      || word.endsWith('?"')
      || word.endsWith('?’')
      ? 350 : 0;
    const ellipsisPause = word.endsWith("…") ? 1000 : 0;

    return basePause + wordLengthPause + commaPause + endOfSentencePause + ellipsisPause;
  };

  const startOfItalicPhrase = (word: string) => word.startsWith("<em>");
  const endOfItalicPhrase = (word: string) => (word.endsWith("</em>") || word.endsWith("</em>,") || word.endsWith("</em>."));

  const getWordsFromElement = (el: Element) => {
    if (el.nodeName === "p") return formatParagraph(el.innerHTML);
    if (el.nodeName === "blockquote") {
      const paragraphs = Array.from(el.children).map((child: Element) => formatParagraph(child.innerHTML));
      return paragraphs.join("<br> ");
    }

    return el.innerHTML;
  };

  const formatParagraph = (paragraph: string) => paragraph
    .replaceAll("…", ". . .")
    .replaceAll(/<em xmlns=["'].*["']>/g, "<em>")
    .replaceAll(/<a xmlns=["'].*["'] id=["'].*["']><\/a>/g, "");

  let delay = 0;
  let italicMode = false;
  const words = getWordsFromElement(sentences[sentenceIndex]).split(" ").filter(x => x !== "");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-center text-white font-dm-serif p-8 text-2xl leading-normal sm:text-5xl sm:leading-tight">
      <div className="flex content-center h-full">
        <div className={`max-w-[800px] m-auto select-none node-${sentences[sentenceIndex].nodeName}`}>
          {words.map((word, i) => {
            let displayedWord = word;

            if (startOfItalicPhrase(word)) italicMode = true;
            if (italicMode) displayedWord = `<em>${word}</em>`;
            if (endOfItalicPhrase(word)) italicMode = false;

            const prevWord = i === 0 ? "" : words[i - 1];
            delay += calculateDelay(prevWord);

            return <NextWord key={`${sentenceIndex}-${i}-${word}`} delay={delay} word={displayedWord} />;
          })}
        </div>
      </div>

      <div className="sm:hidden fixed left-0 top-0 bottom-0 flex flex-wrap content-center">
        <button className="text-5xl ml-1 opacity-50 hover:opacity-100 focus:opacity-50 transition-all" onClick={goBack}>&lsaquo;</button>
      </div>
      <div className="sm:hidden fixed right-0 top-0 bottom-0 flex flex-wrap content-center">
        <button className="text-5xl mr-1 opacity-50 hover:opacity-100 focus:opacity-50 transition-all" onClick={goForward}>&rsaquo;</button>
      </div>
      
      <div className="group fixed bottom-0 left-0 right-0 h-2 hover:h-4 z-10 transition-all">
        <input type="range" className="peer block appearance-none w-full h-full bg-[rgba(255,255,255,0.25)] rounded-md outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 group-hover:[&::-webkit-slider-thumb]:h-4 group-hover:[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgba(255,255,255,0.5)] cursor-pointer" max={sentences.length} value={sentenceIndex} onChange={handleRangeChange} />
        <div className="hidden peer-active:block text-base absolute bottom-4">
          <span className="inline-block" style={{ marginLeft: `${(sentenceIndex/sentences.length)*100}vw` }}>{sentenceIndex}</span>
        </div>
      </div>
    </div>
  );
}

export default App
