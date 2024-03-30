import { SearchResult } from "./types";

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
			if (child.nodeType === Node.TEXT_NODE) content += child.textContent?.replaceAll("…", ". . .");
			if (child.nodeType === Node.ELEMENT_NODE) content += ` <${child.nodeName}>${this.getWordsFromElement(child as Element)}</${child.nodeName}>`;
		}

		return content.trim();
	};

	static cleanText = (text?: string | null): string | undefined => text
		?.replaceAll(/[.,:;!?‘’“”–—()[\]{}<>«»„]/g, "")
		.replaceAll(/\s+/g, " ");

	// Could clean entire book first on load, store it, and then search would be faster
	static search = (elements: Element[], needle: string): SearchResult[] => {
		const results: SearchResult[] = [];

		needle = this.cleanText(needle)?.toLowerCase() || "";
		if (needle.length < 3) return results;

		for (let i = 0; i < elements.length; i++) {
			const el = elements[i];
			const text = this.cleanText(el.textContent)?.toLowerCase();
			const start = text?.indexOf(needle) ?? -1;
			if (start !== -1) {
				const end = start + needle.length - 1;

				results.push({
					sentenceIndex: i,
					start,
					end,
					el,
				});

				if (results.length === 5) break;
			}
		}

		return results;
	}
}
