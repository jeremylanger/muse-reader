import { useCallback, useEffect } from "react";

interface Props {
  isSearchVisible: boolean;
  setSentenceIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const GoBack = ({ isSearchVisible, setSentenceIndex }: Props) => {
  const goBack = useCallback(() => setSentenceIndex(curr => Math.max(0, curr - 1)), [setSentenceIndex]);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (isSearchVisible) return;
      if (event.key === "ArrowLeft") goBack();
    },
    [goBack, isSearchVisible],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div className="fixed bottom-0 top-0 flex flex-wrap content-center left-safe lg:pl-2">
      <button className="px-1 py-4 text-7xl opacity-50 transition-opacity hover:opacity-100" onClick={goBack}>
        &lsaquo;
      </button>
    </div>
  );
};
