import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FeelingSlider from "../components/FeelingSlider";

import {createPostWork} from "../src/graphql/mutations";
import {API, graphqlOperation} from "aws-amplify";

export default function FeelingsScreen({navigation}) {
    const onDone = () => {

        API.graphql(graphqlOperation(createPostWork, {
            input: {
                focus: focusVal,
                productive: productiveVal,
                distracted: distractedVal,
                flow: flowVal,
            },
        }))
            .then(value => {
                //alert('saved');
            })
            .catch(error => {
                console.log('error adding post work', error);
            });

        //todo pass the slider values to the feelings screen
        navigation.navigate('FeelingsScreen');
    };

    const [focusVal, setFocusVal] = useState(3);
    const [productiveVal, setProductiveVal] = useState(3);
    const [distractedVal, setDistractedVal] = useState(3);
    const [flowVal, setFlowVal] = useState(3);

    return (
            <View style={styles.container}>
                <FeelingSlider
                    wordsArr={['wat', 'nah', 'kinda', 'yep', 'in the zone']}
                    sliderName={'Focus...'}
                    sliderValue={focusVal}
                    handleSliderChange={(val) => {
                        setFocusVal(val)
                    }}
                />
                <FeelingSlider
                    wordsArr={['nah mate', 'nah', 'give or take', 'unreal', 'godly']}
                    sliderName={'Productive...'}
                    sliderValue={productiveVal}
                    handleSliderChange={(val) => {
                        setProductiveVal(val)
                    }}
                />
                <FeelingSlider
                    wordsArr={['no chance', 'nah', 'not really', 'oh yeah', 'on the gram rn']}
                    sliderName={'Distracted...'}
                    sliderValue={distractedVal}
                    handleSliderChange={(val) => {
                        setDistractedVal(val)
                    }}
                />
                <FeelingSlider
                    wordsArr={['not even remotely', 'nah', 'kinda', 'yes sir', 'like great river']}
                    sliderName={'Flow...'}
                    sliderValue={flowVal}
                    handleSliderChange={(val) => {
                        setFlowVal(val)
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