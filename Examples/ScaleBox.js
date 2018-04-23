
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Animated,TouchableWithoutFeedback
} from 'react-native';



type Props = {};
export default class ScaleBox extends Component{

    state = {
        animation: new Animated.Value(1),
    };

    startAnimation = () => {
        Animated.timing(this.state.animation,{
            toValue: -300,
            duration: 1500,
        }).start(()=> {
            Animated.timing(this.state.animation,{
                toValue:300,
                duration: 1500,
            }).start(() => {
                Animated.timing(this.state.animation,{
                    toValue: 10,
                    duration: 1500,
                }).start(() => {
                    Animated.timing(this.state.animation,{
                        toValue: 100,
                        duration: 1500,
                    }).start();
                });
            })
        });
    }


    render() {
        const animationStyle={
            opacity: this.state.animation
        }
        const animationTransformStyle={
            transform: [
                {
                    scale: this.state.animation,
                }
            ]
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress = {this.startAnimation}>
                    <Animated.View style={[styles.box, animationTransformStyle]} />
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
