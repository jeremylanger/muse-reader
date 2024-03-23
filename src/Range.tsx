interface Props {
	sentenceIndex: number;
	sentencesLength: number;
	setSentenceIndex: (sentenceIndex: number) => void;
}

export const Range = ({ sentenceIndex, sentencesLength, setSentenceIndex }: Props) => {
	const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => setSentenceIndex(+event.target.value);

	return (
		<div className="group fixed bottom-0 left-0 right-0 h-2 hover:h-4 z-10 transition-all">
			<input type="range" className="peer block appearance-none w-full h-full bg-[rgba(255,255,255,0.25)] rounded-md outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 group-hover:[&::-webkit-slider-thumb]:h-4 group-hover:[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgba(255,255,255,0.5)] cursor-pointer" max={sentencesLength - 1} value={sentenceIndex} onChange={handleRangeChange} />
			<div className="hidden peer-hover:block peer-active:block text-base absolute bottom-4">
				<span className="inline-block" style={{ marginLeft: `${(sentenceIndex/sentencesLength)*100}vw` }}>{sentenceIndex}</span>
			</div>
		</div>
	);
}
