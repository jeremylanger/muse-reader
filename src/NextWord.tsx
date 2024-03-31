import { useEffect, useState } from "react";

interface Props {
	delay: number;
	word: string;
}

export const NextWord = ({ delay, word }: Props) => {
	const [fadeIn, setFadeIn] = useState(false);

	const handleClick = () => {
		const cleanedWord = word.replace(/<[^>]*>/g, "").replace(/[^a-zA-Z-]+/g, "");
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanedWord}`, {
			method: "GET",
			headers: {
				"Accept": "application/json",
			}
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error));
	};

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true);
		}, delay);
	}, [delay]);

	return <>
		<span onClick={handleClick} className={`${fadeIn ? "opacity-100" : "opacity-0"} duration-500 mr-2 sm:mr-3 transition-opacity inline-block`} dangerouslySetInnerHTML={{__html: word}} />
		{word.endsWith("<br>") && <br />}
	</>;
}