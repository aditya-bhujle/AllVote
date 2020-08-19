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
    container: {
        paddingHorizontal: 14,
        paddingVertical: 14,
        flex: 1,
        // marginTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },

    scrollview: {
        paddingBottom: 40,
        backgroundColor: 'white'
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
});
