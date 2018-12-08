import React from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

export default class SearchPage extends React.Component{
  static navigationOptions = {
    title: 'Property Finder',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london'
    };
  }

  _onSearchTextChanged = (event) => {
    console.log('_onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
  };
  
  render() {
    console.log('SearchPage.render');
    return (
      <View style={styles.flowRight}>
      <TextInput
        underlineColorAndroid={'transparent'}
        style={styles.searchInput}
        value={this.state.searchString}
        onChange={this._onSearchTextChanged}
        placeholder='Search via name or postcode'/>
      <Button
        onPress={() => {}}
        color='#48BBEC'
        title='Go'
      />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
});
