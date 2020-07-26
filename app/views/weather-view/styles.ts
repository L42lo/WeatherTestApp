import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 44,
    justifyContent: 'flex-end',
    opacity: 0.3,
    position: 'absolute',
    width: Dimensions.get('window').width - 32,
    zIndex: 20,
  },
  editIcon: {
    height: 28,
    width: 28,
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tempContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryDataContainer: {
    height: Dimensions.get('screen').height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  otherDataContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 16,
  },
});
