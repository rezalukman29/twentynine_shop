import {Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const SHADOWS = {
  light: {
    shadowOffset: {width: 0, height: 0.9},
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 1.22,
  },
  medium: {
    shadowOffset: {width: 4, height: 7},
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOpacity: 1,
    shadowRadius: 6.22,
  },
  dark: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  default: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 4,
  },
};
