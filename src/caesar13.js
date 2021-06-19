function caesar13(input) {
	if (typeof input !== 'string' || input === '') throw Error('Input must be a string and must not be empty.');
	return input;
}

// TESTING
console.log(caesar13('flashLoansBlockchain'));

// module for testing
module.exports = caesar13;
