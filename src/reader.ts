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

	static formatParagraph = (paragraph: string) => paragraph
		.replaceAll("…", ". . .")
		.replaceAll(/<em xmlns=["'].*["']>/g, "<em>")
		.replaceAll(/<a xmlns=["'].*["'] id=["'].*["']><\/a>/g, "");

	static getWordsFromElement = (el: Element): string => {
		if (el.nodeName === "p") return this.formatParagraph(el.innerHTML);
		if (el.nodeName === "blockquote") {
			const paragraphs = Array.from(el.children).map((child: Element) => this.formatParagraph(child.innerHTML));
			return paragraphs.join("<br> ");
		}

		return el.innerHTML;
	};
}
