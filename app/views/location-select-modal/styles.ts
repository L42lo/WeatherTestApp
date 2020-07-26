import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../modules/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dayTimeBackground: {
    backgroundColor: Colors.dayTimeModal,
  },
  nightTimeBackground: {
    backgroundColor: Colors.nightTimeModal,
  },
  textInput: {
    borderBottomWidth: 1,
    height: 44,
    width: Dimensions.get('window').width * 0.6,
    marginBottom: 8,
    marginTop: 16,
    fontSize: 22,
    textAlign: 'center',
    color: Colors.white,
  },
  textInputBorderNormal: {
    borderBottomColor: Colors.white,
  },
  textInputBorderError: {
    borderBottomColor: Colors.red,
  },
  searchButton: {
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  defaultListContainer: {
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  closeIcon: {
    height: 24,
    width: 24,
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    position: 'absolute',
    top: 8,
    right: 8,
  },
});
