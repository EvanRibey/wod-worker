export interface APIMuseWord {
	word: string,
	score: number,
	tags: string[],
	defs: string[],
}

export interface APIWord {
	word: string,
}

export interface APIWordOfDay {
	date: number,
	word: string,
	defintion: string[],
	sounds_like: string,
	part_of_speech: string[],
}

export interface Env {
	DB: D1Database,
}
