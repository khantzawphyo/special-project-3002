import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageWrapper({ children }: any) {
	return <SafeAreaView className="flex-1 bg-slate-50">{children}</SafeAreaView>;
}
