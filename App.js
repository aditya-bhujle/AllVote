import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { stack, useState, useEffect } from "react";
import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as SplashScreen from "expo-splash-screen";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const Stack = createStackNavigator();
//When set to true, uses the default zip code 28226
//This is done to avoid overloading Geoencoding API, set to false for production
const IS_IN_DEV = true;
export default function App(props) {
  const isLoadingComplete = useCachedResources();
  var API_KEY = "AIzaSyC5D-5j4Nj5jRDx_Uz7IWKs5JeWWEvYWj0";
  const [location, setLocation] = useState(null);
  const [civicData, setCivicData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("Waiting For location");
  const [loadingComplete, setLoadingComplete] = useState(false);
  const init = async () => {
    console.log("use effect is called");
    try {
      // Keep on showing the SlashScreen
      await SplashScreen.preventAutoHideAsync();
      await performAPICalls();
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      // Hiding the SplashScreen
      await SplashScreen.hideAsync();
    }
  };
  useEffect(() => {
    init();
  }, []);

  if (!isLoadingComplete || civicData == null) {
    return null;
  } else {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                initialParams={{ location: location, civicData: civicData }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ApplicationProvider>
    );
  }

  async function performAPICalls() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    //if IS_IN_DEV is true a dummy address is used instead,
    //To not overload geocoding API
    if (IS_IN_DEV) {
      var json_address = { address: { postcode: 28226 } };
      setLocation(json_address.address);
    } else {
      let location = await Location.getCurrentPositionAsync({});
      let urlString = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.coords.latitude}&lon=${location.coords.longitude}`;

      try {
        let response = await fetch(urlString);
        var json_address = await response.json();
      } catch (error) {
        console.error(error);
      }
      setLocation(json_address.address);
    }
    //Location is used to grab civic data from api
    // "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyC5D-5j4Nj5jRDx_Uz7IWKs5JeWWEvYWj0&address=27519&electionId=2000"
    let urlString = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${API_KEY}&address=${json_address.address.postcode}&electionId=2000`;
    console.log("Google api request is made");
    try {
      let response = await fetch(urlString);
      var json_civicData = await response.json();
    } catch (error) {
      console.error(error);
    }
    setCivicData(json_civicData);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
