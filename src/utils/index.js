export const prettyText = (text) =>
  Array.isArray(text)
    ? text.length
      ? text.join(', ')
      : '-'
    : text?.toString() || '-';

export const sortArray = (arr) =>
  arr.sort((a, b) =>
    a.__typename > b.__typename
      ? 1
      : b.__typename > a.__typename
      ? -1
      : a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0,
  );
