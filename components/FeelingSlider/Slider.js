import React, {useState} from 'react'
import {Text, View, StyleSheet, PanResponder, Animated} from 'react-native'
import {width} from "../../constants/Layout";

function convertRange(value, r1, r2) {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}

const circleRadius = 50;

// https://reactnative.dev/docs/panresponder
// https://codeburst.io/developing-multi-slider-switch-in-react-native-a15b83b29828
// https://www.qed42.com/blog/understanding-panresponder-react-native-dragging-list
// https://codedaily.io/tutorials/36/React-Native-Animated-API-with-PanResponder


export default function Slider() {

    //todo lift up the state
    //todo scale the xVal between 1 and 5
    const [xVal, setXVal] = useState(0);

    const panResponder = PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (event, gestureState) => {
            // The gesture has started. Show visual feedback so the user knows
            // what is happening!
            // gestureState.d{x,y} will be set to zero now

            //todo add initial visual feedback
        },
        onPanResponderMove: (event, gestureState) => {
            // The most recent move distance is gestureState.move{X,Y}
            setXVal(event.nativeEvent.pageX - gestureState.vx);
            // The accumulated gesture distance since becoming responder is
            // gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (event, gestureState) => {
            // The user has released all touches while this view is the
            // responder. This typically means a gesture has succeeded
        },
        onPanResponderTerminate: (event, gestureState) => {
            // Another component has become the responder, so this gesture
            // should be cancelled
        },
        onShouldBlockNativeResponder: (event, gestureState) => {
            // Returns whether this component should block native components from becoming the JS
            // responder. Returns true by default. Is currently only supported on android.
            return true;
        },
    });

    const circleTransformStyle = {
        transform: [
            {
                translateX: xVal - circleRadius
            }
        ]
    };

    //todo improve css styling
    //todo add a lerp between states

    return (
        <View>
            <Text
                style={styles.nahText}
            >Nah</Text>

            <Text
                style={styles.yehText}
            >yeh</Text>

            <View
                style={[styles.container]}
                {...panResponder.panHandlers}
            ><Text
                style={[styles.circle, circleTransformStyle]}
            >test</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: width,
        height: 'auto',
        borderColor: 'black',
        borderWidth: 1,
    },

    circle: {
        width: 2 * circleRadius,
        height: 2 * circleRadius,
        backgroundColor: "#c00000",
        borderRadius: 100,
        textAlign: 'center',
        fontSize: 40,
    },

    nahText: {
        fontSize: 20,
        position: 'absolute',
        left: 0,
    },

    yehText: {
        fontSize: 20,
        position: 'absolute',
        right: 0,
    },
});