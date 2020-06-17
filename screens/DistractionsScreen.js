import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import colors from '../constants/Colors'
import {height, width} from '../constants/Layout';
import {DistractionButton} from '../components/DistractionsButtons';
import LavaLamp from '../components/LavaLamp';
import Pomodoro from "../components/Pomodoro";

export default function DistractionScreen({navigation}) {

    return (
        <View
            style={styles.container}
        >
            <LavaLamp/>
            <Pomodoro
                navigation={navigation}
                style={styles.pomodoro}
            />
            <DistractionButton
                navigation={navigation}
                navigationScreen={"ProgressScreen"}
                color={colors.red}
                style={styles.progressButton}
            />
            <DistractionButton
                navigation={navigation}
                navigationScreen={"FeelingsScreen"}
                color={colors.blue}
                style={styles.feelingsButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'white'
    },
    feelingsButton: {
        position: 'absolute',
        left: 0,
        bottom: 100,
        transform: [{rotate: '180deg'}],
    },
    progressButton: {
        position: 'absolute',
        right: 0,
        bottom: 100,
    },
    postWorkButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width,
    },
    pomodoro: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        borderColor: 'black',
        borderWidth: 1,
    },
});