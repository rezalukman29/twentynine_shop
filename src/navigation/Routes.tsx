import * as React from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import AppScreenStack from './StackNavigator';
import {useContext} from 'react';
import {ModalToastContext} from '../context/AppModalToastContext';
import {ModalToast} from '../components/molecules/ModalToast/ModalToast';

function Routes() {
  const {isShowToast, toastMessage, type, setIsShowToast} =
    useContext(ModalToastContext);
  return (
    <>
      <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
        <ModalToast
          isVisible={isShowToast}
          onCloseModal={() => {
            setIsShowToast(false);
          }}
          message={toastMessage}
          type={type}
        />
        <AppScreenStack />
      </NavigationContainer>
    </>
  );
}

export default Routes;
