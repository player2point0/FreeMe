import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import colors from '../constants/Colors'
import {height, width} from '../constants/Layout';
import {DistractionButton} from '../components/DistractionsButtons';

export default function DistractionScreen({navigation}) {
    return (
        <View
            style={styles.container}
        >
            <Text>Distractions</Text>
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
        backgroundColor:colors.blue,
    },
});