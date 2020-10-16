/* eslint-disable no-console */

import Validator from '../app';

test('class Validator instanceof', () => {
  expect(new Validator('Name1_simple')).toBeInstanceOf(Validator);
});

test('class Validator - throw (wrong name)', () => {
  expect(() => {
    const validator = new Validator(10);
    console.log(validator);
  }).toThrowError(Error);
});

test('class Validator - throw (no name)', () => {
  expect(() => {
    const validator = new Validator();
    console.log(validator);
  }).toThrowError(Error);
});

test('class Validator', () => {
  expect(new Validator('User123')).toEqual({ username: 'User123' });
});

test.each([
  ['Маг', false],
  ['_Mag', false],
  ['Mag-', false],
  ['1Mag', false],
  ['Mag1234w', false],
  ['Mag_123-w', true],
  ['Mag-1w', true],
  ['Mag_1w', true],
  ['Mag12w', true],
  ['Mag', true],
])('Validator validateUsername', (name, expected) => {
  const validator = new Validator(name);
  const received = validator.validateUsername();
  expect(received).toBe(expected);
});
