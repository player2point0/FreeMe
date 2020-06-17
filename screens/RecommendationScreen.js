import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch} from "react-redux";
import {TOGGLE_PAUSE_POMODORO} from "../redux/Actions";

export default function RecommendationScreen({navigation}){

    const dispatch = useDispatch();

    const onDone = () => {
        dispatch({type: TOGGLE_PAUSE_POMODORO});
        navigation.navigate('DistractionsScreen');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Try...</Text>
            <Text style={styles.text}>20 minute</Text>
            <Text style={styles.text}>Walk</Text>
            <Button
                title={'Done'}
                onPress={onDone}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
    },
});