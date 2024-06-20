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

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setResults(Reader.search(sentences, text));
  };

  const handleOnBackgroundClick = () => setIsSearchVisible(false);

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
    <div className="fixed left-0 top-0 z-10 h-full w-full">
      <button
        className="fixed inset-0 -z-10 bg-black bg-opacity-60"
        onClick={handleOnBackgroundClick}
        aria-label="close"
      />
      <div className="px-4 py-8">
        <input
          type="text"
          ref={ref}
          onChange={handleOnInputChange}
          className="mb-2 rounded bg-white bg-opacity-80 px-5 py-2 text-neutral-800"
          placeholder="search..."
        />
        {ref.current && ref.current?.value.length >= 3 && (
          <div className={`m-auto max-w-[600px] bg-neutral-800 text-left text-xl`}>
            {results?.map(result => (
              <SearchResultItem key={result.sentenceIndex} result={result} selectResult={selectResult} />
            ))}
            {results?.length === 0 && <div className="p-4 text-center">No results found</div>}
          </div>
        )}
      </div>
    </div>
  );
};
