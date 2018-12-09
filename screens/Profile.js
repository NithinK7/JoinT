import React from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 


export default class SearchPage extends React.Component{
  static navigationOptions = {
    title: 'Profile',
  };
  
  render() {
    

    console.log('SearchPage.render');
    return (
      <View style={styles.container}>
      <Text style={styles.description}>
          Search for houses to buy!
      </Text>
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
