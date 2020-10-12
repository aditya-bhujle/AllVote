import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import Constants from "expo-constants";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Linking,
} from "react-native";
import { stack, useState, useEffect, useCallback } from "react";

import { ScrollView } from "react-native-gesture-handler";
import {
  Reminder,
  CompletedCard,
  GoToCandidate,
  ActionItem,
  Remainder2,
} from "../components/HubCard";
export default function ConceptScreen(props) {
  const newDate = new Date();
  var one_day = 1000 * 60 * 60 * 24;
  const ElectionDay = new Date(newDate.getFullYear(), 11, 3);
  var Result = Math.round(ElectionDay.getTime() - newDate.getTime()) / one_day;
  var Final_Result = Result.toFixed(0) - 30;
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome To AllVote.</Text>
        <Text style={styles.subheader}>
          {props.route.params.location.county},{" "}
          {props.route.params.location.city}, NC
        </Text>
        <Text style={styles.days}>{Final_Result} days till Election Day!</Text>
        <Text style={styles.header2}>Action Items</Text>
        <ActionItem
          checked1={(isSelected1, showComponent1)}
          onToggle1={
            (() => setShowComponent1(showComponent1 ? true : false)) &&
            (() => setSelection1(isSelected1 ? false : true))
          }
          checked2={(isSelected2, showComponent2)}
          onToggle2={
            (() => setShowComponent2(showComponent2 ? true : false)) &&
            (() => setSelection2(isSelected2 ? false : true))
          }
          checked3={(isSelected3, showComponent3)}
          onToggle3={
            (() => setShowComponent3(showComponent3 ? true : false)) &&
            (() => setSelection3(isSelected3 ? false : true))
          }
        />
        <Text style={styles.header2}>Learn</Text>
        <GoToCandidate
          box_style={styles.card4}
          buttonText_color={styles.VotingButtonText}
          title="Current Voting Situation"
          content="Learn more about how COVID-19 has impacted your ability to vote."
          buttonText="Learn More"
          onPress={() =>
            Linking.openURL(
              "https://www.ucsusa.org/resources/voting-and-covid-19"
            )
          }
        />

        {showComponent1 ? (
          <CompletedCard
            box_style={styles.CompletedCard}
            button_text_color={styles.CompletedbuttonText}
            title="Hurray, you've registered to vote!"
            buttonText="Undo"
            onPress={() =>
              setShowComponent1(showComponent1 ? false : true) &&
              (() => setSelection1(isSelected1 ? false : true))
            }
          />
        ) : (
          <Reminder
            URL="https://www.ncdot.gov/dmv/offices-services/online/Pages/voter-registration-application.aspx"
            box_style={styles.card}
            buttontext1_color={styles.buttonText}
            buttontext2_color={styles.buttonText}
            title="Set-up Voting for Election Day!"
            content="Check that you’re elligible to vote, learn how to register, and learn where to go."
            buttonText1="Find out how to register"
            buttonText2="I've completed this"
            onPress2={() =>
              setShowComponent1(showComponent1 ? false : true) &&
              (() => setSelection1(isSelected1 ? false : true))
            }
          />
        )}
        {showComponent2 ? (
          <CompletedCard
            box_style={styles.CompletedCard}
            button_text_color={styles.CompletedbuttonText}
            title="Awesome, now your ballot is on the way!"
            buttonText="Undo"
            onPress={() =>
              setShowComponent2(showComponent2 ? false : true) &&
              (() => setSelection2(isSelected2 ? false : true))
            }
          />
        ) : (
          <Reminder
            URL="https://www.ncsbe.gov/Voting-Options/Absentee-Voting"
            box_style={styles.card2}
            buttontext1_color={styles.buttonText2}
            buttontext2_color={styles.buttonText2}
            title="Request a ballot"
            content="One step closer to casting a vote for your favorite candidate! Learn how to request a mail-in ballot."
            buttonText1="Request a ballot"
            buttonText2="I've completed this"
            onPress2={() =>
              setShowComponent2(showComponent2 ? false : true) &&
              (() => setSelection2(isSelected2 ? false : true))
            }
          />
        )}
        {showComponent3 ? (
          <CompletedCard
            box_style={styles.CompletedCard}
            button_text_color={styles.CompletedbuttonText}
            title="Hurray, you've made a practice ballot!"
            buttonText="Undo"
            onPress={() =>
              setShowComponent3(showComponent3 ? false : true) &&
              (() => setSelection3(isSelected3 ? false : true))
            }
          />
        ) : (
          <Remainder2
            box_style={styles.card3}
            buttontext1_color={styles.buttonText3}
            buttontext2_color={styles.buttonText3}
            title="Make a practice ballot"
            content="One step closer to casting a vote for your favorite candidate! Learn how to request a mail-in ballot."
            buttonText1="Practice Ballot"
            buttonText2="I've completed this"
            onPress1={() => props.route.params.nav.navigate("Candidates")}
            onPress2={() =>
              setShowComponent3(showComponent3 ? false : true) &&
              (() => setSelection3(isSelected3 ? false : true))
            }
          />
        )}
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
    backgroundColor: "white",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  header2: {
    fontSize: 25,
    fontWeight: "bold",
    top: 10,
    marginBottom: 5,
  },
  days: {
    fontSize: 30,
    top: 10,
    marginBottom: 15,
    fontWeight: "bold",
    color: "red",
  },
  subheader: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "700",
    color: "#BBBBBB",
    marginBottom: 5,
  },
  contentContainer: {
    paddingTop: 30,
  },
  scrollview: {
    paddingBottom: 40,
  },

  card: {
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#2F80ED",
    borderRadius: 8,
  },
  card2: {
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#EB5757",
    borderRadius: 8,
  },
  card3: {
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#9B51E0",
    borderRadius: 8,
  },
  card4: {
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#219653",
    borderRadius: 8,
  },
  card5: {
    marginTop: 3,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#101433",
    borderRadius: 8,
  },
  buttonText: {
    position: "relative",
    top: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#2F80ED",
    lineHeight: 19,
  },
  buttonText2: {
    position: "relative",
    top: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#EB5757",
    lineHeight: 19,
  },
  buttonText3: {
    position: "relative",
    top: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#9B51E0",
    lineHeight: 19,
  },
  VotingButtonText: {
    position: "relative",
    top: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#219653",
    lineHeight: 19,
  },
  CompletedCard: {
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#BBBBBB",
    borderRadius: 8,
  },
  CompletedbuttonText: {
    position: "relative",
    top: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    lineHeight: 19,
  },
});
