import {AxiosRequestConfig} from 'axios';
import {OWM_API_URL} from '../../config';

export const ApiConfig: AxiosRequestConfig = {
  baseURL: OWM_API_URL,
};
