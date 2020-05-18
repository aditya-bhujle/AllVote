import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
	//API key for google civic api
	var API_KEY = "AIzaSyC5D-5j4Nj5jRDx_Uz7IWKs5JeWWEvYWj0";
	const [location, setLocation] = useState(null);
	const [civicData, setCivicData] = useState(null);
	const [errorMsg, setErrorMsg] = useState("Waiting For location");
	//When component mountains, GPS location is fetched and converted
	//into a address which is then used to grab civicData object
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
			}

			let location = await Location.getCurrentPositionAsync({});
			let urlString = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.coords.latitude}&lon=${location.coords.longitude}`;
			try {
				let response = await fetch(urlString);
				var json_address = await response.json();
			} catch (error) {
				console.error(error);
			}
			console.log(json_address);
			console.log(json_address.address.post);
			setLocation(json_address.address);

			//Location is used to grab civic data from api
			// "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyC5D-5j4Nj5jRDx_Uz7IWKs5JeWWEvYWj0&address=27519&electionId=2000"
			urlString = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${API_KEY}&address=${json_address.address.postcode}&electionId=2000`;
			try {
				let response = await fetch(urlString);
				var json_civicData = await response.json();
			} catch (error) {
				console.error(error);
			}
			setCivicData(json_civicData);
		})();
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<View style={styles.welcomeContainer}>
					<Image
						source={
							__DEV__
								? require("../assets/images/robot-dev.png")
								: require("../assets/images/robot-prod.png")
						}
						style={styles.welcomeImage}
					/>
				</View>

				<View style={styles.getStartedContainer}>
					<DevelopmentModeNotice />

					<Text style={styles.getStartedText}>
					
						{civicData ? JSON.stringify(civicData) : errorMsg}
					</Text>

					<View
						style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
					>
						<MonoText>screens/HomeScreen.js</MonoText>
					</View>

					<Text style={styles.getStartedText}>
						Change any of the text, save the file, and your app will
						automatically reload.
					</Text>
				</View>

				<View style={styles.helpContainer}>
					<TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
						<Text style={styles.helpLinkText}>
							Help, it didn’t automatically reload!
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			<View style={styles.tabBarInfoContainer}>
				<Text style={styles.tabBarInfoText}>
					This is a tab bar. You can edit it in:
				</Text>

				<View
					style={[styles.codeHighlightContainer, styles.navigationFilename]}
				>
					<MonoText style={styles.codeHighlightText}>
						navigation/BottomTabNavigator.js
					</MonoText>
				</View>
			</View>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null,
};

function DevelopmentModeNotice() {
	if (__DEV__) {
		const learnMoreButton = (
			<Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
				Learn more
			</Text>
		);

		return (
			<Text style={styles.developmentModeText}>
				Development mode is enabled: your app will be slower but you can use
				useful development tools. {learnMoreButton}
			</Text>
		);
	} else {
		return (
			<Text style={styles.developmentModeText}>
				You are not in development mode: your app will run at full speed.
			</Text>
		);
	}
}

function handleLearnMorePress() {
	WebBrowser.openBrowserAsync(
		"https://docs.expo.io/versions/latest/workflow/development-mode/"
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		"https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	developmentModeText: {
		marginBottom: 20,
		color: "rgba(0,0,0,0.4)",
		fontSize: 14,
		lineHeight: 19,
		textAlign: "center",
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: "center",
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: "contain",
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: "rgba(96,100,109, 0.8)",
	},
	codeHighlightContainer: {
		backgroundColor: "rgba(0,0,0,0.05)",
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		lineHeight: 24,
		textAlign: "center",
	},
	tabBarInfoContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: "black",
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: "center",
		backgroundColor: "#fbfbfb",
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: "rgba(96,100,109, 1)",
		textAlign: "center",
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: "center",
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: "#2e78b7",
	},
});
