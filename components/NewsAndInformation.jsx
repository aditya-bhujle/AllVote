import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NewsHubCardBlack, NewsHubCardGreen } from "../components/HubCard";
export default function NewsAndInformation() {
  return (
    <View style={styles.whiteBorder}>
      <Text style={styles.textstyle}>News and Information</Text>
      <View style={styles.scrollview}>
        <ScrollView>
          <NewsHubCardBlack
            buttonText_color={styles.NewsBarButton}
            title="Biden and Harris make First Appearance"
            content="Joe Biden introduced Kamala Harris as his running mate in Wilmington, Del., and the pair hammered President"
            buttonText="Open"
            onPress={() =>
              Linking.openURL("https://genprogress.org/want-run-local-office/")
            }
          />
          <NewsHubCardBlack
            buttonText_color={styles.NewsBarButton}
            title="Biden and Harris make First Appearance"
            content="Joe Biden introduced Kamala Harris as his running mate in Wilmington, Del., and the pair hammered President"
            buttonText="Open"
            onPress={() =>
              Linking.openURL("https://genprogress.org/want-run-local-office/")
            }
          />
          <NewsHubCardBlack
            buttonText_color={styles.NewsBarButton}
            title="Biden and Harris make First Appearance"
            content="Joe Biden introduced Kamala Harris as his running mate in Wilmington, Del., and the pair hammered President"
            buttonText="Open"
            onPress={() =>
              Linking.openURL("https://genprogress.org/want-run-local-office/")
            }
          />
          <NewsHubCardBlack
            buttonText_color={styles.NewsBarButton}
            title="Biden and Harris make First Appearance"
            content="Joe Biden introduced Kamala Harris as his running mate in Wilmington, Del., and the pair hammered President"
            buttonText="Open"
            onPress={() =>
              Linking.openURL("https://genprogress.org/want-run-local-office/")
            }
          />
          <NewsHubCardBlack
            buttonText_color={styles.NewsBarButton}
            title="Biden and Harris make First Appearance"
            content="Joe Biden introduced Kamala Harris as his running mate in Wilmington, Del., and the pair hammered President"
            buttonText="Open"
            onPress={() =>
              Linking.openURL("https://genprogress.org/want-run-local-office/")
            }
          />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  whiteBorder: {
    margin: -20,
    marginTop: 26,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textstyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 59,
    marginLeft: 18,
    marginTop: 23,
    marginBottom: 16,
  },
  scrollview: {
    paddingBottom: 100,
  },
  NewsBarButton: {
    position: "relative",
    top: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#101433",
    lineHeight: 19,
  },
});
