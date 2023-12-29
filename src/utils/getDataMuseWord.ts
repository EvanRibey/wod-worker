import { DATA_MUSE_URL } from '../constants';
import type { APIMuseWord } from '../types';

export async function getDataMuseWords(length: number): Promise<APIMuseWord[]> {
	const url = new URL(DATA_MUSE_URL);
	const params = new URLSearchParams(url.search);
	const wordLength = new Array(length + 1).join('?');

	params.append('sp', wordLength);
	url.search = params.toString();

	try {
		const results = await fetch(url.href);
		const jsonResults: APIMuseWord[] = await results.json();

		return jsonResults;
	} catch (error) {
		console.error(error);

		return [];
	}
}
