import React, { useEffect, useState } from "react";
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button,
} from "react-native";

import democratPic from "../assets/images/democrat.png";
import republicPic from "../assets/images/republican.png";
import unknownPic from "../assets/images/robot-dev.png";

export function CandidateCard({ name, data }) {
	const [candidatePicture, setCandidatePicture] = useState();

	useEffect(() => {
		async function determinePicture(jsonObject) {
			if (jsonObject["twitter picture"] != null) {
				setCandidatePicture({ uri: jsonObject["twitter picture"] });
			} else if (jsonObject["facebook picture"] != null) {
				let response = await fetch("https://" + jsonObject["facebook picture"]);
				var json_response = await response.json();

				if (!json_response.data.is_silhouette) {
					setCandidatePicture({ uri: json_response.data.url });
				}
			}
		}

		switch (data.party) {
			case "DEM":
				setCandidatePicture(democratPic);
				break;
			case "REP":
				setCandidatePicture(republicPic);
				break;
			default:
				setCandidatePicture(unknownPic);
				break;
		}

		determinePicture(data);
	}, [data]);

	function whichParty(jsonObject) {
		switch (jsonObject.party) {
			case "DEM":
				return "assets/images/democrat.png";
			case "REP":
				return "assets/images/republican.png";
			default:
				return "assets/images/unknown.svg";
		}
	}

	return (
		<View style={styles.card}>
			<Image style={styles.rectangle} source={candidatePicture}></Image>

			<Text style={styles.name}>{name}</Text>
			<Text style={styles.name}>{data.party}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		marginLeft: 18,
		marginRight: 18,
		marginTop: 5,
		backgroundColor: "#FFFFFF",
		borderRadius: 7,
		display: "flex",
		flexDirection: "row",
	},
	name: {
		marginLeft: 14,
		fontWeight: "bold",
		fontSize: 16,
		lineHeight: 19,
		color: "#000000",
	},
	title: {
		fontWeight: "500",
		fontSize: 14,
		lineHeight: 16,
		color: "#C7A6A6",
	},
	rectangle: {
		marginTop: 9,
		marginBottom: 9,
		backgroundColor: "#101433",
		borderRadius: 8,
		height: 40,
		width: 40,
	},
});
