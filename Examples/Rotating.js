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


export default class Rotating extends Component{

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
    };





    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 900,
            duration: 1500,
        }).start(() => {
            this.state.animation.setValue(0);
        });
    };



    render() {
        const rotateInterpolation= this.state.animation.interpolate({
            inputRange: [0,360],
            outputRange: ["0deg", "360deg"]
        });


        const AnimatedStyles = {
            transform:[
                {rotate: rotateInterpolation},
            ]
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, AnimatedStyles]}>
                        <Text> hello one</Text>
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
        backgroundColor: "tomato",
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 50,
    },
});
