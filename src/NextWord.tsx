import { useEffect } from "react";

interface Props {
	word: string;
}

// Every time we change the word, we want to:
// Hide the new word instantly (opacity 0, no transition)
// Start fading it in right afterward (opacity 100, transition)
export const NextWord = ({ word }: Props) => {

	useEffect(() => {
		const span = document.getElementById("next-word");
		if (!span) return;

		span.style["transitionDuration"] = "0ms";
		span.style["opacity"] = "0%";

		setTimeout(() => {
			span.style["transitionDuration"] = "1000ms";
			span.style["opacity"] = "100%";
		}, 10);
	}, [word]);

	return (
		<span id="next-word" className="transition-opacity inline-block" dangerouslySetInnerHTML={{__html: word}} />
	);
}