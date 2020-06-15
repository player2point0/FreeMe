import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const START_TIME = 25 * 60;


export default function Pomodoro({style}) {

    const [started, setStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(START_TIME);

    const onStartPress = () => {
        setStarted(true);
    };


    useEffect(() => {
        let timer = setInterval(() => {

            if (started) {
                const newTimeRemaining = timeRemaining - 1;

                //alert(newTimeRemaining);

                setTimeRemaining(newTimeRemaining);
            }

        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        let min = time / 60;
        let sec = time % min;

        return Math.round(min)+":"+Math.round(sec);
    };


    return (
        <View
            style={style}
        >
            <Text>{timeRemaining}</Text>
            <Text>{formatTime(timeRemaining)}</Text>
            {!started && <Button
                title="start"
                onPress={onStartPress}
            />}
        </View>
    );
}