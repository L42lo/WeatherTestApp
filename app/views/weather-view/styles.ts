import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
