import React from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';


//todo add an interpolate between states and a nice animation
// e.g. half way between two numbers https://www.youtube.com/watch?v=8ozJiGyZGrc&t=25s
// https://codepen.io/chrisgannon/pen/GZNgLw
export default function FeelingSlider({wordsArr, sliderName, sliderValue, handleSliderChange}) {

    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.text}
            >
                {sliderName+' '+wordsArr[sliderValue-1]}
            </Text>
            <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={sliderValue}
                onValueChange={handleSliderChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },

    text: {
        fontSize: 40,
        textAlign: 'center',
    },

    slider: {

    }

});