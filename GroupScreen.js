import React from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

class GroupScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Group Screen</Text>
        <Button
          title="Go to Edit Group"
          onPress={() => this.props.navigation.navigate('EditGroup')}
        />
        <Button
          title="Go to Add Room"
          onPress={() => this.props.navigation.navigate('AddRoom')}
        />
        <Button
          title="Go to Room"
          onPress={() => this.props.navigation.navigate('Room')}
        />
      </View>
    );
  }
}
export default GroupScreen;