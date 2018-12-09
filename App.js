import React from 'react';
import { ScrollView, TextInput, Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { withRkTheme } from 'react-native-ui-kitten';
// import { AppRoutes } from './config/navigation/routesBuilder';
// import * as Screens from './screens';
import { bootstrap } from './config/bootstrap';
import track from './config/analytics';
import { data } from './data';
import { Font, AppLoading } from "expo";

bootstrap();
data.populateData();

import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import GroupListScreen from './screens/GroupListScreen'
import GroupScreen from './screens/GroupScreen'
import AddGroupScreen from './screens/AddGroupScreen'
import EditGroupScreen from './screens/EditGroupScreen'
import AddRoomScreen from './screens/AddRoomScreen'
import RoomScreen from './screens/RoomScreen'
import SearchPage from './screens/SearchPage'
import SearchResults from './screens/SearchResults'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Group List"
          onPress={() => this.props.navigation.navigate('GroupList')}
        />
      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    GroupList: GroupListScreen,
    Group: GroupScreen,
    AddGroup: AddGroupScreen,
    EditGroup: EditGroupScreen,
    AddRoom: AddRoomScreen,
    Room: RoomScreen,
    SearchPage: SearchPage,
    Results: SearchResults 
  },
  {
    initialRouteName: 'EditGroup',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  
  state = {
    isLoaded: false,
  };

  componentWillMount() {
    // this.state.isLoaded = true
    this.loadAssets();
  }
  loadAssets = async () => {
    await Font.loadAsync({
      fontawesome: require('./assets/fonts/fontawesome.ttf'),
      icomoon: require('./assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({ isLoaded: true });
  }
  
  renderLoading = () => (
    <AppLoading />
  );

  renderApp = () => (
    <AppContainer />
  );

  render = () => (this.state.isLoaded ? this.renderApp() : this.renderLoading());

  // render() {
  //   return <AppContainer />
    
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10
  },
  rowText: {
    flex: 1
  },
  message: {
    fontSize: 18
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee'
  },
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20
  }
});
