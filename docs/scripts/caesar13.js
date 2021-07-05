const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const caesar13 = (input) => {
	if (typeof input !== 'string' || input === '') throw Error('Invalid input.');
	const ROTATION = 13;

	const encryptedResult = [...input].map((item) => {
		const charIndexInAlphabet = alphabet.indexOf(item.toLowerCase());
		if (charIndexInAlphabet === -1) return item;
		const newCharPosition = (charIndexInAlphabet + ROTATION) % 26;
		return item !== item.toUpperCase()
			? alphabet.charAt(newCharPosition)
			: alphabet.charAt(newCharPosition).toUpperCase();
	});
	return encryptedResult.join('');
};

export { caesar13 };
