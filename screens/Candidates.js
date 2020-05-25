import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Layout, Tab, TabView, Text, Input } from "@ui-kitten/components";

export const searchBar = () => {
  const [value, setValue] = React.useState("");

  return (
    <Input
      placeholder="Search candidates here"
      value={value}
      onChangeText={(nextValue) => setValue(nextValue)}
    />
  );
};
export default function Candidates(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // change 'Charlotte' to local once we scale
  // feed in local city/town based on location
  return (
    <View>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="Executive">
          <Layout style={styles.mainTabItem}>
            <Text category="h2">Executive</Text>
          </Layout>
        </Tab>
        <Tab title="Congressional">
          <Layout style={styles.mainTabItem}>
            <Text category="h2">Congressional</Text>
          </Layout>
        </Tab>
        <Tab title="Charlotte">
          <Layout style={styles.mainTabItem}>
            <Text category="h2">Charlotte</Text>
          </Layout>
        </Tab>
      </TabView>
      <Text>{props.location || "There is no props location"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTabItem: {
    position: "absolute",
    width: 106,
    height: 24,
    left: 11,
    top: 66,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 26,
    color: "#000000",
  },
  header: {
    position: "absolute",
    width: 183,
    height: 28,
    left: 18,
    top: 118,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
    color: "#000000",
  },
  subTabItem: {
    position: "absolute",
    width: 81,
    height: 21,
    left: 18,
    top: 154,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "#000000",
  },
  redCand: {
    position: "absolute",
    width: 119,
    height: 19,
    left: 72,
    top: 276,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    color: "#DE0100",
  },
  blueCand: {
    position: "absolute",
    width: 119,
    height: 19,
    left: 72,
    top: 276,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    color: "#0015BC",
  },
  description: {
    position: "absolute",
    width: 322,
    height: 18,
    left: 18,
    top: 221,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    textTransform: "capitalize",
    color: "#101433",
  },
  subDesc: {
    position: "absolute",
    width: 189,
    height: 16,
    left: 87,
    top: 355,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#C7A6A6",
  },
});
