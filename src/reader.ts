export class Reader {
	static calculateDelay = (word: string, readingSpeed: number) => {
		const basePause = 150;
		const wordLengthPause = word.length * 40;
		const commaPause = word.endsWith(",") || word.endsWith("–") || word.endsWith(":") ? 200 : 0;
		const endOfSentencePause = word.endsWith(";")
			|| word.endsWith(".")
			|| word.endsWith('."')
			|| word.endsWith('.’')
			|| word.endsWith('!')
			|| word.endsWith('!"')
			|| word.endsWith('!’')
			|| word.endsWith('?')
			|| word.endsWith('?"')
			|| word.endsWith('?’')
			? 350 : 0;
		const ellipsisPause = word.endsWith("…") ? 1000 : 0;

		return (basePause + wordLengthPause + commaPause + endOfSentencePause + ellipsisPause) / readingSpeed;
	};

	static startOfItalicPhrase = (word: string) => word.startsWith("<em>");
	static endOfItalicPhrase = (word: string) => (word.endsWith("</em>") || word.endsWith("</em>,") || word.endsWith("</em>."));

	static getWordsFromElement = (el: Element): string => {
		let content = "";

		for (const child of el.childNodes) {
			if (child.nodeType === Node.TEXT_NODE) content += child.textContent as string;
			if (child.nodeType === Node.ELEMENT_NODE) content += ` <${child.nodeName}>${this.getWordsFromElement(child as Element)}</${child.nodeName}>`;
		}

		return content.trim();
	};
}
