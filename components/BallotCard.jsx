import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BallotCard({ name, contest, party }) {
  return (
    <View style={styles.card}>
      <View style={styles.rectangle}></View>
      <View stlye={{ flexDirection: "column" }}>
        <View style={styles.rowWrap}>
          <Text style={styles.contest}> {contest}</Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.party}>{party}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    display: "flex",
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "#9B51E0",
    borderRadius: 8,
    flexDirection: "row",
  },
  name: {
    marginLeft: 14,
    fontWeight: "900",
    fontSize: 22,
    lineHeight: 26,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 5,
    paddingRight: 5,
  },
  contest: {
    marginLeft: 14,
    marginRight:14,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    color: "rgba(255, 255, 255, 0.55)",
    marginBottom: 10,
  },
  party: {
    marginLeft: 14,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "rgba(255, 255, 255, 0.75)",
    marginBottom: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#C7A6A6",
  },
  rectangle: {
    backgroundColor: "#C4C4C4",
    height: 100,
    width: 100,
    marginTop:10,
    borderRadius: 18,
  },
});
