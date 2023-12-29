import type { APIWord } from '../types';

export async function getAllWordsFromDatabase(DB: D1Database): Promise<string[]> {
	try {
		const { results } = await DB.prepare('SELECT word FROM past_words')
			.bind()
			.all();

		return results.map(({ word }: APIWord) => word);
	} catch (error) {
		console.error(error);

		return [];
	}
}
