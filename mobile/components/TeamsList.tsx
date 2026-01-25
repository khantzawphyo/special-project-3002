import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableHighlight, View } from "react-native";

const TEAMS_DATA = [
	{
		id: "1",
		projectName: "AI-Powered Predictive Maintenance for Smart Factories",
		leader: { name: "Thandar Aung", email: "thandar.aung@miit.edu.mm" },
		membersCount: 4,
		status: "active",
	},
	{
		id: "2",
		projectName: "Blockchain-Based Secure Student Credentialing System",
		leader: { name: "Kyaw Zayar Phyo", email: "k.zayarphyo@miit.edu.mm" },
		membersCount: 3,
		status: "under review",
	},
	{
		id: "3",
		projectName: "Hybrid Solar-Wind Power Optimization for Rural Areas",
		leader: { name: "Hlaing Bwar", email: "hlaing.bwar@miit.edu.mm" },
		membersCount: 2,
		status: "active",
	},
	{
		id: "4",
		projectName: "Edge Computing for Real-Time Traffic Management",
		leader: { name: "Su Myat Noe", email: "s.myatnoe@miit.edu.mm" },
		membersCount: 3,
		status: "on hold",
	},
];

const TeamCard = ({ item }: any) => (
	<TouchableHighlight className="bg-white p-5 rounded-xl mb-4 shadow-sm border border-gray-300 ">
		<View className="flex-row items-center">
			<View className="flex-1 mr-5">
				<Text
					className="font-bold text-[14px] leading-5 mb-2"
					numberOfLines={2}>
					{item.projectName}
				</Text>
				<Text className="text-[13px] font-medium">
					Leader: {item.leader.name}
				</Text>
				<View className="flex-row items-center mt-2">
					<Ionicons
						name="people-outline"
						size={14}
					/>
					<Text className="text-[13px] ml-1">{item.membersCount} members</Text>
				</View>
			</View>
			<Ionicons
				name="chevron-forward"
				size={22}
				className="text-primary-700"
			/>
		</View>
	</TouchableHighlight>
);

export default function TeamsList() {
	return (
		<View className="flex-1 bg-gray-50">
			<FlatList
				data={TEAMS_DATA}
				renderItem={({ item }) => <TeamCard item={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			/>
		</View>
	);
}
