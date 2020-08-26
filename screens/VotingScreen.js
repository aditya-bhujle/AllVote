
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import Constants from 'expo-constants';
import { MaterialIcons } from "@expo/vector-icons";
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

export default function VotingScreen(props) {
    return (

        <View style={styles.container}>
             <View style={styles.navBar}>
      <TouchableOpacity
                onPress={() =>
                  props.navigation.goBack()
                }
              >
        <MaterialIcons name="arrow-back" size={24} color="#219653" />
        </TouchableOpacity>
      
      </View>
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
    menu: {
        marginLeft: "auto",
      },
    subheader: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "700",
        color: "#BBBBBB",
    },
    navBar: {
        flexDirection: "row",
        display: "flex",
        paddingBottom: 26,
      },
});
