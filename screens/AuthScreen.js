import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Auth} from "aws-amplify";
import {centeredContainer, speechText, inputText} from "../constants/Layout";

async function signOut() {
    try {
        await Auth.signOut();
        alert('signed out');

    } catch (error) {
        console.log('error signing out: ', error);
    }
}

//todo add sign up https://aws-amplify.github.io/amplify-js/api/classes/authclass.html
//todo add create user in db
//todo add the users first name
async function signUp(username, password) {
    try {
        const user = await Auth.signUp({
            username,
            password,
            attributes: {}
        });

        console.log({user});
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export default function AuthScreen({navigation}) {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(currentUser => {
                setUser(currentUser);
            })
            .catch(error => {
                console.log('error getting current user', error);
            });
    }, []);

    const onSignInPress = () => {
        //todo check username and password
        Auth.signIn(username, password)
            .then(user => {
                setUser(user);
            })
            .catch(error => {
                console.log('error signing in', error);
            });

        setUsername('');
        setPassword('');
    };

    const onUsernameChange = (val) => {
        //todo add validation here
        setUsername(val);
    };
    const onPasswordChange = (val) => {
        //todo add validation here
        setPassword(val);
    };

    return (
        <View style={centeredContainer}>
            <Text style={speechText}>{!user ? 'no user' : user.getUsername()}</Text>
            <TextInput
                style={inputText}
                onChangeText={onUsernameChange}
                value={username}
                placeholder={'email'}
            />
            <TextInput
                style={inputText}
                onChangeText={onPasswordChange}
                value={password}
                placeholder={'password'}
                secureTextEntry={true}
            />
            <Button
                onPress={onSignInPress}
                title={'sign in'}
            />
            {user === '' || <Button
                onPress={async () => signOut()}
                title={'sign out'}
            />}
            <Button
                onPress={() =>
                    navigation.navigate('StartStudyScreen')//todo close pop the auth screen from stack when changed
                }
                title={'start'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
});