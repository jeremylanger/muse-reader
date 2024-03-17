import { useEffect, useState } from "react";

interface Props {
	delay: number;
	word: string;
}

export const NextWord = ({ delay, word }: Props) => {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true);
		}, delay);
	}, [delay]);

	return <>
		<span className={`${fadeIn ? "opacity-100" : "opacity-0"} duration-500 mr-3 transition-opacity inline-block`} dangerouslySetInnerHTML={{__html: word}} />
		{word.endsWith("<br>") && <br />}
	</>;
}