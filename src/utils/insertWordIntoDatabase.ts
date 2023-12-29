export async function insertWordIntoDatabase(
	DB: D1Database,
	date: Date,
	word: string,
	definitions: string[],
	soundsLike: string,
	partOfSpeech: string[],
): Promise<boolean> {
	try {
		await DB.prepare(
			`INSERT INTO past_words (date, word, definition, sounds_like, part_of_speech)
			 VALUES (?, ?, ?, ?, ?)`
		)
			.bind(date.valueOf(), word, JSON.stringify(definitions), soundsLike, JSON.stringify(partOfSpeech))
			.all();

		return true;
	} catch (error) {
		console.error(error);

		return false;
	}
}
