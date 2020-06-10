import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ProgressScreen() {
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