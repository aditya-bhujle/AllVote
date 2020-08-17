import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Reminder } from "../components/HubCard";

export default function CandidateProfile(data) {
  return (
    <View style={styles.body}>
      <View>
        <Text>{data.route.params.data.name}</Text>
        <Text>{data.route.params.data.contest}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    overflow: "hidden",
    backgroundColor: "#219653",
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
  },
  navHeader: {},
});
