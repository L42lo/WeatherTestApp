import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from './styles';
import {appStyles} from '../../views/app-styles';

type Props = {
  cityName: string;
  onSelect: (cityName: string) => void;
};

class DefaultCityLocation extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.onCityPress = this.onCityPress.bind(this);
  }

  onCityPress() {
    this.props.onSelect(this.props.cityName);
  }
  render() {
    return (
      <Pressable style={styles.container} onPress={this.onCityPress}>
        <Text style={appStyles.textNormalBold}>{this.props.cityName}</Text>
      </Pressable>
    );
  }
}

export default DefaultCityLocation;
