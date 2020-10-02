import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import CandidateInfoTop from "../components/CandidateInfoTop";
import CandidateInfoBottom from "../components/CandidateInfoBottom";
import democratPic from "../assets/images/democrat.png";
import republicPic from "../assets/images/republican.png";
import unknownPic from "../assets/images/robot-dev.png";

export default function CandidateProfile(data) {
  const [candidatePicture, setCandidatePicture] = useState();
  const newData = data.route.params.data;

  useEffect(() => {
    async function determinePicture(jsonObject) {
      if (jsonObject["twitter picture"] != null) {
        //console.log(jsonObject["twitter picture"]);
        setCandidatePicture({ uri: jsonObject["twitter picture"] });
      } else if (jsonObject["facebook picture"] != null) {
        let response = await fetch("https://" + jsonObject["facebook picture"]);
        var json_response = await response.json();

        //console.log(json_response);

        if (!json_response.data.is_silhouette) {
          setCandidatePicture({ uri: json_response.data.url });
        }
      }
    }

    switch (newData.party) {
      case "DEM":
        setCandidatePicture(democratPic);
        break;
      case "REP":
        setCandidatePicture(republicPic);
        break;
      default:
        setCandidatePicture(unknownPic);
        break;
    }

    determinePicture(newData);
  }, [data]);
  // CAN"t get fuck fuck to allign in row in row view??? wtf this worked earlier line numbers 77 and 78
  return (
    <View style={styles.body}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => data.navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <MaterialIcons
          style={styles.menu}
          name="menu"
          size={24}
          color="white"
        />
      </View>
      <CandidateInfoTop
        picture={candidatePicture}
        name={newData.name}
        contest={newData.contest}
      />
      <CandidateInfoBottom nav={data.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    overflow: "hidden",
    backgroundColor: "#219653",
    paddingTop: Constants.statusBarHeight,
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
    paddingRight: 100,
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
  test: {
    flexShrink: 1,
  },
  addToBallotBtn: {
    width: 163,
    height: 50,
    left: 205,
    top: 170,
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
  facebook: {
    marginTop: 200,
    marginLeft: 225,
  },
  link: {
    marginTop: 200,
    marginLeft: 60,
  },
  twitter: {
    marginTop: 375,
    marginLeft: 60,
  },
  instagram: {
    marginTop: 375,
    marginLeft: 225,
  },
  thumbsdown: {},
  thumbsup: {},
  approval: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
