import * as React from "react";
import Constants from 'expo-constants';
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from "react-native";

import { Ballot, ElectionDayCard } from "../components/HubCard";

export default function BallotScreen() {
	// get ballot date component from "Candidates" screen

	// Below creates a 'ballots' array of ballot objects
	// let ballots = [
	// 	{ election: "monday", title: "election date", content: "Sign up to vote" },
	// 	{ election: "monday", title: "election date", content: "Sign up to vote" },
	// 	{ election: "monday", title: "election date", content: "Sign up to vote" },
	// 	{ election: "monday", title: "election date", content: "Sign up to vote" },
	// ];

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<Text style={styles.header}>My Ballots</Text>
				<Text style={styles.subheader}> Tuesday, March 3rd, 2020 </Text>
				<Ballot
					date="Presidential Primary for North Carolina"
					title="Super Tuesday Ballot "
					content="1/1 Selected "
					imageTitle="Presidential"
					name="Joe Biden"
				/>
				<ElectionDayCard
					date="Election Day Nationwide"
					title="Election Day 2020 "
					content="1/13 Selected "
					imageTitle="Presidential"
					name="Joe Biden"
				/>
			</View>
		</ScrollView>
		// <View style={styles.container}>
		// 	<Text style={styles.header}>My Ballots</Text>

		// 	{/* To loop through ballots array to get the right ballot */}
		// 	{/* {ballots.map((ballot) => (
		// 		<Ballot
		// 			date={ballot.date}
		// 			election={ballot.election}
		// 			title={ballot.title}
		// 			content={ballot.content}
		// 		/>
		// 	))} */}
		// </View>
	);
}

const styles = StyleSheet.create({


	container: {
		paddingHorizontal: 14,
		paddingVertical: 14,
		flex: 1,
		// marginTop: Constants.statusBarHeight,
		backgroundColor: 'white'
	},
	scrollview: {
		paddingBottom: 40,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	subheader: {
		marginTop: 5,
		fontSize: 16,
		fontWeight: "700",
		color: "#BBBBBB",
	},
});
