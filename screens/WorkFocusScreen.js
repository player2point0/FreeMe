import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector} from "react-redux";

const LONG_WORK_DURATION = 0.1 * 60;

function round2DP(num){
    return Math.round( num * 100 + Number.EPSILON ) / 100;
}


export default function WorkFocusScreen({navigation, route}) {

    //todo check if this persists between lock screens
    const [startTime, setStartTime] = useState(new Date());
    const [longWork, setLongWork] = useState(false);
    const [workDuration, setWorkDuration] = useState(0);

    const goal = useSelector(state => state.goal);

    useEffect(() => {
        let pomodoroTimer = setInterval(() => {

            const currentTime = new Date();
            const newWorkDuration = Math.abs(currentTime - startTime) / 1000;

            setWorkDuration(newWorkDuration);

            if (newWorkDuration > LONG_WORK_DURATION) setLongWork(true);

        }, 1000);

        return () => clearInterval(pomodoroTimer);
    });

    if (longWork) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>worked for</Text>
                <Text style={styles.text}>{round2DP(workDuration / 60)} minutes</Text>
                <Text style={styles.text}>on {goal}</Text>
                <Button
                    onPress={() => navigation.navigate('PostWorkScreen', {
                        startWork: false
                    })}
                    title={'Done'}/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{round2DP(workDuration)}</Text>
            <Text style={styles.text}>Lock your phone and get to work</Text>
            <Text style={styles.text}>on {goal}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 40,
        width: '100%'
    }
});