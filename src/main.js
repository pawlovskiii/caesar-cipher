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

// module for testing
module.exports = caesar13;

// connecting to the HTML page
const showEncryptedMessage = () => {
	const inputText = document.querySelector('.message-place').value;
	const displayOutputText = document.querySelector('.display-output-text');
	if (inputText.match(/[a-zA-Z]/g)) {
		displayOutputText.textContent = caesar13(inputText);
	} else {
		alert('Input must be a string and must not be empty.');
	}
};

const resetDisplayedText = () => {
	document.querySelector('.message-place').value = '';
	document.querySelector('.display-output-text').value = '';
	document.querySelector('.display-output-text').textContent = '';
};

window.addEventListener('load', function () {
	this.document.querySelector('#btn-encrypt-script').addEventListener('click', showEncryptedMessage);
});

window.addEventListener('load', function () {
	this.document.querySelector('#btn-reset-script').addEventListener('click', resetDisplayedText);
});
