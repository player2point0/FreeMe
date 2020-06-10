import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import FeelingSlider from '../components/FeelingSlider';

export default function FeelingsScreen({navigation}) {

    const onDone = () => {
        //todo get the values from the feeling sliders
        //todo send the values to a server and get a value back
        //todo navigate to a recommendation or back to the distraction screen depending on the server response

        //navigation.navigate('DistractionsScreen');
        navigation.navigate('RecommendationScreen');
    };


    return (
        <View style={styles.container}>
            <FeelingSlider
                wordsArr={['hell no', 'nah', 'kinda', 'yep', 'fucking wrecked']}
                sliderName={'Tired...'}
            />
            <FeelingSlider
                wordsArr={['goldfish just died', 'nah', 'give or take', 'gucci', 'fucking ecstatic']}
                sliderName={'Happy...'}
            />
            <FeelingSlider
                wordsArr={['really interested', 'bearable', 'not really', 'oh yeah', 'out of my mind']}
                sliderName={'Bored...'}
            />
            <FeelingSlider
                wordsArr={['stuffed', 'just ate', 'nope', 'peckish', 'starving']}
                sliderName={'Hungry...'}
            />
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

    doneButton: {}

});