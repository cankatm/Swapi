import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { MainNavigator } from './src/helpers/navigationStructure';
import { SWAPI_URI } from './src/helpers/defaultValues';

const client = new ApolloClient({
  uri: SWAPI_URI,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
