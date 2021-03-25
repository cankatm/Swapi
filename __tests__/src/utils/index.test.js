import { prettyText, sortArray } from '../../../src/utils';

describe('util prettyText function', () => {
  test('converts array to string', () => {
    const mockArray = ['array', 'to', 'string'];
    expect(prettyText(mockArray)).toBe('array, to, string');
  });

  test('converts empty array to -', () => {
    const mockArray = [];
    expect(prettyText(mockArray)).toBe('-');
  });

  test('converts empty string to -', () => {
    const mockString = '';
    expect(prettyText(mockString)).toBe('-');
  });

  test('returns same string if not empty', () => {
    const mockString = 'Not Empty';
    expect(prettyText(mockString)).toBe(mockString);
  });

  test('returns number as string if not empty', () => {
    const mockNumber = 8.3;
    expect(prettyText(mockNumber)).toBe(mockNumber.toString());
  });
});

describe('util sortArray function', () => {
  test('should return given array of objects as sorted by __typename: ', () => {
    const mockArray = [
      { __typename: 'Flying Bison' },
      { __typename: 'Lord Voldemort' },
      { __typename: 'Flying Bug' },
      { __typename: 'Darth Vader' },
    ];
    expect(sortArray(mockArray)).toEqual([
      { __typename: 'Darth Vader' },
      { __typename: 'Flying Bison' },
      { __typename: 'Flying Bug' },
      { __typename: 'Lord Voldemort' },
    ]);
  });
});
