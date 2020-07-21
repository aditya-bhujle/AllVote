import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

export function CandidateCard({ name, title, content }) {
  return (
    <View style ={styles.card} >
      <Text style = {styles.name}>{name}</Text>
      <Text style = {styles.title}>{title}</Text>
	  <View style = {styles.rectangle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
	marginTop: 5,
    width: 339,
    height: 59,
    left: 18,
	backgroundColor: "#FFFFFF",
    borderRadius: 7,
  },
  name: {
    position: "absolute",
	width: 119,
	height:19,
	left: 72,
	top:5,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
	lineHeight: 19,
	color: "#000000",
  },
  title: {
	position: "absolute",
	width: 200,
	height: 16,
	left: 87,
	top: 30,
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: 14,
	lineHeight: 16,
	color: "#C7A6A6",
  },
  rectangle: {
	position: "absolute",
	width: 40,
	height: 40,
	left: 18,
	top: 9,
	backgroundColor: "#101433",
	borderRadius: 8,

  },

  header: {
	position: "absolute",
	width: 322,
	height: 18,
	left: 18,
	top: 221,
	
	fontFamily: "Roboto",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: 15,
	lineHeight: 18,
	textTransform: "capitalize",
	color: "#101433",
  }
 
});
