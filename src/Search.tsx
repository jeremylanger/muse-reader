import { useEffect, useRef, useState } from "react";
import { Reader } from "./reader";
import { SearchResult } from "./types";
import { SearchResultItem } from "./SearchResultItem";

interface Props {
	isVisible: boolean;
	sentences: Element[];
	setIsSearchVisible: (isVisible: boolean) => void;
	setSentenceIndex: (index: number) => void;
}

export const Search = ({ isVisible, sentences, setIsSearchVisible, setSentenceIndex }: Props) => {
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
		<div className="fixed w-full h-full top-0 left-0 z-10 bg-black bg-opacity-60">
			<div className="py-8 px-4">
				<input type="text" ref={ref} onChange={handleOnChange} className="bg-white bg-opacity-80 text-neutral-800 rounded px-5 py-2 mb-2" placeholder="search..." />
				<div className={`${results?.length ? "block" : "hidden"} text-xl max-w-[600px] m-auto text-left bg-neutral-800`}>
					{results?.map(result => (
						<SearchResultItem key={result.sentenceIndex} result={result} selectResult={selectResult} />
					))}
				</div>
			</div>
		</div>
	);
}