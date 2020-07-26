import {StyleSheet} from 'react-native';
import Colors from '../modules/colors';

export const appStyles = StyleSheet.create({
  textNormal: {
    fontSize: 18,
    color: Colors.white,
  },
  textNormalBold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
  },
  textH1Bold: {
    fontWeight: 'bold',
    fontSize: 48,
    color: Colors.white,
  },
  textH2: {
    fontSize: 40,
    color: Colors.white,
  },
  textH3: {
    fontSize: 24,
    color: Colors.white,
  },
  textItalic: {
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
  },
  dayTimeContainer: {
    backgroundColor: Colors.dayTimeView,
  },
  nightTimeContainer: {
    backgroundColor: Colors.nightTimeView,
  },
});
