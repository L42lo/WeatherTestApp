import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

class AsyncStorageService {
  public async setStringToStorage(key: string, data: string) {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      this.saveFailedAlert();
    }
  }
  public async setObjectToStorage(key: string, data: object) {
    try {
      const json = JSON.stringify(data);
      await AsyncStorage.setItem(key, json);
    } catch (error) {
      this.saveFailedAlert();
    }
  }
  public async getStringFromStorage(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      this.retrieveFailedAlert();
      return null;
    }
  }
  public async getObjectFromStorage(key: string) {
    try {
      const json = await AsyncStorage.getItem(key);
      return json !== null ? JSON.parse(json) : null;
    } catch (error) {
      this.retrieveFailedAlert();
      return null;
    }
  }
  private saveFailedAlert() {
    Alert.alert(
      'Something happened',
      "We couldn't save your data, please try to add it again.",
      [
        {
          text: 'Ok',
        },
      ],
    );
  }
  private retrieveFailedAlert() {
    Alert.alert(
      'Something happened',
      "We couldn't retrieve your saved data, please try to save it again.",
      [
        {
          text: 'Ok',
        },
      ],
    );
  }
}

export default new AsyncStorageService();
