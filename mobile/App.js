import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { TimerStack } from './components/timer'
import { styles } from './styles'

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = 'ios-information-circle';
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!1</Text>
        <Button
          title="Go to TimerScreen"
          onPress={ () => this.props.navigation.navigate('TimerScreen') }
        />
        <Button
          title="Go to WODScreen"
          onPress={ () => this.props.navigation.navigate('WODScreen') }
        />
        <Button
          title="Go to RecordScreen"
          onPress={ () => this.props.navigation.navigate('RecordScreen') }
        />
        <Button
          title="Go to HistoryScreen"
          onPress={ () => this.props.navigation.navigate('HistoryScreen') }
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class WODScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = 'ios-body';
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is WODScreen</Text>
      </View>
    )
  }
}

class RecordScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = 'ios-clipboard';
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is RecordScreen</Text>
      </View>
    )
  }
}

class HistoryScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = 'ios-filing';
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is HistoryScreen</Text>
      </View>
    )
  }
}

const App = createBottomTabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    TimerScreen: {
      screen: TimerStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName = `ios-time${focused ? '' : '-outline'}`;
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      })
    },
    WODScreen: { screen: WODScreen },
    RecordScreen: { screen: RecordScreen },
    HistoryScreen: { screen: HistoryScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName = `${navigation.iconName ? navigation.iconName: 'ios-help'}${focused ? '' : '-outline'}`;
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    initialRouteName: 'TimerScreen',
  }
)

export default App;
