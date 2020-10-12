import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NewsHubCardBlack, NewsHubCardGreen } from "../components/HubCard";
import { NEWS_API_KEY } from "../env";
export default function NewsAndInformation({
  candidateName,
  contest,
  location,
  callback,
}) {
  const [newsData, setNewsData] = useState(null);
  const [isSocialMediaBarcollapse, setisSocialMediaBarcollapse] = useState(
    false
  );
  const generateStyleForLongNames = function () {
    if (candidateName.length >= 13) {
      return {
        height:
          Dimensions.get("window").height * 0.639 - candidateName.length * 3 + 30,
        paddingBottom: Dimensions.get("window").height * 0.03797 + 1,
      };
    } else {
      return {
        height: Dimensions.get("window").height * 0.639 - candidateName.length + 15,
        paddingBottom: Dimensions.get("window").height * 0.03797 + 1,
      };
    }
  };
  function removeSpaces(str) {
    return str.replace(" ", "%20");
  }
  // Makes the social media bar collapse when scroll view is not at the top
  const handlescroll = (event) => {
    var position = event.nativeEvent.contentOffset.y;
    if (position > Dimensions.get("window").height * 0.0949367) {
      callback(true);
      setisSocialMediaBarcollapse(true);
    }
    if (position == 0) {
      callback(false);
      setisSocialMediaBarcollapse(false);
    }
  };

  useEffect(() => {
    async function getNews(name) {
      var query =
        removeSpaces(candidateName) +
        "%20" +
        removeSpaces(contest) +
        "%20" +
        removeSpaces(location.county);
      var response = await fetch(
        `https://bing-news-search1.p.rapidapi.com/news/search?count=5&freshness=Month&textFormat=Raw&safeSearch=Off&q=${query}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": NEWS_API_KEY,
            "x-bingapis-sdk": "true",
          },
        }
      );
      var json_response = await response.json();
      setNewsData(json_response.value);
    }
    getNews(candidateName);
  }, []);
  if (newsData == null) {
    return (
      <View style={styles.whiteBorder}>
        <Text style={styles.textstyle}>News and Information</Text>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else
    return (
      <View style={styles.whiteBorder}>
        <View
          style={
            isSocialMediaBarcollapse
              ? generateStyleForLongNames()
              : styles.scrollview
          }
        >
          <Text style={styles.textstyle}>News and Information</Text>
          <ScrollView decelerationRate={0.5} onScroll={handlescroll}>
            {newsData.map((x, index) => (
              <NewsHubCardBlack
                key={x.url}
                buttonText_color={styles.NewsBarButton}
                title={x.name}
                content={x.description}
                buttonText="Open"
                onPress={() =>
                  WebBrowser.openBrowserAsync(x.url)
                }
              />
            ))}
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
    marginBottom: 5,
  },
  scrollview: {
    height: Dimensions.get("window").height * 0.639,
    paddingBottom: Dimensions.get("window").height * 0.08227,
  },
  scrollviewSocialMediaCollapsedLongName: {
    height: Dimensions.get("window").height * 0.639 - 30,
    paddingBottom: Dimensions.get("window").height * 0.03797 + 1,
  },
  scrollviewSocialMediaCollapsedShortName: {
    height: Dimensions.get("window").height * 0.639,
    paddingBottom: Dimensions.get("window").height * 0.03797 + 1,
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
