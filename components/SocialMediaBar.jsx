import React from "react";
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SocialMediaBar({ socialMediaData, callback, invisible}) {
  var onlySocialMedia = Object.keys(socialMediaData).map((key) => [
    String(key),
    socialMediaData[key],
  ]);
  onlySocialMedia = onlySocialMedia.filter((x) => {
    if (x[0] == "twitter" || x[0] == "facebook" || x[0] == "website") {
      return true;
    } else return false;
  });
  var noNulls = onlySocialMedia.filter((x) => {
    if (x[1] == null) {
      return false;
    } else return true;
  });
  // If no social media link exist then return an empty componenet
  if (noNulls.length != 0) {
    callback(true);
  } else {
    return <View></View>;
  }
  if (invisible){
    return <View></View>;
  }

  return (
    <View style={styles.greenBorder}>
      <View style={styles.row}>
        {noNulls.map((ele) => {
          if (ele[0] == "twitter") {
            return (
              <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(JSON.parse(ele[1])[0])}>
              <MaterialCommunityIcons
                style={styles.twitter}
                name="twitter"
                size={35}
                color="white"
                key={ele[1]}
              />
               </TouchableOpacity>
            );
          }
          if (ele[0] == "facebook") {
            return (
              <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(JSON.parse(ele[1])[0])}>
              <MaterialCommunityIcons
                style={styles.facebook}
                name="facebook"
                size={35}
                color="white"
                key={ele[1]}
              />
              </TouchableOpacity>
            );
          }
          if (ele[0] == "website") {
            return (
              <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(JSON.parse(ele[1])[0])}>
              <MaterialCommunityIcons
                style={styles.link}
                name="link-variant"
                size={35}
                color="white"
                key={ele[1]}
              />
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  greenBorder: {
    margin: -20,
    marginTop: 26,
    backgroundColor: "#3A845A",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginStart: 26,
    marginEnd: 36,
  },
  facebook: {
    marginTop: 15,
  },
  link: {
    marginTop: 15,
  },
  twitter: {
    marginTop: 15,
  },
});
