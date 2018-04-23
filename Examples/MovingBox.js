
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Animated,TouchableWithoutFeedback
} from 'react-native';

//
//
// type Props = {};
// export default class MovingBox extends Component{
//
//     state = {
//         animation: new Animated.Value(1),
//     };
//
//     startAnimation = () => {
//         Animated.timing(this.state.animation,{
//             toValue: -300,
//             duration: 1500,
//         }).start(()=> {
//             Animated.timing(this.state.animation,{
//                 toValue:300,
//                 duration: 1500,
//             }).start(() => {
//                 Animated.timing(this.state.animation,{
//                     toValue: 10,
//                     duration: 1500,
//                 }).start(() => {
//                     Animated.timing(this.state.animation,{
//                         toValue: 100,
//                         duration: 1500,
//                     }).start();
//                 });
//             })
//         });
//     }
//
//
//     render() {
//         const animationStyle={
//             opacity: this.state.animation
//         }
//         const animationTransformStyle={
//             transform: [
//                 {
//                     translateY: this.state.animation,
//                 }
//             ]
//         }
//         return (
//             <View style={styles.container}>
//                 <TouchableWithoutFeedback
//                     onPress = {this.startAnimation}>
//                     <Animated.View style={[styles.box, animationTransformStyle]} />
//                 </TouchableWithoutFeedback>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     box: {
//         width: 150,
//         height: 150,
//         backgroundColor: "tomato",
//     },
// });

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */




type Props = {};
export default class App extends Component{

    state = {
        animation: new Animated.Value(1),
    };

    startAnimation = () => {
        Animated.timing(this.state.animation,{
            toValue: -150.220,
            duration: 1500,
        }).start(()=> {
            Animated.timing(this.state.animation,{
                toValue:150,
                duration: 1500,
            }).start(() => {
                Animated.timing(this.state.animation,{
                    toValue: -100,
                    duration: 1500,
                }).start(() => {
                    Animated.timing(this.state.animation,{
                        toValue: 100,
                        duration: 1500,
                    }).start(() =>{
                        this.state.animation.setValue(0);
                    });
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
                    translateY: this.state.animation,
                },
                {
                    translateX: this.state.animation,
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
        width: 100,
        height: 100,
        backgroundColor: "tomato",
    },
});
