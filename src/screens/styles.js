import { StyleSheet } from 'react-native';

import * as colors from '../helpers/colors';
import * as defaults from '../helpers/defaultValues';

export default StyleSheet.create({
  fieldsScreenContainer: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT,
    backgroundColor: colors.white,
  },
  detailScreenContainer: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT - 80,
    backgroundColor: colors.white,
  },
});
