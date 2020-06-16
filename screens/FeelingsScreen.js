import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

import FeelingSlider from '../components/FeelingSlider';

export default function FeelingsScreen({navigation}) {

    const onDone = () => {
        //todo get the values from the feeling sliders
        //todo send the values to the database
        //todo using the feelings and the post work values send a request to the recommendation server
        //todo display a loading animation
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