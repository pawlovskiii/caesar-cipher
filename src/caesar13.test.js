/* eslint-disable no-undef */
const caesar13 = require('./caesar13');

test('should throw an error if the input is the wrong type', () => {
	expect(() => caesar13(123)).toThrow('Input must be a string and must not be empty.');
	expect(() => caesar13([true, 234, 'a2d'])).toThrow('Input must be a string and must not be empty.');
	expect(() => caesar13({ 1: 'Bit', 99: 'Fun' })).toThrow('Input must be a string and must not be empty.');
});

test('should throw an error if called without an arg or if the input string is empty', () => {
	expect(() => caesar13()).toThrow('Input must be a string and must not be empty.');
	expect(() => caesar13('')).toThrow('Input must be a string and must not be empty.');
});

test('should return the encrypted string shifted by 13 letters (lowerCase ONLY)', () => {
	expect(caesar13('blockchain')).toBe('oybpxpunva');
	expect(caesar13('decentralized finance')).toBe('qrpragenyvmrq svanapr');
	expect(caesar13('cryptography')).toBe('pelcgbtencul');
});

test('should return the encrypted string shifted by 13 letters (lowerCase + numbers)', () => {
	expect(caesar13('tool 999')).toBe('gbby 999');
	expect(caesar13('657 caesar')).toBe('657 pnrfne');
	expect(caesar13('123cipher123')).toBe('123pvcure123');
	expect(caesar13('010Zeus 666Hades 009')).toBe('010Mrhf 666Unqrf 009');
});

test('should return the encrypted string shifted by 13 letters (upperCase ONLY)', () => {
	expect(caesar13('BITCOIN')).toBe('OVGPBVA');
	expect(caesar13('CAESAR SALAD RECIPE')).toBe('PNRFNE FNYNQ ERPVCR');
	expect(caesar13('DECENTRALIZED TRADING PROTOCOL')).toBe(
		'QRPRAGENYVMRQ GENQVAT CEBGBPBY',
	);
});

test('should return the encrypted string shifted by 13 letters (upperCase + numbers)', () => {
	expect(caesar13('123 MALACHITE')).toBe('123 ZNYNPUVGR');
	expect(caesar13('MOZILLA 007')).toBe('ZBMVYYN 007');
	expect(caesar13('18PUZZLE18')).toBe('18CHMMYR18');
});

test('should return the encrypted string shifted by 13 letters (lowerCase + upperCase)', () => {
	expect(caesar13('aPPliCaTiON')).toBe('nCCyvPnGvBA');
	expect(caesar13('ETHEreum')).toBe('RGURerhz');
});

test('should return the encrypted string shifted by 13 letters (lowerCase + upperCase + numbers)', () => {
	expect(caesar13('FLY12 emiRAtes55')).toBe('SYL12 rzvENgrf55');
	expect(caesar13('123Research 567 PLATFORM')).toBe('123Erfrnepu 567 CYNGSBEZ');
});
