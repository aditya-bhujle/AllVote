import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

import democratPic from "../assets/images/democrat.png";
import republicPic from "../assets/images/republican.png";
import unknownPic from "../assets/images/unknown.png";

export function CandidateCard({ name, data }) {
  const [candidatePicture, setCandidatePicture] = useState();
  const generateCardForParty = function () {
    switch (data.party) {
      case "DEM":
        return {
          display: "flex",
          marginTop: 18,
          paddingHorizontal: 18,
          paddingVertical: 14,
          backgroundColor: "#2F80ED",
          borderRadius: 8,
          flexDirection: "row",
        };
      case "REP":
        return {
          display: "flex",
          marginTop: 18,
          paddingHorizontal: 18,
          paddingVertical: 14,
          backgroundColor: "#EB5757",
          borderRadius: 8,
          flexDirection: "row",
        };
      default:
        return {
          display: "flex",
          marginTop: 18,
          paddingHorizontal: 18,
          paddingVertical: 14,
          backgroundColor: "#219653",
          borderRadius: 8,
          flexDirection: "row",
        };
    }
  };
  useEffect(() => {
    async function determinePicture(jsonObject) {
      if (jsonObject["twitter picture"] != null) {
        setCandidatePicture({ uri: jsonObject["twitter picture"] });
      } else if (jsonObject["facebook picture"] != null) {
        let response = await fetch("https://" + jsonObject["facebook picture"]);
        var json_response = await response.json();

        if (!json_response.data.is_silhouette) {
          setCandidatePicture({ uri: json_response.data.url });
        }
      }
    }

    switch (data.party) {
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

    determinePicture(data);
  }, [data]);

  function whichParty(jsonObject) {
    switch (jsonObject.party) {
      case "DEM":
        return "assets/images/democrat.png";
      case "REP":
        return "assets/images/republican.png";
      default:
        return "assets/images/unknown.svg";
    }
  }

  return (
    <View style={generateCardForParty()}>
      <Image style={styles.rectangle} source={candidatePicture}></Image>
      <View stlye={{ flexDirection: "column" }}>
        <View style={styles.rowWrap}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.party}>{data.party}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
  },
  name: {
	marginLeft: 14,
	marginRight:30,
    fontWeight: "900",
    fontSize: 22,
    lineHeight: 26,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 5,
    paddingRight: 30,
  },

  party: {
    marginLeft: 14,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "rgba(255, 255, 255, 0.75)",
    marginBottom: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#C7A6A6",
  },
  rectangle: {
    height: 100,
    width: 100,
	borderRadius: 18,
	backgroundColor: "#FFFF",
  },
});
