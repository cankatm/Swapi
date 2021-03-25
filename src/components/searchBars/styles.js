import { StyleSheet } from 'react-native';

import * as colors from '../../helpers/colors';
import * as defaults from '../../helpers/defaultValues';

export default StyleSheet.create({
  searchBarContainer: {
    width: defaults.WIDTH,
    alignItems: 'center',
  },
  searchBarTextInput: {
    width: defaults.WIDTH * 0.8,
    textAlign: 'center',
    borderBottomColor: colors.darkForest,
    borderBottomWidth: 2,
    fontSize: 18,
    padding: 12,
    color: colors.darkForest,
  },
});
