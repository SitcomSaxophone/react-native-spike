import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header/Header';
import TimerButton from '../TimerButton/TimerButton';
// import Timer from '../Timer/Timer';

 class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Open up App.js to start working on your app!</Text>
        <TimerButton />
        {/* <Timer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;