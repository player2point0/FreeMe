import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FeelingSlider from "../components/FeelingSlider";

export default function FeelingsScreen({navigation}) {
    const onDone = () => {
        //todo get the values from the feeling sliders
        //todo send the values to the database

        navigation.navigate('FeelingsScreen');
    };

    return (
            <View style={styles.container}>
                <FeelingSlider
                    wordsArr={['wat', 'nah', 'kinda', 'yep', 'in the zone']}
                    sliderName={'Focus...'}
                />
                <FeelingSlider
                    wordsArr={['nah mate', 'nah', 'give or take', 'unreal', 'godly']}
                    sliderName={'Productive...'}
                />
                <FeelingSlider
                    wordsArr={['no chance', 'nah', 'not really', 'oh yeah', 'on the gram rn']}
                    sliderName={'Distracted...'}
                />
                <FeelingSlider
                    wordsArr={['not even remotely', 'nah', 'kinda', 'yes sir', 'like great river']}
                    sliderName={'Flow...'}
                />
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
});