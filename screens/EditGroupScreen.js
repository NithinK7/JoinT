import React from 'react';
import { ScrollView,
  View,
  TouchableOpacity,
  StyleSheet, TextInput, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

// class EditGroupScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>EditGroupScreen</Text>
//       </View>
//     );
//   }
// }
// export default EditGroupScreen;
import {
  RkText,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import {
  RkSwitch,
  FindFriends,
} from '../components';
import { FontAwesome } from '../assets/icons';

class EditGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'EditGroup'
  };

  state = {
    sendPush: true,
    shouldRefresh: false,
    twitterEnabled: true,
    googleEnabled: false,
    facebookEnabled: true,
  };

  onPushNotificationsSettingChanged = (value) => {
    this.setState({ sendPush: value });
  };

  onRefreshAutomaticallySettingChanged = (value) => {
    this.setState({ shouldRefresh: value });
  };

  onFindFriendsTwitterButtonPressed = () => {
    this.setState({ twitterEnabled: !this.state.twitterEnabled });
  };

  onFindFriendsGoogleButtonPressed = () => {
    this.setState({ googleEnabled: !this.state.googleEnabled });
  };

  onFindFriendsFacebookButtonPressed = () => {
    this.setState({ facebookEnabled: !this.state.facebookEnabled });
  };

  render = () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>PROFILE SETTINGS</RkText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Add Members</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
            <RkText rkType='header6'>Leave group</RkText>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <RkText rkType='header6'>Send Push Notifications</RkText>
          <RkSwitch
            style={styles.switch}
            value={this.state.sendPush}
            name="Push"
            onValueChange={this.onPushNotificationsSettingChanged}
          />
        </View>
        
      </View>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>Members List</RkText>
        </View>
        <View style={styles.row}>
          <FindFriends
            color={RkTheme.current.colors.twitter}
            text='Twitter'
            icon={FontAwesome.twitter}
            selected={this.state.twitterEnabled}
            onPress={this.onFindFriendsTwitterButtonPressed}
          />
        </View>
        <View style={styles.row}>
          <FindFriends
            color={RkTheme.current.colors.google}
            text='Google'
            icon={FontAwesome.google}
            selected={this.state.googleEnabled}
            onPress={this.onFindFriendsGoogleButtonPressed}
          />
        </View>
        <View style={styles.row}>
          <FindFriends
            color={RkTheme.current.colors.facebook}
            text='Facebook'
            icon={FontAwesome.facebook}
            selected={this.state.facebookEnabled}
            onPress={this.onFindFriendsFacebookButtonPressed}
          />
        </View>
      </View>
    </ScrollView>
  )
}
export default EditGroupScreen;
const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  switch: {
    marginVertical: 14,
  },
}));
