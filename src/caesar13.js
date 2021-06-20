const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesar13(input) {
	if (typeof input !== 'string' || input === '') {
		throw Error('Input must be a string and must not be empty.');
	}
	const splittedInput = [...input];
	const shiftedInput = [];
	for (let i = 0; i < splittedInput.length; i++) {
		if (lowerCaseAlphabet.indexOf(splittedInput[i]) !== -1) {
			if (lowerCaseAlphabet.indexOf(splittedInput[i]) + 13 < 26) {
				shiftedInput.push(
					lowerCaseAlphabet.charAt(
						lowerCaseAlphabet.indexOf(splittedInput[i]) + 13,
					),
				);
			} else {
				shiftedInput.push(lowerCaseAlphabet.charAt(
					lowerCaseAlphabet.indexOf(splittedInput[i]) + 13 - 26,
				));
			}
		} else if (upperCaseAlphabet.indexOf(splittedInput[i]) !== -1) {
			if (upperCaseAlphabet.indexOf(splittedInput[i]) + 13 < 26) {
				shiftedInput.push(
					upperCaseAlphabet.charAt(upperCaseAlphabet.indexOf(splittedInput[i]) + 13),
				);
			} else {
				shiftedInput.push(upperCaseAlphabet.charAt(
					upperCaseAlphabet.indexOf(splittedInput[i]) + 13 - 26,
				));
			}
		} else {
			shiftedInput.push(splittedInput[i]);
		}
	}
	return shiftedInput.join('');
}

// module for testing
module.exports = caesar13;
