import React from 'react';
import {SafeAreaView, StatusBar, Alert, Text, View} from 'react-native';
import {appStyles} from './app-styles';

import {WeatherDataInterface} from '../interfaces/weather-data-interface';
import ApiService from '../services/API/api';
import {ApiConfig} from '../services/API/api.config';
import AsyncStorageService from '../services/async-storage-service/async-storage-service';
import WeatherView from './weather-view/weather-view';
import Colors from '../modules/colors';
import {isNightTime} from '../modules/utils/is-night-time';
import LocationSelectModal from './location-select-modal/location-select-modal';
import {DEFAULT_CITY_LIST, OWM_API_KEY} from '../config';
import StorageKeys from '../modules/storage-keys';

declare const global: {HermesInternal: null | {}};

type State = {
  city: string;
  weatherData?: WeatherDataInterface;
  isNightTime: boolean;
  showEditingModal: boolean;
  searchError: boolean;
};

class App extends React.Component<{}, State> {
  api: ApiService;
  state: State = {
    city: '',
    isNightTime: true,
    showEditingModal: false,
    searchError: false,
  };
  constructor(props: {}) {
    super(props);
    this.api = new ApiService(ApiConfig);
    this.onLocationSelect = this.onLocationSelect.bind(this);
    this.onLocationSelectOpen = this.onLocationSelectOpen.bind(this);
    this.onLocationSelectClose = this.onLocationSelectClose.bind(this);
  }
  componentDidMount() {
    this.getCityFromStorage();
    this.setIsNightTime();
  }
  static getDerivedStateFromProps(_props: {}, state: State) {
    return {
      isNightTime: isNightTime(
        state.isNightTime,
        state.weatherData?.weather[0].icon,
      ),
    };
  }
  async getCityFromStorage() {
    const storageData = await AsyncStorageService.getStringFromStorage(
      StorageKeys.USER_CITY,
    );
    this.setState({city: storageData ? storageData : DEFAULT_CITY_LIST[0]});
    setTimeout(() => {
      this.getWeather();
    }, 500);
  }
  async getWeather() {
    if (this.state.city && this.state.city !== '') {
      const data:
        | WeatherDataInterface
        | string = await this.api.getWeatherForLocation(this.state.city);
      if (typeof data === 'object') {
        this.setState({
          weatherData: data as WeatherDataInterface,
          searchError: false,
          showEditingModal: false,
        });
      } else {
        if (data.indexOf('404') > -1) {
          Alert.alert(
            'Something happened',
            "We couldn't find the city you searched for, please try another one.",
            [
              {
                text: 'Ok',
              },
            ],
          );
          this.setState({
            searchError: true,
          });
        }
      }
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

  onLocationSelectOpen() {
    this.setState({
      showEditingModal: true,
      searchError: false,
    });
  }
  onLocationSelectClose() {
    if (!this.state.searchError) {
      this.setState({
        showEditingModal: false,
      });
    }
  }
  onLocationSelect(value: string) {
    this.setState({
      city: value,
    });
    AsyncStorageService.setStringToStorage(StorageKeys.USER_CITY, value);
    setTimeout(() => {
      this.getWeather();
    }, 500);
  }

  renderStatusBar() {
    return (
      <StatusBar
        backgroundColor={
          this.state.isNightTime ? Colors.nightTimeView : Colors.dayTimeView
        }
        barStyle={'light-content'}
      />
    );
  }
  render() {
    if (OWM_API_KEY === '') {
      return (
        <>
          {this.renderStatusBar()}
          <View
            style={[
              appStyles.container,
              this.state.isNightTime
                ? appStyles.nightTimeContainer
                : appStyles.dayTimeContainer,
            ]}>
            <Text style={appStyles.textNormalBold}>
              Open Weather Map API key missing
            </Text>
          </View>
        </>
      );
    }
    return (
      <>
        {this.renderStatusBar()}
        <SafeAreaView
          style={[
            appStyles.container,
            this.state.isNightTime
              ? appStyles.nightTimeContainer
              : appStyles.dayTimeContainer,
          ]}>
          <WeatherView
            weatherData={this.state.weatherData}
            onLocationSelectOpen={this.onLocationSelectOpen}
          />
          <LocationSelectModal
            visible={this.state.showEditingModal}
            defaultLocations={DEFAULT_CITY_LIST}
            shouldBeDark={this.state.isNightTime}
            searchError={this.state.searchError}
            onClose={this.onLocationSelectClose}
            onSelect={this.onLocationSelect}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default App;
