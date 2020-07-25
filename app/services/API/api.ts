import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios';
import {WeatherDataInterface} from 'app/interfaces/weather-data-interface';

class ApiService {
  instance: AxiosInstance | null = null;
  constructor(axiosConfig: AxiosRequestConfig) {
    this.instance = axios.create(axiosConfig);
  }
  getWeatherForLocation(
    cityName: string,
  ): Promise<string | WeatherDataInterface> {
    return new Promise((resolve, reject) => {
      this.instance
        ?.get(`/weather?q=${cityName}&units=metric&appid=${''}`)
        .then((response) => {
          resolve((response as AxiosResponse).data as WeatherDataInterface);
        })
        .catch((error) => {
          reject((error as AxiosError).message);
        });
    });
  }
}

export default ApiService;
