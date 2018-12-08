import React from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

class AddGroupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { groupName: 'Group Name', groupDesc: 'Group Description' };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>AddGroupScreen</Text>
        <TextInput textAlign={'center'} 
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(groupName) => this.setState({groupName})}
        value={this.state.groupName}/>
        <TextInput textAlign={'center'} 
        style={{height: 150, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(groupDesc) => this.setState({groupDesc})}
        value={this.state.groupDesc}/>
        <Button
          title="Add Group"
          onPress={() => this.props.navigation.navigate('Group')}
        />
      </View>
    );
  }
}
export default AddGroupScreen;