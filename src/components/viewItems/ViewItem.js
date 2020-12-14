import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import * as colors from '../../helpers/colors';
import * as defaults from '../../helpers/defaultValues';
import { prettyText } from '../../utils';

const ViewItem = ({ item = {}, isDetailed = false }) => {
  const navigation = useNavigation();

  const renderContent = () => {
    if (!isDetailed) {
      return (
        <Text
          style={{ fontSize: 13, fontWeight: 'bold' }}
          testID="notDetailedText">
          {item?.__typename.toUpperCase()} - {item?.name || item?.title}
        </Text>
      );
    }
    return Object.keys(item).map((keyName) => {
      if (keyName !== '__typename') {
        return (
          <View
            key={keyName}
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              marginTop: 8,
              flexWrap: 'wrap',
            }}>
            <Text>{keyName.toUpperCase()}: </Text>
            <Text style={{ color: colors.smoke }} testID="detailPrettyText">
              {prettyText(item[keyName])}
            </Text>
          </View>
        );
      }
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
      }}>
      <View
        style={[styles.viewItemContainer, { marginTop: isDetailed ? 0 : 16 }]}>
        {renderContent()}
        <View style={styles.viewItemButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              isDetailed
                ? navigation.goBack()
                : navigation.navigate('DetailScreen', {
                    typeName: item?.__typename.toUpperCase(),
                    itemID: item.id,
                  })
            }>
            <View
              style={[
                styles.viewItemButton,
                { backgroundColor: isDetailed ? colors.blue : colors.red },
              ]}>
              <Text
                testID="viewItemButtonText"
                style={{
                  fontSize: 16,
                  color: colors.white,
                  fontWeight: 'bold',
                }}>
                {isDetailed ? 'Go Back' : 'Details'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewItem;
