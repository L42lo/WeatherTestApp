import React from 'react';
import {View, Text} from 'react-native';
import {appStyles} from '../app-styles';
import {styles} from './styles';

class LoadingView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[appStyles.textNormal, appStyles.textItalic]}>
          Loading...
        </Text>
      </View>
    );
  }
}

export default LoadingView;
