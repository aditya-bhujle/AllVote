import * as React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Layout, Tab, TabView, Text, Input } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import { CandidateCard } from "../components/Candidate";

export default function Candidates(props) {
  const [value, setValue] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  //function used for the search bar to work
  function searchBarFilter(ele) {
    if (value == "") {
      return true;
    } else {
      return (
        ele.name.toLowerCase().includes(value.toLowerCase()) |
        ele.party.toLowerCase().includes(value.toLowerCase())
      );
    }
  }
  // change 'Charlotte' to local once we scale
  // feed in local city/town based on location

  return (
    <View style={styles.body}>
      <Input
        placeholder="Search candidates here"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="Executive">
          <Layout style={styles.mainTabItem}></Layout>
        </Tab>
        <Tab title="Congressional">
          <Layout style={styles.mainTabItem}></Layout>
        </Tab>
        <Tab title="Charlotte">
          <Layout style={styles.mainTabItem}></Layout>
        </Tab>
      </TabView>
      <View style={styles.scrollview}>
        <ScrollView>
          {props.route.params.civicData
            .filter(searchBarFilter)
            .map((candidate, index) => (
              <TouchableHighlight
                onPress={() =>
                  props.route.params.nav.navigate("CandidateProfile", {
                    data: candidate,
                  })
                }
              >
                <CandidateCard
                  name={candidate.name}
                  navigation={props.route.params.nav}
                  key={index}
                />
              </TouchableHighlight>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "Roboto",
    paddingBottom: 165,
  },
  mainTabItem: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 26,
    color: "#000000",
  },
  scrollview: {},
});
