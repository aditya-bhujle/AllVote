import * as React from "react";
import { StyleSheet, TouchableOpacity, View, } from "react-native";
import Constants from "expo-constants";
import { Layout, Tab, TabView, Text, Input } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import { CandidateCard } from "../components/Candidate";

export default function Candidates(props) {
  const [value, setValue] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  var candidateContest = props.route.params.contest;

  //function used for the search bar to work
  function candidateFilter(ele) {
    return (ele.contest == candidateContest);
  }
  // change 'Charlotte' to local once we scale
  // feed in local city/town based on location

  return (
    <View style={styles.body}>

<Text style={styles.header}>{candidateContest}</Text>
      <View style={styles.scrollview}>
        <ScrollView>
          {props.route.params.data
            .filter(candidateFilter)
            .map((candidate, index) => (
              <TouchableOpacity
                key={candidate.name}
                onPress={() =>
                  props.navigation.navigate("CandidateProfile", {
                    data: candidate,
                    userlocation: props.route.params.userlocation,
                  })
                }
              >
                <CandidateCard name={candidate.name} data={candidate} />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    alignSelf: "center",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 30,
    color: "#BBBBBB",
  },
  body: {
    paddingLeft:10,
    paddingRight:10,
    paddingTop: Constants.statusBarHeight,
    fontFamily: "Roboto",
    paddingBottom: 300,
    backgroundColor: "white",
    flex:1
  },
  mainTabItem: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 26,
    color: "#000000",
  },
  scrollview: { paddingBottom: 150 },
});
