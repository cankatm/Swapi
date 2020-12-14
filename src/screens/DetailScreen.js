import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';

import * as GraphQueries from '../helpers/graphQueries';
import { FullScreen } from '../components/fullScreens';
import { ViewItem } from '../components/viewItems';
import * as colors from '../helpers/colors';
import styles from './styles';

import errorImg from '../assets/images/error.png';
import loadingImg from '../assets/images/loading.gif';

const DetailScreen = ({ route }) => {
  const { itemID: ID, typeName } = route.params;
  const { loading, error, data } = useQuery(
    GraphQueries[`GET_${typeName}_DETAIL`],
    {
      fetchPolicy: 'cache-first',
      variables: { ID },
    },
  );

  if (loading)
    return (
      <FullScreen imgSource={loadingImg} backgroundColor={colors.loadingBlue} />
    );
  if (error) return <FullScreen imgSource={errorImg} />;

  return (
    <View style={styles.detailScreenContainer}>
      <ViewItem isDetailed={true} item={data[typeName.toLowerCase()]} />
    </View>
  );
};

export default DetailScreen;
