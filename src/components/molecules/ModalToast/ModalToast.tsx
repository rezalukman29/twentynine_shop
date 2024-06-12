/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StatusBar,
  UIManager,
  View,
} from 'react-native';
import styled from 'styled-components';
import {WIDTH} from '../../../utils/config';
import Colors from '../../../theme/Color';
import {EntryAnimation, Section, Text} from '../../atom';

const ModalContainerStyled = styled(View)<{bgColor: string}>`
  align-items: center;
  background-color: ${props => props.bgColor};
  flex-direction: row;
  padding: 0px 20px;
`;

type ModalToastType = 'success' | 'error' | 'warning';

interface ModalToastProps {
  isVisible: boolean;
  message: string;
  type: ModalToastType;
  onCloseModal: () => void;
  isKeepOpen?: boolean;
}

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export function ModalToast({
  isVisible,
  message,
  type,
  onCloseModal,
}: ModalToastProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const modalBackgroundMapper: Record<ModalToastType, string> = {
    success: Colors['success-500'],
    error: Colors['danger-600'],
    warning: Colors['warning-500'],
  };

  useEffect(() => {
    if (isVisible) {
      onShow(true);
      setTimeout(() => {
        onCloseModal();
      }, 2000);
    } else {
      onShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const onShow = useCallback((show: boolean) => {
    LayoutAnimation.configureNext({
      duration: 500,
      update: {
        type: 'easeInEaseOut',
      },
    });
    setIsShow(show);
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={isVisible ? modalBackgroundMapper[type] : Colors.white}
      />

      <Section
        style={{
          position: 'absolute',
          zIndex: 50,
          top: 0,
          width: WIDTH,
        }}>
        <ModalContainerStyled
          bgColor={modalBackgroundMapper[type]}
          style={{height: isShow ? (Platform.OS === 'ios' ? 80 : 56) : 0}}>
          {isShow ? (
            <EntryAnimation index={0}>
              <Text
                color={Colors['white-100']}
                label={message}
                fontWeight="semi-bold"
                style={{top: Platform.OS === 'ios' ? 18 : 0}}
              />
            </EntryAnimation>
          ) : null}
        </ModalContainerStyled>
      </Section>
    </>
  );
}
