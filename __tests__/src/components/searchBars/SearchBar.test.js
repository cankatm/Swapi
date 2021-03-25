import React from 'react';
import { create } from 'react-test-renderer';

import { SearchBar } from '../../../../src/components/searchBars';

describe('SearchBar', () => {
  test('should called with value when onChangeText called', () => {
    const onChangeTextMock = jest.fn();
    const tree = create(<SearchBar onChangeText={onChangeTextMock} />);
    const textInput = tree.root.findByProps({ testID: 'searchBar' }).props;
    textInput.onChangeText('text changed!');

    expect(onChangeTextMock).toHaveBeenCalledWith('text changed!');
  });
});
