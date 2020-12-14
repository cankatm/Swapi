import React, { useState, useEffect, useMemo } from 'react';
import { View, Image, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';

import { GET_ALL_LIST } from '../helpers/graphQueries';
import { SearchBar } from '../components/searchBars';
import { ViewItem } from '../components/viewItems';
import { FullScreen } from '../components/fullScreens';
import { sortArray } from '../utils';
import * as colors from '../helpers/colors';
import * as defaults from '../helpers/defaultValues';
import styles from './styles';

import errorImg from '../assets/images/error.png';
import loadingImg from '../assets/images/loading.gif';
import emptyImg from '../assets/images/empty.png';

const FieldsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [fetchData, setFetchData] = useState({});
  const [allVisibleData, setAllVisibleData] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_LIST, {
    onCompleted: setFetchData,
    fetchPolicy: 'cache-first',
  });

  if (loading)
    return (
      <FullScreen imgSource={loadingImg} backgroundColor={colors.loadingBlue} />
    );
  if (error) return <FullScreen imgSource={errorImg} />;

  const listData = sortArray(Object.values(fetchData).flat(Infinity));

  const onChangeText = (text) => {
    setSearchText(text);
    const allAvailableData = listData.filter(
      (data) =>
        data?.name?.toLowerCase().includes(text.toLowerCase()) ||
        data?.title?.toLowerCase().includes(text.toLowerCase()) ||
        data?.__typename?.toLowerCase().includes(text.toLowerCase()),
    );

    setAllVisibleData(allAvailableData);
  };
  const renderItem = ({ item }) => <ViewItem item={item} />;

  return (
    <View style={styles.fieldsScreenContainer}>
      <SearchBar
        value={searchText}
        onChangeText={(text) => onChangeText(text)}
      />

      <FlatList
        data={
          allVisibleData.length || searchText.length
            ? allVisibleData.sort()
            : listData.sort()
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={{ height: 100 }} />}
        ListEmptyComponent={
          <View>
            <Image
              source={emptyImg}
              style={{
                width: defaults.WIDTH,
                height: defaults.WIDTH,
              }}
              resizeMode="contain"
            />
          </View>
        }
      />
    </View>
  );
};

export default FieldsScreen;
