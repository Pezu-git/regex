/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import Validator from '../js/Validator.js';

test('validname test', () => {
  const valid = new Validator('Netology-21_tesT');
  expect(valid.validateUsername()).toBe(true);
});
test('first_invalidname test', () => {
  function regexTest(testname) {
    // eslint-disable-next-line no-new
    new Validator(testname);
  }
  expect(() => {
    regexTest('Netology-2021_tesT');
  }).toThrow('Не подходящее имя');
});
test('second_invalidname test', () => {
  function regexTest(testname) {
    // eslint-disable-next-line no-new
    new Validator(testname);
  }
  expect(() => {
    regexTest('999etology-2021_tesT111');
  }).toThrow('Не подходящее имя');
});
test('third_invalidname test', () => {
  function regexTest(testname) {
    // eslint-disable-next-line no-new
    new Validator(testname);
  }
  expect(() => {
    regexTest('netology-2021_tesT111');
  }).toThrow('Не подходящее имя');
});
