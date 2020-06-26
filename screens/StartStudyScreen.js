import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {setGoal as setReduxGoal} from "../redux/Actions";
import {useDispatch} from "react-redux";
import {centeredContainer} from "../constants/Layout";

export default function StartStudyScreen({navigation}) {

    const [goal, setGoal] = useState('');

    const dispatch = useDispatch();

    const onStartPress = () => {
        //todo update the redux goal state
        dispatch(setReduxGoal(goal));

        navigation.navigate('FeelingsScreen', {
            startWork: true
        });
    };

    return (
        <View style={centeredContainer}>
            <Text style={styles.text}>Enter a goal for this session</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(val) => setGoal(val)}
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

    text: {
        fontSize: 50,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 40,
        width: '100%'
    }
});