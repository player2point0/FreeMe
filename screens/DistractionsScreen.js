import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import colors from '../constants/Colors'
import {height, width} from '../constants/Layout';
import {DistractionButton} from '../components/DistractionsButtons';

export default function DistractionScreen({navigation}) {
    return (
        <View
            style={styles.container}
        >
            <Text>Distractions</Text>
            <DistractionButton
                navigation={navigation}
                navigationScreen={"ProgressScreen"}
                color={colors.red}
                style={styles.progressButton}
            />

            <Button
                title="Post Work"
                onPress={() =>
                    navigation.navigate('PostWorkScreen')
                }
                style={styles.postWorkButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'white'
    },
    feelingsButton: {

    },
    progressButton: {

        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    postWorkButton: {
        backgroundColor:colors.blue,
    },


});