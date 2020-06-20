import React, {useState} from 'react';
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

    const [tiredVal, setTiredVal] = useState(3);
    const [happyVal, setHappyVal] = useState(3);
    const [boredVal, setBoredVal] = useState(3);
    const [hungryVal, setHungryVal] = useState(3);

    return (
        <View style={styles.container}>
            <FeelingSlider
                wordsArr={['hell no', 'nah', 'kinda', 'yep', 'fucking wrecked']}
                sliderName={'Tired...'}
                sliderValue={tiredVal}
                handleSliderChange={(val) => {
                    setTiredVal(val)
                }}
            />
            <FeelingSlider
                wordsArr={['goldfish just died', 'nah', 'give or take', 'gucci', 'fucking ecstatic']}
                sliderName={'Happy...'}
                sliderValue={happyVal}
                handleSliderChange={(val) => {
                    setHappyVal(val)
                }}
            />
            <FeelingSlider
                wordsArr={['really interested', 'bearable', 'not really', 'oh yeah', 'out of my mind']}
                sliderName={'Bored...'}
                sliderValue={boredVal}
                handleSliderChange={(val) => {
                    setBoredVal(val)
                }}
            />
            <FeelingSlider
                wordsArr={['stuffed', 'just ate', 'nope', 'peckish', 'starving']}
                sliderName={'Hungry...'}
                sliderValue={hungryVal}
                handleSliderChange={(val) => {
                    setHappyVal(val)
                }}
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