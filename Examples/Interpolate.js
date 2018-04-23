/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Animated,TouchableWithoutFeedback
} from 'react-native';
import {ScaleBox} from './Examples/ScaleBox';
import AnimatedBox from "./Examples/AnimatedBox";


type Props = {};
export default class Interpolate extends Component{

    //        constructor(props)  {
    //            super(props);
    // //           animation: new Animated.Value(0),
    //            this.state= {};
    //            this.state.left =  new Animated.Value(0);
    //            this.state.top = new Animated.Value(0);
    //            this.state.scale = new Animated.Value(1);
    //        };
    state={
        animation: new Animated.Value(0),
    }





    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 360,
            duration: 15000,
        }).start(() => {
            this.state.animation.setValue(0);
        });
    };



    render() {
        const boxInterpolation= this.state.animation.interpolate({
            inputRange: [0,1],
            outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
        });
        const colorInterpolation= this.state.animation.interpolate({
            inputRange: [0,1],
            outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"]
        });

        const boxAnimatedStyles = {
            backgroundColor: boxInterpolation
        };
        const textAnimatedStyle = {
            color: colorInterpolation
        };
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, boxAnimatedStyles]}>
                        <Animated.Text style={textAnimatedStyle}> hello one</Animated.Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',

    },
    box: {
        height: 100,
        width: 150,
        alignItems: "center",
        justifyContent:"center",
    },
});
