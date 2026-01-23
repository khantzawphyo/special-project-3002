import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Pressable,
	Text,
	TextInput,
	View,
} from "react-native";

export default function LoginScreen() {
	const router = useRouter();
	const [rememberMe, setRememberMe] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleFormDataChange = (name: "email" | "password", value: string) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleLogin = async () => {
		console.log(formData);
		router.navigate("/dashboard");
	};

	return (
		<ImageBackground
			source={require("@/assets/images/main-bg.jpg")}
			className="flex-1"
			resizeMode="cover">
			<KeyboardAvoidingView
				className="flex-1"
				behavior={"padding"}
				keyboardVerticalOffset={-50}>
				<View className="flex-1 items-center justify-center px-4">
					<LinearGradient
						colors={["#472e9c", "#FFFFFF", "#472e9c"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={{ borderRadius: 25 }}
						className="p-1 w-full">
						<View className="w-full px-5 bg-white rounded-3xl py-5">
							<Image
								source={require("@/assets/images/wordmark.png")}
								className="h-32 w-full mb-2"
								resizeMode="center"
							/>

							<View className="mb-5">
								<Text className="font-semibold">Email</Text>
								<TextInput
									onChangeText={(text) => handleFormDataChange("email", text)}
									value={formData.email}
									className="border border-gray-400 px-3 py-3.5 rounded-xl mt-2"
									placeholder="example@miit.edu.mm"
								/>
							</View>

							<View className="mb-5">
								<Text className="font-semibold">Password</Text>
								<View className="relative">
									<TextInput
										onChangeText={(text) =>
											handleFormDataChange("password", text)
										}
										value={formData.password}
										textContentType="password"
										className="border border-gray-400 px-3 py-3.5 rounded-xl mt-2"
										placeholder="********"
										secureTextEntry={true}
									/>
								</View>
							</View>

							<View className="flex-row justify-between items-center mb-5">
								<Pressable
									onPress={() => setRememberMe(!rememberMe)}
									className="flex-row items-center">
									<Ionicons
										name={rememberMe ? "checkbox" : "square-outline"}
										size={20}
										color={rememberMe ? "#472e9c" : "#9ca3af"}
									/>
									<Text className="text-[13px] ml-2 text-gray-700">
										Remember Me
									</Text>
								</Pressable>

								<Link href={"/(auth)/login"}>
									<Text className="text-[13px] text-primary-900 font-medium">
										Forgot your password?
									</Text>
								</Link>
							</View>

							<Pressable
								onPress={handleLogin}
								className="bg-primary-800 flex-row items-center justify-center py-3.5 px-6 rounded-xl active:opacity-80"
								accessibilityRole="button"
								accessibilityLabel="Login">
								<Ionicons
									name="log-in-outline"
									size={20}
									color="white"
								/>
								<Text className="text-white text-md font-semibold ml-2">
									Login
								</Text>
							</Pressable>
						</View>
					</LinearGradient>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
