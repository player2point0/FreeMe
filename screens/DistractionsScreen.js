import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
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
            <Button
                title="Post Work"
                onPress={() =>
                    navigation.navigate('PostWorkScreen')
                }
                style={styles.postWorkButton}
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
        transform: [{ rotate: '180deg'}],
    },
    progressButton: {
        position: 'absolute',
        right: 0,
        bottom: 100,
    },
    postWorkButton: {
        backgroundColor: colors.blue,
    },
    pomodoro:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        borderColor: 'black',
        borderWidth: 1,
    },
});