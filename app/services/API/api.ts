import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios';
import {WeatherDataInterface} from 'app/interfaces/weather-data-interface';
import {OWM_API_KEY} from '../../config';

class ApiService {
  instance: AxiosInstance | null = null;
  constructor(axiosConfig: AxiosRequestConfig) {
    this.instance = axios.create(axiosConfig);
    if (OWM_API_KEY === '') {
      console.warn('NO API KEY');
    }
  }
  getWeatherForLocation(
    cityName: string,
  ): Promise<string | WeatherDataInterface> {
    return new Promise((resolve, reject) => {
      this.instance
        ?.get(`/weather?q=${cityName}&units=metric&appid=${OWM_API_KEY}`)
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
