import { SearchResult } from "./types";

interface Props {
	result: SearchResult;
	selectResult: (index: number) => void;
}

export const SearchResultItem = ({ result, selectResult }: Props) => {
	const handleClick = () => {
		selectResult(result.sentenceIndex);
	};

	return (
		<div key={`${result.sentenceIndex}-${result.el.textContent}`} className="text-white bg-neutral-800 py-2 px-4 flex cursor-pointer hover:bg-neutral-600" onClick={handleClick}>
			<div className="w-12 inline-block shrink-0">{result.sentenceIndex}</div>
			<div>{result.el.textContent}</div>
		</div>
	);
}