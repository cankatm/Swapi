import { StyleSheet } from 'react-native';

import * as colors from '../../helpers/colors';
import * as defaults from '../../helpers/defaultValues';

export default StyleSheet.create({
  viewItemContainer: {
    width: defaults.WIDTH * 0.9,
    paddingVertical: 28,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: colors.blue,
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
  },
  viewItemButtonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewItemButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 16,
  },
});
