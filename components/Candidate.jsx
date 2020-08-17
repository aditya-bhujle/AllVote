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

import { FlexStyleProps } from "@ui-kitten/components/devsupport";

export function CandidateCard({ name, navigation }) {
  return (
    <View style={styles.card}>
      <View style={styles.rectangle}></View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#C7A6A6",
  },
  rectangle: {
    backgroundColor: "#101433",
    borderRadius: 8,
    height: 40,
    width: 40,
  },
});
