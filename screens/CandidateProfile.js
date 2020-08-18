import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Reminder } from "../components/HubCard";

export default function CandidateProfile(data) {
  return (
    <View style={styles.body}>
      <View style={styles.navBar}>
      <TouchableOpacity
                onPress={() =>
                  data.navigation.goBack()
                }
              >
        <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <MaterialIcons
          style={styles.menu}
          name="menu"
          size={24}
          color="white"
        />
      </View>
      <View style={styles.main}>
        <View style={styles.row}>
          <View style={styles.picture}></View>
          <View style={styles.rowWrap}>
            <View style={styles.candidateInfo}>
              <Text style={styles.candidateName}>
                {data.route.params.data.name}
              </Text>
              <Text style={styles.contest}>
                {data.route.params.data.contest}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    overflow: "hidden",
    backgroundColor: "#219653",
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    paddingLeft: 22,
    paddingRight: 22,
  },
  navBar: {
    flexDirection: "row",
    display: "flex",
    paddingBottom: 26,
  },
  main: {
    display: "flex",
    alignItems: "baseline",
  },
  menu: {
    marginLeft: "auto",
  },
  row: {
    flexDirection: "row",
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  picture: {
    width: 100,
    height: 100,
    backgroundColor: "#101433",
    borderRadius: 900,
  },
  candidateInfo: {
    paddingLeft: 20,
    paddingRight: 100
  },
  candidateName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    color: "#FFFFFF",
    paddingBottom: 23,
  },
  contest: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 23,
    color: "#ffffff",
    
  },
});
