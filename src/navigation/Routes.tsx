import * as React from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import AppScreenStack from './StackNavigator';

function Routes() {
  return (
    <>
      <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
        <AppScreenStack />
      </NavigationContainer>
    </>
  );
}

export default Routes;
