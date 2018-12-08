import React from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

class GroupListScreen extends React.Component {
   
  render() {
    groupsFromServer = ['Group1', 'Group2', 'Group3', 'Group4', 'Group5']
    buttonComponentsforGroup = groupsFromServer.map((groupName)=> <Button title={groupName} onPress={() => this.props.navigation.navigate('Group')}/>)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Group List Screen</Text>
        <Button
          title="Add Group"
          onPress={() => this.props.navigation.navigate('AddGroup')}
        />
        <Text>Go to Group</Text>
        <ScrollView>
        {buttonComponentsforGroup}
        </ScrollView>
      </View>
    );
  }
}
export default GroupListScreen;
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 38,
    height: 44,
    color: 'blue'
  },
})