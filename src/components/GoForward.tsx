import { useCallback, useEffect } from "react";

interface Props {
  isSearchVisible: boolean;
  sentencesLength: number;
  setSentenceIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const GoForward = ({ isSearchVisible, sentencesLength, setSentenceIndex }: Props) => {
  const goForward = useCallback(
    () => setSentenceIndex(curr => Math.min(sentencesLength - 1, curr + 1)),
    [sentencesLength, setSentenceIndex],
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (isSearchVisible) return;
      if (event.key === "ArrowRight" || event.key === " ") goForward();
    },
    [goForward, isSearchVisible],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div className="fixed bottom-0 top-0 flex flex-wrap content-center right-safe lg:pr-2">
      <button className="px-1 py-4 text-7xl opacity-50 transition-opacity hover:opacity-100" onClick={goForward}>
        &rsaquo;
      </button>
    </div>
  );
};
