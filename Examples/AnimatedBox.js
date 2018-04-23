
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Animated,TouchableWithoutFeedback
} from 'react-native';



type Props = {};
export default class AnimatedBox extends Component{

    state = {
        animation: new Animated.Value(1),
    };

    startAnimation = () => {
        Animated.timing(this.state.animation,{
            toValue: 0,
            duration: 5000,
        }).start(()=> {
            Animated.timing(this.state.animation,{
                toValue:1,
                duration: 5000,
            }).start();
        });
    }


    render() {
        const animationStyle={
            opacity: this.state.animation
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress = {this.startAnimation}>
                    <Animated.View style={[styles.box, animationStyle]} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: "tomato",
    },
});
