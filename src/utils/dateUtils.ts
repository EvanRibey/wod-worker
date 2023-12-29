export function convertTimeZone(date: Date, timeZone: string): Date {
	return new Date(
		new Date(date).toLocaleString('en-US', { timeZone }),
	);
}

export function setToMidnight(date: Date): Date {
	const clonedDate = new Date(date);
	clonedDate.setHours(0, 0, 0, 0);

	return clonedDate;
}
