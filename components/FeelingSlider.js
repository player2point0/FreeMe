import React, {useState} from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';


//todo add an interpolate between states and a nice animation e.g. half way between two numbers
export default function FeelingSlider({wordsArr, sliderName}) {

    const [sliderValue, setSliderValue] = useState(3);
    const [interacted, setInteracted] = useState(false);
    const handleSliderChange = (val) => {
      setSliderValue(val);
      //todo change how this is handled so that just touching the slider registers
      setInteracted(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {interacted? wordsArr[sliderValue-1] : sliderName}
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