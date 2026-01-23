import TeamsList from "@/components/TeamsList";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
	Dimensions,
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const { width } = Dimensions.get("window");
// Refined width calculation for better spacing
const CARD_WIDTH = (width - 40 - 20) / 2;

const DATA = [
	{
		id: "1",
		title: "Active Projects",
		count: "12",
		icon: "rocket",
		color: "#472e9c",
	},
	{
		id: "2",
		title: "New Proposals",
		count: "05",
		icon: "document-text",
		color: "#f59e0b",
	},
	{
		id: "4",
		title: "Refresh Data",
		count: "Sync",
		icon: "refresh",
		color: "#ef4444",
	},
	{
		id: "3",
		title: "Team Members",
		count: "48",
		icon: "people",
		color: "#10b981",
	},
];

const GridItem = ({ item }: any) => (
	<TouchableOpacity
		style={{ width: CARD_WIDTH }}
		className="bg-white p-4 rounded-xl mb-4 shadow-sm border border-slate-300">
		<View
			style={{ backgroundColor: `${item.color}15` }}
			className="h-10 w-10 rounded-xl items-center justify-center mb-3">
			<Ionicons
				name={`${item.icon}-outline`}
				size={20}
				color={item.color}
			/>
		</View>
		<Text className="text-xl font-bold text-gray-900">{item.count}</Text>
		<Text className="text-gray-500 text-[12px] font-semibold mt-1">
			{item.title}
		</Text>
	</TouchableOpacity>
);

export default function SupervisorDashboard() {
	const DashboardHeader = () => (
		<View className="pt-1">
			<View className="mb-4 px-5">
				<Text className="text-2xl font-bold text-[#472e9c]">Quick Actions</Text>
			</View>

			<View className="px-5">
				<FlatList
					data={DATA}
					renderItem={({ item }) => <GridItem item={item} />}
					keyExtractor={(item) => item.id}
					numColumns={2}
					scrollEnabled={false}
					columnWrapperStyle={{ justifyContent: "space-between" }}
				/>
			</View>

			<View className="my-3 px-5">
				<Text className="text-2xl font-bold text-[#472e9c]">Active Teams</Text>
			</View>
		</View>
	);

	return (
		<View className="flex-1 bg-slate-50">
			<FlatList
				data={[]}
				renderItem={null}
				ListHeaderComponent={<DashboardHeader />}
				ListFooterComponent={
					<View className="px-5">
						<TeamsList />
					</View>
				}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
