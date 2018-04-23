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
    View, Animated, TouchableWithoutFeedback, Easing
} from 'react-native';
import {ScaleBox} from './Examples/ScaleBox';

type Props = {};
export default class MovingBall extends Component{

    //        constructor(props)  {
    //            super(props);
    // //           animation: new Animated.Value(0),
    //            this.state= {};
    //            this.state.left =  new Animated.Value(0);
    //            this.state.top = new Animated.Value(0);
    //            this.state.scale = new Animated.Value(1);
    //        };
    state={
        left: new Animated.Value(1),
        top: new Animated.Value(1),
    }

    startAnimation = () => {
        Animated.timing(this.state.top, {
            toValue: 575,
            duration: 1000,
            easing: Easing.bounce,
        }).start(() => {
            Animated.timing(this.state.left, {
                toValue: 270,
                duration: 1000,
                easing: Easing.back(5),
            }).start(() => {
                Animated.timing(this.state.top, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.elastic(3),
                }).start(()=>{
                    Animated.timing(this.state.left,{
                        toValue: 0,
                        duration: 1000,
                        easing: Easing.bezier(.06,1,.86,.23),
                    }).start();
                });
            });
        });
    };


    // componentMount(){
    //     Animated.sequence([
    //         Animated.parallel([
    //             Animated.spring(this.state.left, { toValue: 50}),
    //             Animated.spring(this.state.left, { toValue: 50}),
    //             Animated.spring(this.state.left, { toValue: 50}),
    //         ])
    //     ])
    // }
    //

    render() {
        const animationStyle={
            // left: this.state.animation,

            left: this.state.left,
            top: this.state.top,
        }

        const animationTransformStyle={
            transform: [
                {
                    translateX: this.state.top,
                },
                {
                    translateY: this.state.left,
                },
                {
                    translateY: this.state.top,
                },
                {
                    translateX: this.state.left,
                }

            ]
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress = {this.startAnimation}>
                    <Animated.View style={[styles.box, animationStyle]}>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    box: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "tomato",
    },
});
