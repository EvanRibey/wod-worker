import {
	convertTimeZone,
  getAllWordsFromDatabase,
  getDataMuseWords,
  getWordFromDatabase,
  getWordLength,
  insertWordIntoDatabase,
  setToMidnight,
} from './utils/';
import type { Env } from './types';

export default {
	async fetch({ method, cf }: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (method !== 'GET') return new Response('Forbidden', { status: 403 });

		const { timezone } = cf || {};

		const currentDate = setToMidnight(convertTimeZone(new Date(), String(timezone)));
		let wordFromDatabase = await getWordFromDatabase(env.DB, currentDate);

		if (!wordFromDatabase) {
			const wordLength = getWordLength(currentDate);
			const results = await getDataMuseWords(wordLength);

			const allWords = await getAllWordsFromDatabase(env.DB);

			const { word, tags, defs } = results.find(({ word: museWord }) => !allWords.includes(museWord)) || {};

			insertWordIntoDatabase(
				env.DB,
				currentDate,
				word,
				defs,
				tags.slice(tags.length - 1)[0],
				tags.slice(0, tags.length - 1),
			);
		}

		return new Response(JSON.stringify(wordFromDatabase), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
	},
};
