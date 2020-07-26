import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Keyboard,
} from 'react-native';
import {styles} from './styles';
import {appStyles} from '../app-styles';
import Colors from '../../modules/colors';
import DefaultCityLocation from '../../components/default-city-option/default-city-option';
import Icons from '../../assets/icons';

type Props = {
  currentLocation?: string;
  defaultLocations: string[];
  visible: boolean;
  shouldBeDark: boolean;
  searchError: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
};
type State = {
  inputText: string;
};

class LocationSelectModal extends React.Component<Props, State> {
  state: State = {
    inputText: '',
  };
  constructor(props: Props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSearchPress = this.onSearchPress.bind(this);
    this.onDefaultLocationSelect = this.onDefaultLocationSelect.bind(this);
  }
  onTextChange(text: string) {
    this.setState({inputText: text});
  }
  onSearchPress() {
    Keyboard.dismiss();
    this.props.onSelect(this.state.inputText);
  }
  onDefaultLocationSelect(cityName: string) {
    this.props.onSelect(cityName);
  }

  renderCloseButton() {
    if (this.props.searchError) {
      return null;
    }
    return (
      <Pressable style={styles.closeButton} onPress={this.props.onClose}>
        <Image style={styles.closeIcon} source={Icons.close} />
      </Pressable>
    );
  }
  renderDefaultLocations(cityName: string, index: number) {
    return (
      <DefaultCityLocation
        key={cityName + index.toString()}
        cityName={cityName}
        onSelect={this.onDefaultLocationSelect}
      />
    );
  }
  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <View
          style={[
            styles.container,
            this.props.shouldBeDark
              ? styles.nightTimeBackground
              : styles.dayTimeBackground,
          ]}>
          <TextInput
            style={[
              styles.textInput,
              this.props.searchError
                ? styles.textInputBorderError
                : styles.textInputBorderNormal,
            ]}
            defaultValue={this.props.currentLocation}
            placeholder={'Search for a location'}
            placeholderTextColor={Colors.lightGray}
            onChangeText={this.onTextChange}
            onSubmitEditing={this.onSearchPress}
          />
          <Pressable style={styles.searchButton} onPress={this.onSearchPress}>
            <Text style={appStyles.textNormalBold}>Search</Text>
          </Pressable>
          <View style={styles.defaultListContainer}>
            <Text style={appStyles.textNormal}>
              or select one from the list:
            </Text>
            {this.props.defaultLocations.map((dl: string, i: number) =>
              this.renderDefaultLocations(dl, i),
            )}
          </View>
        </View>
        {this.renderCloseButton()}
      </Modal>
    );
  }
}

export default LocationSelectModal;
