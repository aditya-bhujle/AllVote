import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
} from "react-native";
import  Constants  from 'expo-constants'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Reminder } from "../components/HubCard";

export default function CandidateProfile(data) {
  
  return (
    <View style={styles.body}>
      <View style={styles.navBar}>
      <TouchableOpacity
          onPress={() =>
            data.navigation.goBack()
          }>
        <MaterialIcons 
        name="arrow-back" 
        size={24} 
        color="white" 
        />
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
        <TouchableOpacity
          onPress={() =>
            data.navigation.goBack()
          } >
          <MaterialCommunityIcons 
            style={styles.facebook} 
            name="facebook" 
            size={100} 
            color="white"   
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            data.navigation.goBack()
          } >
          <MaterialCommunityIcons 
            style={styles.link} 
            name="link-variant" 
            size={100} 
            color="white"   
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            data.navigation.goBack()
          } >
          <MaterialCommunityIcons 
            style={styles.twitter} 
            name="twitter" 
            size={100} 
            color="white"   
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            data.navigation.goBack()
          } >
          <MaterialCommunityIcons 
            style={styles.instagram} 
            name="instagram" 
            size={100} 
            color="white"   
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            data.navigation.goBack()
          } >
          <MaterialCommunityIcons style= {styles.thumbsup} name="thumb-up-outline" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            data.navigation.goBack()
          } >
          <MaterialCommunityIcons style= {styles.thumbsdown} name="thumb-down-outline" size={40} color="white" />
        </TouchableOpacity>
        <Text style= {styles.approval}>75%</Text>
        <TouchableOpacity 
          onPress={() => data.route.params.navigate("BallotScreen")}
          style={styles.addToBallotBtn}>
          <Text style={styles.addToBallotBtnText}>Add to Ballot</Text>
        </TouchableOpacity>
      </View>
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
  addToBallotBtn: {
    position: 'absolute',
    width: 163,
    height: 50,
    left: 205,
    top: 170,
    borderRadius: 8,
    fontFamily: "Roboto",
    backgroundColor: '#FFFFFF'
  }, 
  addToBallotBtnText: {
    position: 'absolute',
    marginLeft: 7,
    marginTop: 14,
    width: 150,
    height: 22,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: '#219653'
  }, 
  facebook: {
    position: 'absolute',
    marginTop: 200,
    marginLeft: 225
  },
  link: {
    position: 'absolute',
    marginTop: 200,
    marginLeft: 60
  },
  twitter: {
    position: 'absolute',
    marginTop: 375,
    marginLeft: 60
  },
  instagram: {
    position: 'absolute',
    marginTop: 375,
    marginLeft: 225
  },
  thumbsdown: {
    position: 'absolute',
    marginLeft: 140,
    marginTop: 50
  },
  thumbsup: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: 50
  },
  approval: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 55,
    marginLeft: 68
  }
});
