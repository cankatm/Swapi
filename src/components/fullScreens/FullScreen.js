import React from 'react';
import { View, Text, Image } from 'react-native';

import * as colors from '../../helpers/colors';
import styles from './styles';

const FullScreen = ({ imgSource, backgroundColor = colors.white }) => {
  return (
    <View style={[styles.fullScreenContainer, { backgroundColor }]}>
      <Image
        source={imgSource}
        style={styles.fullScreenImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default FullScreen;
