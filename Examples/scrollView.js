/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,ScrollView,
    View,Animated,TouchableWithoutFeedback
} from 'react-native';
import {ScaleBox} from './Examples/ScaleBox';
import AnimatedBox from "./Examples/AnimatedBox";


export default class App extends Component{

    state={
        animation: new Animated.Value(0),

    }
    render() {


        const backgroundInterpolate = this.state.animation.interpolate({
            inputRange: [0, 7000],
            outputRange:["rgb(255,99,71)", "rgb(99,71,255)"]
        });

        const backgroundStyle= {
            backgroundColor: backgroundInterpolate
        }
        return (
            <View style={styles.container}>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset:{
                                    y: this.state.animation,
                                },
                            }
                        }
                    ])} >
                    <Animated.View style={[styles.content, backgroundStyle]} />
                </ScrollView>
            </View>
        );
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    content: {

        height: 7000,

    },
});
