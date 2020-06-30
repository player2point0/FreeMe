import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {setGoal as setReduxGoal} from "../redux/Actions";
import {useDispatch} from "react-redux";
import {centeredContainer, inputText, speechText} from "../constants/Layout";

export default function StartStudyScreen({navigation}) {

    //todo fix keyboard bug

    const [goal, setGoal] = useState('');

    const dispatch = useDispatch();

    const onStartPress = () => {
        dispatch(setReduxGoal(goal));
        setGoal('');

        navigation.navigate('FeelingsScreen', {
            startWork: true
        });
    };

    return (
        <View style={centeredContainer}>
            <Text style={speechText}>what do you want to focus on for this session...</Text>
            <TextInput
                style={inputText}
                onChangeText={val => setGoal(val)}
                value={goal}
                placeholder={'make physics notes'}
            />
            <Button
                onPress={onStartPress}
                title={'start'}/>
        </View>
    );
}

const styles = StyleSheet.create({
});