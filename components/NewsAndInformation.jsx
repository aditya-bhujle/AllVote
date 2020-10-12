import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ActivityIndicator} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NewsHubCardBlack, NewsHubCardGreen } from "../components/HubCard";
import {NEWS_API_KEY} from "../env";
export default function NewsAndInformation({ candidateName }) {
  const [NewsData, SetNewsData] = useState(null);
  useEffect(() => {
    async function getNews(name) {
      var nameSpacesRemoved = candidateName.replace(" ", "%20");
      var response = await fetch(
        `https://bing-news-search1.p.rapidapi.com/news/search?freshness=Month&textFormat=Raw&safeSearch=Off&q=${nameSpacesRemoved}`,
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
      SetNewsData(json_response.value);
    }
    getNews(candidateName);
  }, []);
  if (NewsData == null){
    return (
      <View style={styles.whiteBorder}>
      <Text style={styles.textstyle}>News and Information</Text>
      <ActivityIndicator size="large" color="black" />
    </View>
    );
  }
  else
  return (
    <View style={styles.whiteBorder}>
      <Text style={styles.textstyle}>News and Information</Text>
      <View style={styles.scrollview}>
        <ScrollView decelerationRate={0.5}>
          {NewsData.map((x, index)=>(
            <NewsHubCardBlack
            key={index}
            buttonText_color={styles.NewsBarButton}
            title={x.name}
            content={x.description}
            buttonText="Open"
            onPress={() =>
              Linking.openURL("https://genprogress.org/want-run-local-office/")
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
    marginBottom: 16,
  },
  scrollview: {
    paddingBottom: 150,
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
