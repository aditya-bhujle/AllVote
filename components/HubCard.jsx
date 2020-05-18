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

export function Reminder({ date, title, content }) {
	return (
		<View style={styles.card}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<Button style={styles.button} title={"Go to Voting Tab"} />
			<Button title={"Remind me later"} />
		</View>
	);
}
export function Ballot({ date, election, title, content }) {
	return (
		<View style={styles.card}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.election}>{election}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<Button style={styles.button} title={"Edit"} />
			
		</View>
	);
}


const styles = StyleSheet.create({
	card: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#2F80ED",
		borderRadius: 8,
	},
	date: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 16,
		lineHeight: 19,
		color: "rgba(239, 239, 239, 0.55)",
		marginBottom: 8,
	},
	election: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 16,
		lineHeight: 19,
		color: "rgba(239, 239, 239, 0.55)",
		marginBottom: 8,
	},
	title: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "900",
		fontSize: 22,
		lineHeight: 26,
		color: "#FFFFFF",
		marginBottom: 10,
	},
	content: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 18,
		lineHeight: 21,
		color: "rgba(255, 255, 255, 0.75)",
	},
	button: {
		marginTop: 11,
		height: 32,
		backgroundColor: "#FFF",
		color: "#2F80ED",
		borderRadius: 8,
	},
});
