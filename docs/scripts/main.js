import { caesar13 } from './caesar13.js';

const displayEncryptedText = document.querySelector('.display-output-text');
const inputTextMessage = document.querySelector('.input-message-text');
const btnReset = document.querySelector('#btn-reset');

function showEncryptedMessage() {
	const inputMessageValue = document.querySelector('.input-message-text').value;
	const keyShift = document.querySelector('.key-holder-input').value;
	if (inputMessageValue.match(/[a-zA-Z]/g)) {
		displayEncryptedText.innerText = caesar13(
			inputMessageValue,
			Number(keyShift)
		);
	} else {
		displayEncryptedText.innerText = 'Invalid input.';
	}
}

const resetDisplayedText = () => {
	document.querySelector('.input-message-text').value = '';
	document.querySelector('.display-output-text').value = '';
	document.querySelector('.display-output-text').textContent = '';
	document.querySelector('.key-holder-input').value = 0;
};

inputTextMessage.addEventListener('keyup', showEncryptedMessage);
btnReset.addEventListener('click', resetDisplayedText);
