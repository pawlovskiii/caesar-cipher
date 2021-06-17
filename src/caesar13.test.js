const caesar13 = require('./caesar13');

test('should return the encrypted string shifted by 13 letters (lowerCase ONLY)', () => {
	expect(caesar13('przeprogramowani')).toBe('cemrcebtenzbjnav');
	expect(caesar13('blockchain')).toBe('oybpxpunva');
	expect(caesar13('kryptografia')).toBe('xelcgbtensvn');
});