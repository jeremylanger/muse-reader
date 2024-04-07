import { SearchResult } from "./types";

interface Props {
	result: SearchResult;
	selectResult: (index: number) => void;
}

export const SearchResultItem = ({ result, selectResult }: Props) => {
	const handleClick = () => {
		selectResult(result.sentenceIndex);
	};

	const firstPart = result.matchedText?.slice(0, result.start) || "";
	const highlightedPart = result.matchedText?.slice(result.start, result.end + 1) || "";
	const lastPart = result.matchedText?.slice(result.end + 1) || "";

	return (
		<div key={`${result.sentenceIndex}-${result.matchedText}`} className="text-white drop-shadow-none bg-neutral-800 py-2 px-4 flex cursor-pointer hover:bg-neutral-600" onClick={handleClick}>
			<div className="w-12 inline-block shrink-0">{result.sentenceIndex}</div>
			<div>
				<span>{firstPart}</span>
				<mark className="no-text-shadow">{highlightedPart}</mark>
				<span>{lastPart}</span>
			</div>
		</div>
	);
}