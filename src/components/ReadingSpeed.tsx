import { useCallback, useEffect } from "react";

interface Props {
  isSearchVisible: boolean;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setReadingSpeed: React.Dispatch<React.SetStateAction<number>>;
}

export const ReadingSpeed = ({ isSearchVisible, setMessage, setReadingSpeed }: Props) => {
  const increaseReadingSpeed = useCallback(() => {
    setReadingSpeed(curr => {
      const newValue = curr + 0.2;
      setMessage(`Reading speed: ${newValue.toFixed(1)}`);
      return newValue;
    });
  }, [setMessage, setReadingSpeed]);

  const decreaseReadingSpeed = useCallback(() => {
    setReadingSpeed(curr => {
      const newValue = Math.max(0.2, curr - 0.2);
      setMessage(`Reading speed: ${newValue.toFixed(1)}`);
      return newValue;
    });
  }, [setMessage, setReadingSpeed]);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (isSearchVisible) return;
      if (event.key === "ArrowUp") increaseReadingSpeed();
      if (event.key === "ArrowDown") decreaseReadingSpeed();
    },
    [decreaseReadingSpeed, increaseReadingSpeed, isSearchVisible],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
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
  );
};
