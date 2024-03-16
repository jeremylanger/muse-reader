import { useEffect, useState } from "react";

interface Props {
	delay: number;
	word: string;
}

// Every time we change the word, we want to:
// Hide the new word instantly (opacity 0, no transition)
// Start fading it in right afterward (opacity 100, transition)
export const NextWord = ({ delay, word }: Props) => {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true);
		}, delay);
	}, []);

	return (
		<span className={`${fadeIn ? "opacity-100" : "opacity-0"} duration-500 mr-3 transition-opacity inline-block`} dangerouslySetInnerHTML={{__html: word}} />
	);
}