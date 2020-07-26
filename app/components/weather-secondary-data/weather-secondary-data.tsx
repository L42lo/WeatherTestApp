import React from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';
import {appStyles} from '../../views/app-styles';

type Props = {
  iconName: ImageSourcePropType;
  value?: string;
};

class WeatherSecondaryData extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={this.props.iconName} />
        <Text style={appStyles.textNormalBold}>{this.props.value}</Text>
      </View>
    );
  }
}

export default WeatherSecondaryData;
