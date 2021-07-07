import * as React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BallotCard from "../components/BallotCard";


export default function BallotScreen(props) {
	// Figuring out how man unique contests there are from json data
  function arrayOfContests(jsData) {
    var contests = [];
    jsData.map((x) => {
      contests.push(x.contest);
    });
    return contests.filter((c, index) => {
      return contests.indexOf(c) === index;
    });
  }
  var uniqueValues = arrayOfContests(props.route.params.civicData);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Election Day 2020</Text>
      <Text style={styles.subheader}>1/13 SELECTED</Text>
      <View style={styles.scrollview}>
        <ScrollView>
			{uniqueValues.map(x => (
				<TouchableOpacity
                key={x}
                onPress={() =>
                  props.route.params.nav.navigate("CandidatesScreen", {
                    data: props.route.params.civicData,
                    userlocation:props.route.params.location,
					contest: x
                  })
                }
              >
                <BallotCard name="Unknown" contest={x} party="Unknown" key={x}/>
              </TouchableOpacity>
			))}

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:150,
    paddingRight:150,
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  header: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 30,
  },
  subheader: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 18,
    fontWeight: "500",
    color: "#BBBBBB",
    marginBottom: 5,
  },
  scrollview: { flex:1 },
});
