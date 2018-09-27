import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
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

class TimerScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is TimerScreen</Text>
      </View>
    )
  }
}

class WODScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is WODScreen</Text>
      </View>
    )
  }
}

class RecordScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is RecordScreen</Text>
      </View>
    )
  }
}

class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is HistoryScreen</Text>
      </View>
    )
  }
}


const App = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen, navigationOptions: {
      title: 'Welcome',
    } },
    TimerScreen: { screen: TimerScreen },
    WODScreen: { screen: WODScreen },
    RecordScreen: { screen: RecordScreen },
    HistoryScreen: { screen: HistoryScreen },
  },
  {
    initialRouteName: 'HomeScreen',
  }
)

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
