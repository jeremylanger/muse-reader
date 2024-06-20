interface Props {
  sentenceIndex: number;
  sentencesLength: number;
  setSentenceIndex: (sentenceIndex: number) => void;
}

export const Range = ({ sentenceIndex, sentencesLength, setSentenceIndex }: Props) => {
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => setSentenceIndex(+event.target.value);

  return (
    <div className="group fixed bottom-0 left-0 right-0 z-10 h-2 transition-all hover:h-4">
      <input
        type="range"
        className="peer block h-full w-full cursor-pointer appearance-none rounded-md bg-[rgba(255,255,255,0.25)] outline-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgba(255,255,255,0.5)] group-hover:[&::-webkit-slider-thumb]:h-4 group-hover:[&::-webkit-slider-thumb]:w-4"
        max={sentencesLength - 1}
        value={sentenceIndex}
        onChange={handleRangeChange}
      />
      <div className="absolute bottom-4 hidden text-base peer-hover:block peer-active:block">
        <span className="inline-block" style={{ marginLeft: `${(sentenceIndex / sentencesLength) * 100}vw` }}>
          {sentenceIndex}
        </span>
      </div>
    </div>
  );
};
