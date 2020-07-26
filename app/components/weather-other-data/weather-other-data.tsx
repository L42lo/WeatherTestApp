import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {appStyles} from '../../views/app-styles';

type Props = {
  detailName: string;
  value?: string | number;
};

class WeatherOtherData extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={appStyles.textNormal}>{this.props.detailName}</Text>
        <Text style={appStyles.textNormalBold}>{this.props.value}</Text>
      </View>
    );
  }
}

export default WeatherOtherData;
