import React from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

class GroupListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Add Group"
          onPress={() => this.props.navigation.navigate('AddGroup')}
        />
        <Button
          title="Go to Group"
          onPress={() => this.props.navigation.navigate('Group')}
        />
      </View>
    );
  }
}
export default GroupListScreen;