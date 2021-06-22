const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesar13(input) {
	if (typeof input !== 'string' || input === '') {
		throw Error('Input must be a string and must not be empty.');
	}
	const splittedInputToArray = [...input];
	const shiftedOutputArray = [];
	for (let i = 0; i < splittedInputToArray.length; i++) {
		const indexLowerCaseAlphabetFromInput = lowerCaseAlphabet.indexOf(
			splittedInputToArray[i],
		);
		const indexUpperCaseAlphabetFromInput = upperCaseAlphabet.indexOf(
			splittedInputToArray[i],
		);
		if (indexLowerCaseAlphabetFromInput !== -1) {
			if (indexLowerCaseAlphabetFromInput + 13 < 26) {
				shiftedOutputArray.push(
					lowerCaseAlphabet.charAt(indexLowerCaseAlphabetFromInput + 13),
				);
			}
			shiftedOutputArray.push(
				lowerCaseAlphabet.charAt(indexLowerCaseAlphabetFromInput + 13 - 26),
			);
		} else if (indexUpperCaseAlphabetFromInput !== -1) {
			if (indexUpperCaseAlphabetFromInput + 13 < 26) {
				shiftedOutputArray.push(
					upperCaseAlphabet.charAt(indexUpperCaseAlphabetFromInput + 13),
				);
			}
			shiftedOutputArray.push(
				upperCaseAlphabet.charAt(indexUpperCaseAlphabetFromInput + 13 - 26),
			);
		} else {
			shiftedOutputArray.push(splittedInputToArray[i]);
		}
	}
	return shiftedOutputArray.join('');
}

// module.exports = caesar13;
export default caesar13;
