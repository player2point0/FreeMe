import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {START_POMODORO, TOGGLE_PAUSE_POMODORO,
    DECREMENT_POMODORO_TIMER, RESET_POMODORO} from "../redux/Actions";

export const POMODORO_START_TIME = 1 * 60;

export default function Pomodoro({style, navigation}) {

    const started = useSelector(state => state.pomodoro.pomodoroStarted);
    const paused = useSelector(state => state.pomodoro.pomodoroPaused);
    const timeRemaining = useSelector(state => state.pomodoro.pomodoroTimeRemaining);
    const dispatch = useDispatch();

    useEffect(() => {
        let pomodoroTimer = setInterval(() => {

            if (started && !paused) {
                const newTimeRemaining = timeRemaining - 1;

                if (newTimeRemaining < 0) {
                    navigation.navigate('PostWorkScreen');
                    dispatch({type: RESET_POMODORO});
                }
                else {
                    dispatch({type: DECREMENT_POMODORO_TIMER});
                }
            }

        }, 1000);

        return () => clearInterval(pomodoroTimer);
    }, [started, timeRemaining, paused]);

    const onStartPress = () => {
        dispatch({type: START_POMODORO});
    };

    const onBreakPress = () => {
        dispatch({type: TOGGLE_PAUSE_POMODORO});
        navigation.navigate('FeelingsScreen');
    };

    return (
        <View
            style={style}
        >
            <Text
                style={styles.text}
            >{formatTime(timeRemaining)}</Text>
            {!started && <Button
                title="start"
                onPress={onStartPress}
            />}
            {started && <Button
                title="break"
                onPress={onBreakPress}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
});

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let mins = Math.floor((time - hours * 3600) / 60);
    let seconds = Math.round(time - hours * 3600 - mins * 60);

    if (hours === 0) return padNumWithZero(mins) + ":" + padNumWithZero(seconds);

    return padNumWithZero(hours) + ":" + padNumWithZero(mins) + ":" + padNumWithZero(seconds);
}

function padNumWithZero(val) {
    if (val < 10) return "0" + val;
    return val;
}