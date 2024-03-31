export interface SearchResult {
	sentenceIndex: number;
	start: number;
	end: number;
	matchedText?: string;
}

export interface Definition {
	partOfSpeech: string;
	definitions: string;
}
