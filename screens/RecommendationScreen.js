import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {centeredContainer} from "../constants/Layout";

import {createBreak} from "../src/graphql/mutations";
import {API, graphqlOperation} from "aws-amplify";

export default function RecommendationScreen({navigation}){

    const onDone = () => {
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

        navigation.navigate('ProgressScreen');
    };

    return(
        <View style={centeredContainer}>
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
    text: {
        fontSize: 50,
        textAlign: 'center',
    },
});