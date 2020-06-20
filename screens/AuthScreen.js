import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Auth} from "aws-amplify";

async function signOut() {
    try {
        await Auth.signOut();
        alert('signed out');

    } catch (error) {
        console.log('error signing out: ', error);
    }
}

//todo add sign up https://aws-amplify.github.io/amplify-js/api/classes/authclass.html
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
                console.log(currentUser);
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
        <View style={styles.container}>
            <Text style={styles.text}>{!user ? 'no user' : user.getUsername()}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onUsernameChange}
                value={username}
                placeholder={'email'}
            />
            <TextInput
                style={styles.textInput}
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
                    navigation.navigate('DistractionsScreen')//todo close pop the auth screen from stack when changed
                }
                title={'start'}
            />
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
        fontSize: 40,
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