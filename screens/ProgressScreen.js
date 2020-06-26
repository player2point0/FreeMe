import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {centeredContainer} from '../constants/Layout';

function calculateFlowRate(){

}

export default function ProgressScreen({navigation}) {
    //todo create a day table in the db that contains the overall figure for a day
    //todo create a user table that contains the users flow rate
    //todo load the past week and calculate a temporary flow rate with it
    //todo adjust the current flow rate by 1/n of the difference between the current and temp

    //todo add a separate detailed stats screen

    return (
        <View style={centeredContainer}>
            <Text style={styles.text}>2% increase</Text>
            <Button
                title={'Done'}
                onPress={() => navigation.navigate('StartStudyScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
});