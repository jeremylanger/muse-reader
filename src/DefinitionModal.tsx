import { Definition } from "./types";

interface Props {
	definitions: Definition[];
	word: string;
	setDefinitions: (definitions: Definition[] | undefined) => void;
}

export const DefinitionModal = ({ definitions, setDefinitions, word }: Props) => {
	const handleClick = () => {
		setDefinitions(undefined);
	};

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10" onClick={handleClick}>
			<div className="text-xl relative max-w-[600px] m-auto bg-neutral-800 shadow-lg py-4 px-5">
				<button onClick={handleClick} className="absolute right-3.5 top-2">&#x2715;</button>
				<div className="space-y-2">
					{definitions.map((curr, i) => (
						<div key={`${i}-${word}`} className="text-left flex">
							<div className="mr-2 shrink-0">{curr.partOfSpeech}: </div>
							<div>{curr.definitions}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}