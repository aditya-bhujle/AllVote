import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function CandidateInfoTop({ nav }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <MaterialCommunityIcons
          style={styles.thumbsup}
          name="thumb-up-outline"
          size={40}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.approval}>75%</Text>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <MaterialCommunityIcons
          style={styles.thumbsdown}
          name="thumb-down-outline"
          size={40}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => nav.navigate("BallotScreen")}
        style={styles.addToBallotBtn}
      >
        <Text style={styles.addToBallotBtnText}>Add to Ballot</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingLeft: 22,
    paddingRight: 22,
  },
  thumbsdown: {
    marginLeft: 11,
    marginTop: 50,
  },
  thumbsup: {
    marginLeft: 0,
    marginRight: 11,
    marginTop: 50,
  },
  approval: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 55,
    marginLeft: 0,
  },
  addToBallotBtn: {
    width: 163,
    height: 50,
    left: 33,
    top: 50,
    borderRadius: 8,
    fontFamily: "Roboto",
    backgroundColor: "#FFFFFF",
  },
  addToBallotBtnText: {
    marginLeft: 7,
    marginTop: 14,
    width: 150,
    height: 22,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#219653",
  },
});
