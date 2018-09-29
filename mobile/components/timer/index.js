import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles';
import { createStackNavigator } from 'react-navigation';


export class TimerScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        workout_type: "tabata",
        total_rounds: "5",
        workout_duration: "60",
        rest_duration: "0",
      }
      // this.state를 가져오기 위해서 constructor에 해당 함수 바인딩 필요.
      this.onSubmit = this.onSubmit.bind(this);
      // this.handleChange = this.handleChange.bind(this);
    }
  
    static navigationOptions = {
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName = 'ios-time';
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }
  
    onSubmit = () => {
      this.props.navigation.navigate('Detail', {
        ...this.state
      })
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Workout Type</Text>
          <TextInput
            placeholder="write workout type"
            value={this.state.workout_type}
            onChangeText={(workout_type) => this.setState({workout_type})}
          ></TextInput>
          <Text>Total rounds</Text>
          <TextInput
            placeholder="write total rounds: default 5"
            value={this.state.total_rounds}
            onChangeText={(total_rounds) => this.setState({total_rounds})}
          ></TextInput>
          <Text>Work durations</Text>
          <TextInput
            placeholder="write workout duration: default 60"
            value={this.state.workout_duration}
            onChangeText={(workout_duration) => this.setState({workout_duration})}
          ></TextInput>
          <Text>Rest durations</Text>
          <TextInput
            placeholder="write rest dutation: default 0"
            value={this.state.rest_duration}
            onChangeText={(rest_duration) => this.setState({rest_duration})}
          ></TextInput>
          <Button
            onPress={this.onSubmit}
            title="Start"
          ></Button>
          <Text>{JSON.stringify(this.state.result)}</Text>
        </View>
      )
    }
  }
  
export class TimerDetailScreen extends React.Component {
    render() {
      const { navigation } = this.props;
      const workoutType = navigation.getParam('workout_type')
      const totalRounds = navigation.getParam('total_rounds')
      const workoutDuration = navigation.getParam('workout_duration')
      const restDuration = navigation.getParam('rest_duration')
  
      return (
        <View style={styles.container}>
          <Text>This is detail timer screen</Text>
          <Text>{ workoutType }, { totalRounds }, {workoutDuration}, {restDuration} </Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      )
    }
}


export const TimerStack = createStackNavigator(
    {
      TimerScreen: { screen: TimerScreen},
      Detail: { screen: TimerDetailScreen },
    },
  )
