import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FieldsScreen, DetailScreen } from '../screens';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'FieldsScreen'}
      screenOptions={screenOptions}>
      <Stack.Screen name={'FieldsScreen'} component={FieldsScreen} />
      <Stack.Screen name={'DetailScreen'} component={DetailScreen} />
    </Stack.Navigator>
  );
};
