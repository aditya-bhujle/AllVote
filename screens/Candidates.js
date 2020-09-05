import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
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
        <Tab title="Federal">
          <Layout style={styles.mainTabItem}></Layout>
        </Tab>
        <Tab title="State">
          <Layout style={styles.mainTabItem}></Layout>
        </Tab>
        <Tab title="Local">
          <Layout style={styles.mainTabItem}></Layout>
        </Tab>
      </TabView>
      <Text style = {{fontSize:24,lineHeight:28,fontWeight:"bold", paddingTop:20, paddingBottom:8, paddingLeft:18}}>2020 Candidates</Text>
      <View style={styles.scrollview}>
        <ScrollView>
          {props.route.params.civicData
            .filter(searchBarFilter)
            .map((candidate, index) => (
              <TouchableOpacity
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
              </TouchableOpacity>
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
    backgroundColor:"white"
  },
  mainTabItem: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 26,
    color: "#000000",
  },
  scrollview: {},
});
