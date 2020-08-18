import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import Constants from 'expo-constants';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";

import { Voting } from "../components/HubCard";

export default function VotingScreen() {
    return (
        
        <View style={styles.container}>
            <Text style={styles.header}>Voting Page</Text>
            <Voting
                title=" Are You Eligible to Vote? "
            />
            <Voting
                title="Here’s How to Register "
            />
        </View>

    );
}

const styles = StyleSheet.create({
    developmentModeText: {
        marginBottom: 20,
        color: "rgba(0,0,0,0.4)",
        fontSize: 14,
        lineHeight: 19,
        textAlign: "center",
    },
    contentContainer: {
        paddingTop: 30,
    },
    container: {
        paddingHorizontal: 14,
        paddingVertical: 14,
        flex: 1,
        // marginTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },
    welcomeContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    scrollview: {
        paddingBottom: 40,
        backgroundColor: 'white'
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: "contain",
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: "center",
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: "rgba(96,100,109, 0.8)",
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subheader: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "700",
        color: "#BBBBBB",
    },
    codeHighlightContainer: {
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: "rgba(96,100,109, 1)",
        lineHeight: 24,
        textAlign: "center",
    },
    tabBarInfoContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: "center",
        backgroundColor: "#fbfbfb",
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: "rgba(96,100,109, 1)",
        textAlign: "center",
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: "center",
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: "#2e78b7",
    },
});
