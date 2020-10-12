import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import ConceptScreen from "../screens/ConceptScreen";
import BallotScreen from "../screens/BallotScreen";
import Candidates from "../screens/Candidates";
import VotingScreen from "../screens/VotingScreen"

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Concept";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerShown:false ,headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>

      <BottomTab.Screen
        name="Concept"
        component={ConceptScreen}
        initialParams={{
          location: route.params.location,
          nav: navigation,
        }}
        headerMode="screen"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Ballot"
        component={BallotScreen}
        initialParams={{
          location: route.params.location,
          civicData: route.params.civicData,
          nav: navigation,
        }}
        options={{
          headerShown: false,
          title: "My Ballots",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Concept":
      return "Home";
    case "Ballot":
      return "My Ballots";
    case "Candidates":
      return "Candidates";
    case "Voting":
      return "Voting Screen";
  }
}
