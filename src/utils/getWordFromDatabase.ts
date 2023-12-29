export async function getWordFromDatabase(DB: D1Database, date: Date): Promise<Record<string, unknown> | undefined> {
	try {
		const { results } = await DB.prepare('SELECT * FROM past_words WHERE date = ? LIMIT 1')
			.bind(date.valueOf())
			.all();

		if (!results?.length) return undefined;
		return results[0];
	} catch (error) {
		console.error(error);

		return undefined;
	}
}
