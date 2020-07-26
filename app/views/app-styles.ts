import {StyleSheet} from 'react-native';
import Colors from '../modules/colors';

export const appStyles = StyleSheet.create({
  textNormal: {
    fontSize: 18,
    color: 'white',
  },
  textNormalBold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  textH1Bold: {
    fontWeight: 'bold',
    fontSize: 48,
    color: 'white',
  },
  textH2: {
    fontSize: 40,
    color: 'white',
  },
  textH3: {
    fontSize: 24,
    color: 'white',
  },
  textItalic: {
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
  },
  dayTimeContainer: {
    backgroundColor: Colors.dayTimeColor,
  },
  nightTimeContainer: {
    backgroundColor: Colors.nightTimeColor,
  },
});
