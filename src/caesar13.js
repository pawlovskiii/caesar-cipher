function caesar13(input) {
	if (typeof input !== 'string') throw Error('input must be a string');
	const inputArr = input.split('');
	const alphabetLowerCase = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	const newArr = [];
	for (let i = 0; i < alphabetLowerCase.length; i++) {
		if (alphabetLowerCase.indexOf(inputArr[i]) >= 0) {
			newArr.push(alphabetLowerCase.indexOf(inputArr[i]));
		}
	}
	const tempArr = [];
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] + 13 > 26) {
			tempArr.push(newArr[i] + 13 - 26);
		} else if (newArr[i] + 13 === 26) {
			tempArr.push(newArr[i] * 0);
		} else {
			tempArr.push(newArr[i] + 13);
		}
	}
	const finalOutput = [];
	for (let i = 0; i < newArr.length; i++) {
		finalOutput.push(alphabetLowerCase[tempArr[i]]);
	}
	return finalOutput.join('');
}

// module for testing
module.exports = caesar13;
