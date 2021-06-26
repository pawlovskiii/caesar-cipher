const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const caesar13 = (input) => {
	if (typeof input !== 'string' || input === '') throw Error('Input must be a string and must not be empty.');
	const ROTATION = 13;

	const splittedInput = [...input];
	const encryptedResult = splittedInput.map((item) => {
		const charIndexInAlphabet = alphabet.indexOf(item.toLowerCase());
		if (charIndexInAlphabet === -1) return item;
		const newCharPosition = (charIndexInAlphabet + ROTATION) % 26;

		return item === item.toUpperCase()
			? alphabet.charAt(newCharPosition).toUpperCase()
			: alphabet.charAt(newCharPosition);
	});
	return encryptedResult.join('');
};

export { caesar13 };
