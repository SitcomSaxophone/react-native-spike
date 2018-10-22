import React, { Component } from 'react';
import Timer from '../Timer/Timer';
import { View, Text, Button, StyleSheet } from 'react-native';

class TimerButton extends Component {

    state = {
        onTime: 0,
        offTime: 0,
    }

    offTimer = () => {
        if (restCounter === 3) {
            this.setState({
                offTime: restCounter,
            });
            return this.handleTimerStart();
        }
        this.setState({
            offTime: restCounter,
        });
        restCounter++;
        timer = setTimeout(this.offTimer, 1000);

    }

    restartTimer = () => {
        clearTimeout(this.handleTimerStart);
        restCounter = 3;
        return setInterval(this.restTime, 1000);
    }

    handleTimerStart = () => {
        if (counter === 7) {
            this.setState({
                onTime: counter,
            });
            return this.offTimer();
        }
        this.setState({
            onTime: counter,
        });
        counter++;
        timer = setTimeout(this.handleTimerStart, 1000);
    }

    render() {

        return (
            <React.Fragment>
                <Button
                    style={styles.timerButton}
                    title="Start Timer"
                    onPress={this.handleTimerStart}
                />
                <Timer
                    onTime={this.state.onTime}
                    restTime={this.state.offTime}
                />
            </React.Fragment>
        )
    }
}

let counter = 0;
let restCounter = 0;

const styles = StyleSheet.create({
    timerButton: {
        backgroundColor: 'blue',
    }
})

export default TimerButton;