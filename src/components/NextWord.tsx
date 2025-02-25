import { useEffect, useState } from "react";
import { Definition } from "../types";
import { DefinitionModal } from ".";

interface Props {
  delay: number;
  word: string;
}

interface FreeDictionaryApiResponse {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio?: string;
  }[];
  origin: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }[];
}

export const NextWord = ({ delay, word }: Props) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [definitions, setDefinitions] = useState<Definition[] | undefined>();

  const handleClick = () => {
    const cleanedWord = word.replace(/<[^>]*>/g, "").replace(/[^a-zA-Z-]+/g, "");
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanedWord}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then((data: FreeDictionaryApiResponse[]) => {
        console.log(data);
        // TODO: add typing for this
        const meanings = data[0].meanings;
        const definitions: Definition[] = meanings.map(meaning => {
          const partOfSpeech = meaning.partOfSpeech;
          const definitions = meaning.definitions[0].definition;

          return { partOfSpeech, definitions };
        });
        setDefinitions(definitions);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, delay);
  }, [delay]);

  return (
    <>
      {definitions && <DefinitionModal definitions={definitions} setDefinitions={setDefinitions} word={word} />}
      <span
        onClick={handleClick}
        className={`${fadeIn ? "opacity-100" : "opacity-0"} mr-2 inline-block cursor-pointer rounded transition-opacity duration-500 hover:bg-white hover:bg-opacity-20 lg:mr-3`}
        dangerouslySetInnerHTML={{ __html: word }}
      />
      {word.endsWith("<br>") && <br />}
    </>
  );
};
