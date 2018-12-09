import React from 'react';
import { ScrollView,
  View,
  TouchableOpacity,
  StyleSheet, FlatList,TextInput, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { data } from '../data';
import { Avatar } from '../components/avatar';
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
    data: {
      original: data.getUsers(),
      filtered: data.getUsers(),
    },
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

  renderItem = ({ item }) => (
    <TouchableOpacity >
      <View style={styles.memberContainer}>
        <Avatar rkType='circle' style={styles.avatar} img={item.photo} />
        <RkText>{`${item.firstName} ${item.lastName}`}</RkText>
      </View>
    </TouchableOpacity>
  );

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
        <FlatList
          style={styles.root}
          data={this.state.data.filtered}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={this.extractItemKey}
          enableEmptySections
        />
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
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  searchContainer: {
    backgroundColor: theme.colors.screen.bold,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    alignItems: 'center',
  },
  memberConainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base,
  },
}));
