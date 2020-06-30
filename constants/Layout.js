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

export const speechText = {
  fontSize: 50,
  textAlign: 'center',
  padding: 5,
  marginBottom: 5,
};

export const inputText = {
  borderColor: 'black',
  borderTopWidth: 1,
  borderBottomWidth: 1,
  textAlign: 'center',
  fontSize: 40,
  padding: 2,
  marginBottom: 10,
  width: '100%'
};