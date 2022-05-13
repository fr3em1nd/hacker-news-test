import React, { useState } from 'react'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { NewScreen } from '@hackernews/navigation/MainStack/screens/NewsScreen'

import AppLoading from 'expo-app-loading';
import useFonts from '@hackernews/hooks/useFonts';
import store from '@hackernews/redux/configureStore'
import { AppStackPages } from '@hackernews/navigation/MainStack/MainStack.types';
const Stack = createStackNavigator()


export default function App() {
  if (__DEV__) {
    import('./reactotron-config')

  }
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
    console.log('fonts loaded')
  };


  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="NewScreen"
            screenOptions={{ headerShown: false, animationEnabled: false }}
          >
            <Stack.Screen name={AppStackPages.NewScreen} component={NewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

