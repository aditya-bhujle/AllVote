import React from "react";
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Linking

} from "react-native";

import { stack, useState, useEffect, useCallback } from "react";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";

export function Reminder({ URL,box_style, buttontext1_color, buttontext2_color, title, content, buttonText1, buttonText2,onPress2 }) {
	const OpenURLButton = ({ url, children }) => {
		const handlePress = useCallback(async () => {
			// Checking if the link is supported for links with custom URL scheme.
			const supported = await Linking.canOpenURL(url);
			await Linking.openURL(url);
		}, [url]);
		return <TouchableOpacity
			onPress={handlePress}
			style={styles.button}
			title={children}>
			<Text style={buttontext1_color}>{buttonText1}</Text>
		</TouchableOpacity>
	};

	return (
		<View style={box_style}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<OpenURLButton url={URL}></OpenURLButton>
			<TouchableOpacity
				onPress={onPress2}
				style={styles.button}>
				<Text style={buttontext2_color}>{buttonText2}</Text>
			</TouchableOpacity>
		</View>
	);
}
export function Remainder2({box_style, buttontext1_color, buttontext2_color, title, content, buttonText1, buttonText2, onPress1, onPress2 }) {
	return (
		<View style={box_style}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<TouchableOpacity
				onPress={onPress1}
				style={styles.button}>
				<Text style={buttontext1_color}>{buttonText1}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={onPress2}
				style={styles.button}>
				<Text style={buttontext2_color}>{buttonText2}</Text>
			</TouchableOpacity>
		</View>
	);
}
export function MakeBallot({ date, title, content, buttonText1, buttonText2, onPress1, onPress2 }) {
	return (
		<View style={styles.MakeBallotCard}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={onPress1}
					style={styles.MakeballotButton}>
					<Text style={styles.BallotbuttonText}>{buttonText1}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={onPress2}
					style={styles.MakeballotButton}>
					<Text style={styles.BallotbuttonText}>{buttonText2}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export function GoToCandidate({ box_style, buttonText_color, title, content, buttonText, onPress }) {
	return (
		<View style={box_style}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<TouchableOpacity
				onPress={onPress}
				style={styles.button}>
				<Text style={buttonText_color}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
}
export function CompletedCard({ box_style, button_text_color, title, content, onPress, buttonText }) {
	return (
		<View style={box_style}>
			<Text style={styles.CompletedCardTitle}>{title}</Text>
			<TouchableOpacity
				onPress={onPress}
				style={styles.ballotButton}>
				<Text style={button_text_color}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
}

export function ActionItem({ checked1, checked2, checked3, onToggle1, onToggle2, onToggle3 }) {
	// const [isSelected1, setSelection1] = useState(false);
	// const [isSelected2, setSelection2] = useState(false);
	// const [isSelected3, setSelection3] = useState(false);

	return (
		<View style={styles.ActionItemsCard}>

			<CircleCheckBox
				checked={checked1}
				onToggle={onToggle1}
				labelPosition={LABEL_POSITION.RIGHT}
				label="Registered to vote"
				innerColor="#101433"
				outerColor="white"
				filterColor="white"
				styleLabel={styles.ActionItemsTExt}
				styleCheckboxContainer={styles.checkboxcont}
			/>
			<CircleCheckBox
				checked={checked2}
				onToggle={onToggle2}
				labelPosition={LABEL_POSITION.RIGHT}
				label="Requested a ballot"
				innerColor="#101433"
				outerColor="white"
				filterColor="white"
				styleLabel={styles.ActionItemsTExt}
				styleCheckboxContainer={styles.checkboxcont}
			/>
			<CircleCheckBox
				checked={checked3}
				onToggle={onToggle3}
				labelPosition={LABEL_POSITION.RIGHT}
				label="Make a practice ballot"
				innerColor="#101433"
				outerColor="white"
				filterColor="white"
				styleLabel={styles.ActionItemsTExt}
				styleCheckboxContainer={styles.checkboxcont}
			/>
		</View>
	)

}
export function Ballot({ title, content, imageTitle, name, onPress, buttonText }) {
	return (
		<View style={styles.Ballotcard}>
			<Text style={styles.date}>{(new Date().getDate())} {new Date().getMonth() + 1}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<Text style={styles.imageTitle}>{imageTitle}</Text>
			<View style={styles.rectangle}></View>
			<Text style={styles.name}>{name}</Text>
			<TouchableOpacity
				onPress={onPress}
				style={styles.ballotButton}>
				<Text style={styles.Ballotbutton2Text}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
}
export function ElectionDayCard({ date, title, content, imageTitle, name }) {
	return (
		<View style={styles.ElectionDaycard}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<Text style={styles.imageTitle}>{imageTitle}</Text>
			<View style={styles.rectangle}></View>
			<Text style={styles.name}>{name}</Text>
		</View>
	);
}
export function Voting({ title }) {
	return (
		<View style={styles.votingCard}>

			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity
				onPress={() => alert('navigated to Quiz page')}
				style={styles.button}>
				<Text style={styles.VotingButtonText}>Take The Quiz!</Text>
			</TouchableOpacity>
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
	votingCard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#219653",
		borderRadius: 8,
	},
	ElectionDaycard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#9B51E0",
		borderRadius: 8,
	},
	ActionItemsCard: {
		marginTop: 18,
		marginBottom: 10,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#101433",
		borderRadius: 8,
	},
	rectangle: {
		position: "absolute",
		width: 40,
		height: 40,
		left: 18,
		top: 145,
		backgroundColor: "#F2F2F2",
		borderRadius: 8,
	},
	CompletedCardTitle:{
		color: "#101433",
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "900",
		fontSize: 22,
		lineHeight: 26,
		width: 260,
		marginBottom: 10,
	},
	Ballotcard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#EB5757",
		borderRadius: 8,
	},
	MakeBallotCard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: '#219653',
		borderRadius: 8,
	},
	GoToCandidateCard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: '#101433',
		borderRadius: 8,
	},
	button:
	{
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		right: 30,
		height: 15,
		width: 312
	},
	MakeballotButton:
	{
		backgroundColor: '#FFFFFF',
		position: 'relative',
		borderRadius: 8,
		height: 32,
		width: 140,
		top: 5
	},
	item: {
		width: "80%",
		backgroundColor: "white",
		borderRadius: 8,
		padding: 10,
		marginBottom: 10,
		flexDirection: "row",
	},
	checkBoxTxt: {
		marginLeft: 20
	},
	ballotButton:
	{
		backgroundColor: '#FFFFFF',
		position: 'relative',
		borderRadius: 8,
		height: 32,
		width: 100,
		left: 250
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		flex: 1,
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
	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	buttonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#2F80ED',
		lineHeight: 19
	},
	BallotbuttonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#219653',
		lineHeight: 19
	},
	Ballotbutton2Text:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#EB5757',
		lineHeight: 19
	},
	ActionItemsTExt:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: 'white',
		lineHeight: 19
	},
	VotingButtonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#219653',
		lineHeight: 19
	},
	GoToCandidatebuttonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#101433',
		lineHeight: 19
	},

	content: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 18,
		lineHeight: 21,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop:2
	},
	Action_Items_content: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 18,
		lineHeight: 21,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop: 2,
		marginBottom: 10
	},
	imageTitle: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 14,
		lineHeight: 16,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop: 10
	},
	name: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 15,
		lineHeight: 18,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop: 60
	},
	button: {
		marginTop: 11,
		height: 32,
		backgroundColor: "#FFF",
		color: "#2F80ED",
		borderRadius: 8,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
	},
	container1: {
		flex: 1,
		justifyContent: 'center',
		// paddingTop: Constants.statusBarHeight,
		backgroundColor: '#219653',
		padding: 8,
	},
	checkboxcont: {
		marginBottom: 10

	},
});

