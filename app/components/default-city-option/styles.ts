import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../modules/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 8,
    width: Dimensions.get('window').width * 0.5,
  },
});
