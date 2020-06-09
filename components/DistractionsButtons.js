import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Svg, {Path} from "react-native-svg";
import {height} from "../constants/Layout";
import colors from "../constants/Colors";

const buttonWidth = 70;
const buttonHeight = 234;

export function DistractionButton({navigation, navigationScreen, color, style}) {
    return (
        <View
            style={styles.container}
        >
            <Svg
                viewBox={`0 0 ${buttonWidth} ${buttonHeight}`}
                onPress={() =>
                    navigation.navigate(navigationScreen)
                }
                style={styles.svg}
            >
                <Path
                    strokeWidth="0"
                    fill={color}
                    type="path"
                    d="M0 117L75 0.0865784L75 233.913L0 117Z"
                />
            </Svg>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: buttonWidth,
        height: buttonHeight,
    },


    svg: {
        width: buttonWidth,
        height: buttonHeight,
        borderColor: 'blue',
        borderWidth: 2,
    },
});