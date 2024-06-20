import { NextWord } from ".";
import { Reader } from "../reader";

interface Props {
  readingSpeed: number;
  sentenceIndex: number;
  sentences: Element[];
}

export const Paragraph = ({ readingSpeed, sentenceIndex, sentences }: Props) => {
  let delay = 0;
  let italicMode = false;
  const words = Reader.getWordsFromElement(sentences[sentenceIndex])
    .split(" ")
    .filter(x => x !== "");

  return (
    <div className={`m-auto max-w-[800px] select-none node-${sentences[sentenceIndex].nodeName}`}>
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
  );
};
