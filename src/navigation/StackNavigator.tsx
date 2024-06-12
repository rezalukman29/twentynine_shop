import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RouteName} from '../interfaces/RouteName';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';
import {AppStackParams} from '../interfaces/AppStackParams';

const DjStack = createNativeStackNavigator<AppStackParams>();
function AppScreenStack() {
  return (
    <DjStack.Navigator
      initialRouteName={RouteName.HomeScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <DjStack.Screen name={RouteName.HomeScreen} component={HomeScreen} />
      <DjStack.Screen
        name={RouteName.ProductDetail}
        component={ProductDetail}
      />
    </DjStack.Navigator>
  );
}

export default AppScreenStack;
