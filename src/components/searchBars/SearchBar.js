import React from 'react';
import { View, TextInput } from 'react-native';

import * as colors from '../../helpers/colors';
import styles from './styles';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        testID="searchBar"
        style={styles.searchBarTextInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Me"
        placeholderTextColor={colors.smoke}
        underlineColorAndroid={colors.transparent}
        selectionColor={colors.mistyOcean}
      />
    </View>
  );
};

export default SearchBar;
