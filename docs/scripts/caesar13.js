const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesar13(string, key) {
	if (typeof string !== 'string' || string === '') throw Error('Invalid input.');

	const encryptedResult = [...string].map((item) => {
		const charIndexInAlphabet = alphabet.indexOf(item.toLowerCase());
		if (charIndexInAlphabet === -1) return item;
		const newCharPosition = (charIndexInAlphabet + key) % 26;
		return item !== item.toUpperCase()
			? alphabet.charAt(newCharPosition)
			: alphabet.charAt(newCharPosition).toUpperCase();
	});
	return encryptedResult.join('');
}

export { caesar13 };
