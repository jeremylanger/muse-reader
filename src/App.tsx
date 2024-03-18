import { useCallback, useEffect, useState } from "react";
import { NextWord } from "./NextWord";
import { openDuneEpub } from "./epubReader";

const chapters = await openDuneEpub();
console.log(chapters);
const sentences = chapters?.[8] ?? [];
const sentencesInAllChapters = chapters?.reduce((acc, curr) => acc + curr.length, 0) ?? 0;
console.log({ sentencesInAllChapters });

function App() {
  const savedSentenceIndex = +(localStorage.getItem("sentenceIndex") || 0);
  const [sentenceIndex, setSentenceIndex] = useState(savedSentenceIndex);

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
      <div className="fixed bottom-0 left-0 right-0 h-1">
        <div className="h-full bg-white opacity-50 transition-all rounded" style={{ width: `${(sentenceIndex / (sentences.length - 1)) * 100}%` }} />
      </div>
    </div>
  );
}

export default App
