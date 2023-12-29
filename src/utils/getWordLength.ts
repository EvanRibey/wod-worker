import { WORD_LENGTH_ADJUSTMENT, WORD_LENGTH_THURSDAY } from '../constants';

export function getWordLength(date: Date) {
	const dayOfWeek = date.getDay();
	if (!dayOfWeek) return WORD_LENGTH_THURSDAY;
	return dayOfWeek + WORD_LENGTH_ADJUSTMENT;
}
