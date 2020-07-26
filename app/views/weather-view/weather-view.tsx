import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {WeatherDataInterface} from '../../interfaces/weather-data-interface';
import WeatherIcon from '../../components/weather-icon/weather-icon';
import WeatherOtherData from '../../components/weather-other-data/weather-other-data';
import WeatherSecondaryData from '../../components/weather-secondary-data/weather-secondary-data';
import Icons from '../../assets/icons';
import {appStyles} from '../app-styles';
import {styles} from './styles';

type Props = {
  city: string;
  weatherData?: WeatherDataInterface;
};

class WeatherView extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cityContainer}>
          <Text style={appStyles.textH2}>{this.props.city}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={[appStyles.textH3, appStyles.textItalic]}>
            {this.props.weatherData?.weather[0].description}
          </Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={appStyles.textH1Bold}>
            {Math.round(
              this.props.weatherData ? this.props.weatherData?.main.temp : 0,
            )}{' '}
            C°
          </Text>
        </View>
        <WeatherIcon icon={this.props.weatherData?.weather[0].icon} />
        <View style={styles.secondaryDataContainer}>
          <WeatherSecondaryData
            iconName={Icons.cloud}
            value={`${this.props.weatherData?.clouds.all}%`}
          />
          <WeatherSecondaryData
            iconName={Icons.wind}
            value={`${this.props.weatherData?.wind.speed} km/h`}
          />
          <WeatherSecondaryData
            iconName={Icons.humidity}
            value={`${this.props.weatherData?.main.humidity}`}
          />
        </View>
        <ScrollView contentContainerStyle={styles.otherDataContainer}>
          <WeatherOtherData
            detailName="Wind direction"
            value={this.props.weatherData?.wind.deg}
          />
          <WeatherOtherData
            detailName="Pressure"
            value={this.props.weatherData?.main.pressure}
          />
          <WeatherOtherData
            detailName="Maximum temp"
            value={`${Math.round(
              this.props.weatherData
                ? this.props.weatherData?.main.temp_max
                : 0,
            )}C°`}
          />
          <WeatherOtherData
            detailName="Minimum temp"
            value={`${Math.round(
              this.props.weatherData
                ? this.props.weatherData?.main.temp_min
                : 0,
            )}C°`}
          />
        </ScrollView>
      </View>
    );
  }
}

export default WeatherView;
