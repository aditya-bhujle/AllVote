import * as WebBrowser from "expo-web-browser";
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
import {Reminder} from "../components/HubCard";

export default function ConceptScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Welcome back, Aditya!</Text>
			<Text style={styles.subheader}>Mecklenburg County, Charlotte NC</Text>
			<Reminder
				date="Tuesday, November 3rd"
				title="Set-up Voting for Election Day!"
				content="Check that you’re elligible to vote, learn how to register, and learn where to go."
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		fontSize: 24,
	},
	subheader: {
		marginTop: 5,
		fontSize: 16,
		fontWeight: "700",
		color: "#BBBBBB",
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
