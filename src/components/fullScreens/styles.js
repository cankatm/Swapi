import { StyleSheet } from 'react-native';

import * as colors from '../../helpers/colors';
import * as defaults from '../../helpers/defaultValues';

export default StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreenImage: {
    width: defaults.WIDTH * 0.9,
    height: defaults.HEIGHT * 0.9,
  },
});
