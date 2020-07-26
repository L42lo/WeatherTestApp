import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {appStyles} from './app-styles';

import {WeatherDataInterface} from '../interfaces/weather-data-interface';
import ApiService from '../services/API/api';
import {ApiConfig} from '../services/API/api.config';
import AsyncStorageService from '../services/async-storage-service/async-storage-service';
import WeatherView from './weather-view/weather-view';
import Colors from '../modules/colors';
import {isNightTime} from '../modules/utils/is-night-time';

declare const global: {HermesInternal: null | {}};

type State = {
  city: string;
  weatherData?: WeatherDataInterface;
  isNightTime: boolean;
};

class App extends React.Component<{}, State> {
  api: ApiService;
  state: State = {
    city: 'Budapest',
    isNightTime: true,
  };
  constructor(props: {}) {
    super(props);
    this.api = new ApiService(ApiConfig);
  }
  componentDidMount() {
    this.getWeather();
    this.getCityFromStorage();
    this.setIsNightTime();
  }
  static getDerivedStateFromProps(_props: {}, state: State) {
    console.log(state);
    return {
      isNightTime: isNightTime(
        state.isNightTime,
        state.weatherData?.weather[0].icon,
      ),
    };
  }
  async getCityFromStorage() {
    const storageData = await AsyncStorageService.getStringFromStorage('CITY');
    if (storageData) {
      this.setState({city: storageData});
    }
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
  setIsNightTime() {
    this.setState((state: State) => ({
      isNightTime: isNightTime(
        state.isNightTime,
        state.weatherData?.weather[0].icon,
      ),
    }));
  }

  render() {
    return (
      <>
        <StatusBar
          backgroundColor={
            this.state.isNightTime ? Colors.nightTimeColor : Colors.dayTimeColor
          }
          barStyle={'light-content'}
        />
        <SafeAreaView
          style={[
            appStyles.container,
            this.state.isNightTime
              ? appStyles.nightTimeContainer
              : appStyles.dayTimeContainer,
          ]}>
          <WeatherView
            city={this.state.city}
            weatherData={this.state.weatherData}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default App;
