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
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center" onClick={handleClick}>
      <div className="relative m-auto max-w-[600px] bg-neutral-800 px-5 py-4 text-xl shadow-lg">
        <button onClick={handleClick} className="absolute right-3.5 top-2">
          &#x2715;
        </button>
        <div className="space-y-2">
          {definitions.map((curr, i) => (
            <div key={`${i}-${word}`} className="flex text-left">
              <div className="mr-2 shrink-0">{curr.partOfSpeech}: </div>
              <div>{curr.definitions}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
