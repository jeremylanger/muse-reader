import { useEffect, useRef, useState } from "react";
import { Reader } from "../reader";
import { SearchResult } from "../types";
import { SearchResultItem } from ".";

interface Props {
  isVisible: boolean;
  sentences: Element[];
  setIsSearchVisible: (isVisible: boolean) => void;
  setSentenceIndex: (index: number) => void;
}

export const SearchModal = ({ isVisible, sentences, setIsSearchVisible, setSentenceIndex }: Props) => {
  const [results, setResults] = useState<SearchResult[]>();
  const ref = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    setResults(Reader.search(sentences, text));
  };

  const selectResult = (index: number) => {
    setResults(undefined);
    setIsSearchVisible(false);
    setSentenceIndex(index);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isVisible]);

  if (!isVisible) return;

  return (
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-60">
      <div className="px-4 py-8">
        <input
          type="text"
          ref={ref}
          onChange={handleOnChange}
          className="mb-2 rounded bg-white bg-opacity-80 px-5 py-2 text-neutral-800"
          placeholder="search..."
        />
        <div
          className={`${results?.length ? "block" : "hidden"} m-auto max-w-[600px] bg-neutral-800 text-left text-xl`}
        >
          {results?.map(result => (
            <SearchResultItem key={result.sentenceIndex} result={result} selectResult={selectResult} />
          ))}
        </div>
      </div>
    </div>
  );
};
