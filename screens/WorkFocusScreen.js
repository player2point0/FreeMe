import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector} from "react-redux";
import {centeredContainer, speechText} from "../constants/Layout";

const LONG_WORK_DURATION = 5 * 60;

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
            <View style={centeredContainer}>
                <Text style={speechText}>worked for</Text>
                <Text style={speechText}>{round2DP(workDuration / 60)} minutes</Text>
                <Text style={speechText}>on {goal}</Text>
                <Button
                    onPress={() => navigation.navigate('PostWorkScreen', {
                        startWork: false
                    })}
                    title={'Done'}/>
            </View>
        );
    }

    return (
        <View style={centeredContainer}>
            <Text style={speechText}>Just fucking do it</Text>
            <Text style={speechText}>Lock your phone and get to work</Text>
            <Text style={speechText}>on {goal}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});