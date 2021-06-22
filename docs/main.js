const caesar13 = require('./caesar13');

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
