import React, {useState} from 'react'
import {Text, View, StyleSheet, PanResponder, Animated} from 'react-native'
import {width} from "../../constants/Layout";

function convertRange( value, r1, r2 ) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

export default function Slider() {

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
                translateX: xVal//Animated.add(val, new Animated.Value(-circleRadius))
            }
        ]
    };

    return (
        <View
            style={[styles.container]}
            {...panResponder.panHandlers}
        >
            <View style={styles.circleContainer}>
                <Text
                    style={[styles.circle, circleTransformStyle]}
                >test</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff",
        width: width,
    },

    circle: {

        width: 100,
        height: 100,
        backgroundColor: "#c00000",
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1,
    },

    circleContainer: {
        flex: 1,
        justifyContent: 'center',
       borderColor: 'blue',
       borderWidth: 1,
    }
});