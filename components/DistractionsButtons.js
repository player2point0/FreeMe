import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Svg, {Path} from "react-native-svg";
import {height} from "../constants/Layout";

const scale = 1.5;
const buttonWidth = 70 * scale;
const buttonHeight = 234 * scale;

export function DistractionButton({navigation, navigationScreen, color, style}) {
    return (
        //todo fix onPress so it only works on the triangle instead of currently when it applies to the rectangle
        //todo position buttons perfectly and programmatically in center
        //todo scale buttons based on screen size
        //todo add touchableopacity
        <View style={style}>
            <Svg
                width={buttonWidth}
                height={buttonHeight}
                viewBox="0 0 70 234"
                style={styles.svg}
                onPress={() =>
                    navigation.navigate(navigationScreen)
                }
            >
                <Path
                    strokeWidth="0"
                    fill={color}
                    type="path"
                    d="M0 117L75 0.0865784L75 233.913L0 117Z"
                />
            </Svg>
        </View>

        /*
        <View style={styles.container}>
            <Svg
                viewbox= '0 0 70} 234}'
                onPress={() =>
                    navigation.navigate(navigationScreen)
                }
                width={buttonWidth}
                height={buttonHeight}
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
        */
    );
}

const styles = StyleSheet.create({
    svg: {},

});