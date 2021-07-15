import { caesar13 } from './caesar13.js';

const showEncryptedMessage = () => {
	const inputText = document.querySelector('.message-place').value;
	const key = document.querySelector('.key-holder').value;
	const displayOutputText = document.querySelector('.display-output-text');
	if (inputText.match(/[a-zA-Z]/g)) {
		displayOutputText.textContent = caesar13(inputText, Number(key));
	} else {
		displayOutputText.textContent = 'Invalid input.';
	}
};

const resetDisplayedText = () => {
	document.querySelector('.message-place').value = '';
	document.querySelector('.display-output-text').value = '';
	document.querySelector('.display-output-text').textContent = '';
	document.querySelector('.key-holder').value = 0;
};

window.addEventListener('load', function () {
	this.document
		.querySelector('#btn-encrypt')
		.addEventListener('click', showEncryptedMessage);
});

// window.addEventListener('load', function () {
// 	this.document
// 		.querySelector('#btn-reset-script')
// 		.addEventListener('click', resetDisplayedText);
// });
