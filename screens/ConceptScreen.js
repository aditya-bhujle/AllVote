import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import Constants from 'expo-constants';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Reminder, MakeBallot, GoToCandidate } from "../components/HubCard";
export default function ConceptScreen() {

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome back, Aditya!</Text>
        <Text style={styles.subheader}>Mecklenburg County, Charlotte NC</Text>
        <Reminder
          date="Tuesday, November 3rd "
          title="Set-up Voting for Election Day!"
          content="Check that you’re elligible to vote, learn how to register, and learn where to go."
          buttonText1="Go To Voting Tab"
          buttonText2="Remaind Me Later"
          onPress1={() => alert('Navigated To Voting Tab')}
          onPress2={() => alert('Remaind me later')}

        />
        <MakeBallot
          date="Tuesday, November 3rd "
          title="Super Tuesday is in 3 days!"
          content="Presidential primary vote for North Carolina"
          buttonText1="Make Ballot"
          buttonText2="Learn More"
          onPress1={() => alert('Navigated to Make Ballot')}
          onPress2={() => alert('Navigated to LearnMore')}
        />
        <GoToCandidate
          date="Tuesday, November 3rd "
          title="Add Local Candidates to Your Ballot"
          content="Choose a Mayor, Governor, Treasurer and Senate official for your NC Election Day Ballot"
          buttonText="Go To Candidate Page"
          onPress={() => alert('Navigated to Candidate Page')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subheader: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "700",
    color: "#BBBBBB",
  },
  contentContainer: {
    paddingTop: 30,
  },
  scrollview: {
    paddingBottom: 40,
  },
});
