
import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AppRegistry,
    Animated,
    PanResponder,
    Dimensions,
    TextInput,
    Easing
} from "react-native";

const { height, width } = Dimensions.get("window");

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            cp: "",
            isFocusedE: false,
            isFocusedP: false,
            isFocusedC: false,
            move: new Animated.Value(-width * 0.8),
            rotate: new Animated.Value("0.35deg"),
            theMove: new Animated.Value(65),
            text: ""
        };
    }
    handleFocus = () => this.setState({ isFocusedE: true });
    handleBlur = () => this.setState({ isFocusedE: false });
    handleFocusP = () => this.setState({ isFocusedP: true });
    handleBlurP = () => this.setState({ isFocusedP: false });
    handleFocusC = () => this.setState({ isFocusedC: true });
    handleBlurC = () => this.setState({ isFocusedC: false });
    componentDidMount() {
        Animated.timing(this.state.move, {
            toValue: 0,
            duration: 600,
            easing: Easing.linear
        }).start();

        setTimeout(() => this.setState({ text: "SIGNUP" }), 500);
        setTimeout(() => this._SquencedAnimation(), 600);
    }
    _SquencedAnimation = () => {
        Animated.timing(this.state.theMove, {
            toValue: "0",
            duration: 300,
            easing: Easing.linear
        }).start();
    };

    render() {

        const rot = this.state.theMove.interpolate({
            inputRange: [-90, 0],
            outputRange: ["35deg", "0deg"]
        });
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity
                    style={{
                        width: width * 0.2,
                        backgroundColor: "rgba(60,70,170,1)",
                        alignItems: "center",
                        justifyContent: "center"
                    }}

                >
                    <View style={{}}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 20, transform: [{ rotate: "90deg" }] }}>
                            SIGNIN
                        </Text>
                    </View>
                </TouchableOpacity>

                <Animated.View
                    style={{
                        flexDirection: "column",
                        height: height,
                        width: width * 0.8,
                        backgroundColor: "rgba(200,80,95,1)",
                        right: this.state.move
                    }}
                >
                    <View style={{ height: "20%" }} />
                    <View style={{ height: "55%" }}>
                        <View style={{ alignItems: "center" }}>
                            {/*<Image*/}
                            {/*source={{*/}
                            {/*uri: "/Users/melliferalabs/Desktop/theProject/joyScore/src/images/172627-256.png"*/}
                            {/*}}*/}
                            {/*style={{ height: 60, width: 60 }}*/}
                            {/*/>*/}
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text
                                style={{
                                    fontSize: !this.state.isFocusedE ? 20 : 16,
                                    color: !this.state.isFocusedE ? "white" : "orange",
                                    top: !this.state.isFocusedE ? 28 : 0,
                                    textAlign: "left",
                                    left: width * 0.12,
                                    fontWeight: "400",
                                    letterSpacing: 1
                                }}
                            >
                                Email
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderBottomColor: !this.state.isFocusedE ? "white" : "orange",
                                    borderBottomWidth: 1,
                                    width: "70%"
                                }}
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                returnKeyType={"next"}
                                onSubmitEditing={() => {
                                    this.secondTextInput.focus();
                                }}
                                blurOnSubmit={false}
                                clearTextOnFocus={true}
                                onFocus={this.handleFocus}
                                onBlue={this.handleBlur}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text
                                style={{
                                    fontSize: !this.state.isFocusedP ? 20 : 16,
                                    color: !this.state.isFocusedP ? "white" : "orange",
                                    top: !this.state.isFocusedP ? 28 : 0,
                                    textAlign: "left",
                                    left: width * 0.12,
                                    fontWeight: "400",
                                    letterSpacing: 1
                                }}
                            >
                                Password
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TextInput
                                ref={input => {
                                    this.secondTextInput = input;
                                }}
                                style={{
                                    height: 40,
                                    borderBottomColor: !this.state.isFocusedP ? "white" : "orange",
                                    borderBottomWidth: 1,
                                    width: "70%"
                                }}
                                onChangeText={pass => this.setState({ pass })}
                                value={this.state.pass}
                                clearTextOnFocus={true}
                                blurOnSubmit={false}
                                returnKeyType={"next"}
                                onFocus={this.handleFocusP}
                                onBlue={this.handleBlurP}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text
                                style={{
                                    fontSize: !this.state.isFocusedC ? 20 : 16,
                                    color: !this.state.isFocusedC ? "white" : "orange",
                                    top: !this.state.isFocusedC ? 28 : 0,
                                    textAlign: "left",
                                    left: width * 0.12,
                                    fontWeight: "400",
                                    letterSpacing: 1
                                }}
                            >
                                Confirm Password
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TextInput
                                ref={input => {
                                    this.secondTextInput = input;
                                }}
                                style={{
                                    height: 40,
                                    borderBottomColor: !this.state.isFocusedC ? "white" : "orange",
                                    borderBottomWidth: 1,
                                    width: "70%"
                                }}
                                onChangeText={cp => this.setState({ cp })}
                                value={this.state.cp}
                                clearTextOnFocus={true}
                                blurOnSubmit={false}
                                returnKeyType={"next"}
                                onFocus={this.handleFocusC}
                                onBlue={this.handleBlurC}
                            />
                        </View>
                        <Animated.Text
                            style={{
                                fontSize: 34,
                                fontWeight: "600",
                                letterSpacing: 2,
                                marginTop: 30,
                                textAlign: "center",
                                color: "white",
                                transform: [{ translateX: this.state.theMove }, { rotate: rot }]
                            }}
                        >
                            {this.state.text}
                        </Animated.Text>
                    </View>
                    <View style={{ height: "25%" }}>
                        <TouchableOpacity style={{ position: "absolute", height: 70, width: 70, right: width / 2.5, bottom: 35 }}>
                            {/*<Image*/}
                            {/*style={{ height: 70, width: 70 }}*/}
                            {/*source={{*/}
                            {/*uri:*/}
                            {/*"/Users/melliferalabs/Desktop/theProject/joyScore/src/images/if_Social-01-Facebook-Outline_1243572.png"*/}
                            {/*}}*/}
                            {/*/>*/}
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

export default App;