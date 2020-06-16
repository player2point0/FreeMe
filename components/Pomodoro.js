import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const POMODORO_START_TIME = 25 * 60;

export default function Pomodoro({style, started, setStarted, timeRemaining, setTimeRemaining, paused, setPaused}) {

    useEffect(() => {
        let pomodoroTimer = setInterval(() => {

            if(started && !paused){
                const newTimeRemaining = timeRemaining - 1;

                if(newTimeRemaining <= 0){
                    setTimeRemaining(0);

                    //todo open the post work screen
                }

                else{
                    setTimeRemaining(newTimeRemaining);
                }
            }

        }, 1000);

        return () => clearInterval(pomodoroTimer);
    }, [started, timeRemaining, paused]);

    const onStartPress = () => {
        setStarted(true);
    };

    const onBreakPress = () => {
        setPaused(!paused);
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

    if(hours === 0) return padNumWithZero(mins) + ":" + padNumWithZero(seconds);

    return padNumWithZero(hours) + ":" + padNumWithZero(mins) + ":" + padNumWithZero(seconds);
}

function padNumWithZero(val) {
    if(val < 10) return "0"+val;
    return val;
}