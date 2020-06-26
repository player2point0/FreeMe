import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export const centeredContainer = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};