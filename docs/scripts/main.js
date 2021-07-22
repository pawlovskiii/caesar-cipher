import { caesar13 } from './caesar13.js';

const displayOutputText = document.querySelector('.display-output-text');
const btnEncrypt = document.querySelector('#btn-encrypt');
const btnReset = document.querySelector('#btn-reset');

function showEncryptedMessage() {
	const inputTextMessage = document.querySelector('.input-message-text').value;
	const keyShift = document.querySelector('.key-holder-input').value;
	if (inputTextMessage.match(/[a-zA-Z]/g)) {
		displayOutputText.innerText = caesar13(inputTextMessage, Number(keyShift));
	} else {
		displayOutputText.innerText = 'Invalid input.';
	}
};

const resetDisplayedText = () => {
	document.querySelector('.input-message-text').value = '';
	document.querySelector('.display-output-text').value = '';
	document.querySelector('.display-output-text').textContent = '';
	document.querySelector('.key-holder-input').value = 0;
};

btnEncrypt.addEventListener('click', showEncryptedMessage);
btnReset.addEventListener('click', resetDisplayedText);
