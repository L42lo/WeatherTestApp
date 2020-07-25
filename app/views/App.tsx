import React from 'react';
import {SafeAreaView, Text, StatusBar, TextInput, View} from 'react-native';
import {appStyles} from './app-styles';
import WeatherIcon from '../components/weather-icon/weather-icon';
import {WeatherDataInterface} from '../interfaces/weather-data-interface';
import ApiService from '../services/API/api';
import {ApiConfig} from '../services/API/api.config';

declare const global: {HermesInternal: null | {}};

type State = {
  city: string;
  weatherData?: WeatherDataInterface;
};

class App extends React.Component<{}, State> {
  api: ApiService;
  state: State = {
    city: 'Budapest',
  };
  constructor(props: {}) {
    super(props);
    this.api = new ApiService(ApiConfig);
  }
  componentDidMount() {
    this.getWeather();
  }
  async getWeather() {
    if (this.state.city && this.state.city !== '') {
      const data:
        | WeatherDataInterface
        | string = await this.api.getWeatherForLocation(this.state.city);
      this.setState({
        weatherData: data as WeatherDataInterface,
      });
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={appStyles.container}>
          <View>
            <View>
              <TextInput value={this.state.city} />
            </View>
            <View>
              <Text>{this.state.weatherData?.main.temp} C°</Text>
            </View>
            <WeatherIcon icon={this.state.weatherData?.weather[0].icon} />
            <Text>{this.state.weatherData?.weather[0].description}</Text>
            <View>
              <View>
                <Text>Clouds {this.state.weatherData?.clouds.all}%</Text>
              </View>
              <View>
                <Text>Wind {this.state.weatherData?.wind.speed} km/h</Text>
              </View>
              <View>
                <Text>Humidity {this.state.weatherData?.main.humidity}</Text>
              </View>
            </View>
            <View>
              <Text>other info</Text>
              <View>
                <Text>Wind direction</Text>
                <Text>{this.state.weatherData?.wind.deg}</Text>
              </View>
              <View>
                <Text>Pressure</Text>
                <Text>{this.state.weatherData?.main.pressure}</Text>
              </View>
              <View>
                <Text>Min</Text>
                <Text>{this.state.weatherData?.main.temp_min}C°</Text>
              </View>
              <View>
                <Text>Max</Text>
                <Text>{this.state.weatherData?.main.temp_max}C°</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
