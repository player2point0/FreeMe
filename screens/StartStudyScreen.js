import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function StartStudyScreen({navigation}) {

    const [goal, setGoal] = useState('');

    const onStartPress = () => {
        //todo update the redux goal state
        navigation.navigate('FeelingsScreen', {
            startWork: true
        });
    };

    return (
        <View style={styles.container}>
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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