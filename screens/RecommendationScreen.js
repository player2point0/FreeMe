import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch} from "react-redux";
import {TOGGLE_PAUSE_POMODORO} from "../redux/Actions";

import {createBreak} from "../src/graphql/mutations";
import {API, Auth, graphqlOperation} from "aws-amplify";

export default function RecommendationScreen({navigation}){

    const dispatch = useDispatch();

    const onDone = () => {
        dispatch({type: TOGGLE_PAUSE_POMODORO});

        API.graphql(graphqlOperation(createBreak, {
            input: {
                duration: 20,
                activity: 'walk'
            },
        }))
            .then(value => {
                //alert('saved');
            })
            .catch(error => {
                console.log('error adding break', error);
            });

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