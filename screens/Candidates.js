import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import { CandidateCard } from "../components/Candidate";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
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
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
      </View>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 30,
  },
  body: {
    paddingLeft:160,
    paddingRight:160,
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
  navBar: {
    flexDirection: "row",
    display: "flex",
    paddingBottom: 26,
    paddingLeft: 22,
    paddingRight: 22,
  },
  scrollview: { paddingBottom: 150 },
});
