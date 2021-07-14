import { caesar13 } from '../scripts/caesar13.js';

describe('Initial input validation', () => {
	test('should throw an error if the input is the wrong type', () => {
		expect(() => caesar13(123)).toThrow('Invalid input.');
		expect(() => caesar13([true, 234, 'a2d'])).toThrow('Invalid input.');
		expect(() => caesar13({ 1: 'Bit', 99: 'Fun' })).toThrow('Invalid input.');
	});
	test('should throw an error if the input is empty ', () => {
		expect(() => caesar13('')).toThrow('Invalid input.');
		expect(() => caesar13()).toThrow('Invalid input.');
	});
});

describe('Lower case only - latin letters', () => {
	test('should return shifted (ROT13) expression', () => {
		expect(caesar13('gas price ethereum', 13)).toBe('tnf cevpr rgurerhz');
		expect(caesar13('proof of work', 13)).toBe('cebbs bs jbex');
	});
});

describe('Upper case only - latin letters', () => {
	test('should return shifted (ROT13) expression', () => {
		expect(caesar13('DECENTRALIZED APPLICATION', 13)).toBe(
			'QRPRAGENYVMRQ NCCYVPNGVBA'
		);
	});
});

describe('Mix of lowerCased and upperCased - latin letters', () => {
	test('should return shifted (ROT13) expression', () => {
		expect(caesar13('Encrypt THis MeSSage', 13)).toBe('Rapelcg GUvf ZrFFntr');
	});
});

describe('Mix of latin letters and digits/special characters - {lowerCased only}', () => {
	test('should return shifted (ROT13) expression', () => {
		expect(caesar13('1test 2driven 3development !!!', 13)).toBe(
			'1grfg 2qevira 3qrirybczrag !!!'
		);
	});
});

describe('Mix of latin letters and digits/special characters - {upperCased only}', () => {
	test('should return shifted (ROT13) expression', () => {
		expect(caesar13('CRYPTO 999 CORP @#$ !@', 13)).toBe('PELCGB 999 PBEC @#$ !@');
	});
});

describe('Mix of latin letters and digits/special characters - {lowerCased and upperCased}', () => {
	test('should return shifted (ROT13) expression', () => {
		expect(caesar13('JeSt is fun to DO! !!@11', 13)).toBe('WrFg vf sha gb QB! !!@11');
	});
});