import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function calculateFlowRate(){

}

export default function ProgressScreen() {
    //todo create a day table in the db that contains the overall figure for a day
    //todo create a user table that contains the users flow rate
    //todo load the past week and calculate a temporary flow rate with it
    //todo adjust the current flow rate by 1/n of the difference between the current and temp

    //todo add a separate detailed stats screen

    return (
        <View style={styles.container}>
            <Text style={styles.text}>2% increase</Text>
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
});