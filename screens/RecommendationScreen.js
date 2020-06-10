import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function RecommendationScreen({navigation}){

    const onDone = () => {
        navigation.navigate('DistractionsScreen');
    };


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Try...</Text>
            <Text style={styles.text}>20 minute</Text>
            <Text style={styles.text}>Walk</Text>
            <Button
                title={'Done'}
                style={styles.doneButton}
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