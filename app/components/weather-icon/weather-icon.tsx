import React from 'react';
import {Image} from 'react-native';
import {OWM_ICON_URL} from '../../config';
import {weatherIconStyles} from './styles';

type Props = {
  icon: string;
};
class WeatherIcon extends React.Component<Props, {}> {
  static defaultProps: Props = {
    icon: '01d',
  };
  constructor(props: Props) {
    super(props);
  }
  render() {
    // if (!this.props.icon) {
    //   return null;
    // }
    return (
      <Image
        style={weatherIconStyles.weatherImage}
        source={{uri: `${OWM_ICON_URL}${this.props.icon}@4x.png`}}
      />
    );
  }
}

export default WeatherIcon;
