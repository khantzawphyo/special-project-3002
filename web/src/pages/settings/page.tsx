import { useHeaderInitializer } from "@/hooks/use-header-initializer";
import { useTheme } from "@/hooks/use-theme";
import RootLayout from "@/layouts/RootLayout";
import api from "@/api/api";
import { useAuthStore } from "@/stores/useAuthStore";
import { useAuthUserStore } from "@/stores/useAuthUserStore";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	IconLogout,
	IconMoon,
	IconSun,
	IconUser,
	IconLock,
	IconEye,
	IconEyeOff,
} from "@tabler/icons-react";
import { toast } from "sonner";

const nameSchema = z.object({
	name: z.string().min(1, "Name is required"),
});

const passwordSchema = z
	.object({
		currentPassword: z.string().min(1, "Current password is required"),
		newPassword: z.string().min(8, "Password must be at least 8 characters"),
		confirmPassword: z.string().min(1, "Please confirm your password"),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

export default function SettingsPage() {
	useHeaderInitializer("MIIT| Settings", "Settings");
	const { theme, toggleTheme } = useTheme();
	const navigate = useNavigate();
	const authUser = useAuthUserStore((state) => state.authUser);
	const setAuthUser = useAuthUserStore((state) => state.setAuthUser);
	const setAuthToken = useAuthStore((state) => state.setAuthToken);
	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const nameForm = useForm<z.infer<typeof nameSchema>>({
		resolver: zodResolver(nameSchema),
		defaultValues: {
			name: authUser?.name || "",
		},
	});

	const passwordForm = useForm<z.infer<typeof passwordSchema>>({
		resolver: zodResolver(passwordSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	});

	const onNameSubmit = async (data: z.infer<typeof nameSchema>) => {
		try {
			setAuthUser({ ...authUser, name: data.name });
			toast.success("Name updated successfully");
		} catch (error: any) {
			toast.error(error.response?.data?.message || "Failed to update name");
		}
	};

	const onPasswordSubmit = async (data: z.infer<typeof passwordSchema>) => {
		try {
			// TODO: Replace with actual API endpoint when backend is ready
			// await api.put("/change-password", {
			// 	current_password: data.currentPassword,
			// 	new_password: data.newPassword,
			// });

			// Temporary: Log the data (will be replaced with API call)
			console.log("Password change requested", {
				currentPassword: data.currentPassword,
				newPassword: data.newPassword,
			});

			toast.success("Password changed successfully");
			passwordForm.reset();
		} catch (error: any) {
			toast.error(
				error.response?.data?.message || "Failed to change password"
			);
		}
	};

	const handleLogout = async () => {
		try {
			await api.post("/logout");
		} catch (error) {
			console.error(
				"Logout request failed, but clearing local session:",
				error
			);
		} finally {
			setAuthToken("");
			setAuthUser("");
			delete api.defaults.headers.common["Authorization"];
			navigate("/login", { replace: true });
		}
	};

	return (
		<RootLayout>
			<div className="px-4 md:px-6 space-y-6 max-w-4xl mx-auto">
				{/* Profile Information */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<IconUser size={20} />
							Profile Information
						</CardTitle>
						<CardDescription>
							Update your name and profile information
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={nameForm.handleSubmit(onNameSubmit)}>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="name">Name</FieldLabel>
									<Input
										id="name"
										{...nameForm.register("name")}
										placeholder="Enter your name"
									/>
									{nameForm.formState.errors.name && (
										<FieldError>
											{nameForm.formState.errors.name.message}
										</FieldError>
									)}
								</Field>
								<Field>
									<FieldLabel htmlFor="email">Email</FieldLabel>
									<Input
										id="email"
										type="email"
										value={authUser?.email || ""}
										disabled
										className="bg-muted"
									/>
									<p className="text-sm text-muted-foreground">
										Email cannot be changed
									</p>
								</Field>
								<Button
									type="submit"
									disabled={nameForm.formState.isSubmitting}
									className="w-full sm:w-auto">
									{nameForm.formState.isSubmitting
										? "Saving..."
										: "Save Changes"}
								</Button>
							</FieldGroup>
						</form>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<IconLock size={20} />
							Change Password
						</CardTitle>
						<CardDescription>
							Update your password to keep your account secure
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="currentPassword">
										Current Password
									</FieldLabel>
									<div className="relative">
										<Input
											id="currentPassword"
											type={showCurrentPassword ? "text" : "password"}
											{...passwordForm.register("currentPassword")}
											placeholder="Enter current password"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() =>
												setShowCurrentPassword(!showCurrentPassword)
											}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
											{showCurrentPassword ? (
												<IconEyeOff size={20} />
											) : (
												<IconEye size={20} />
											)}
										</button>
									</div>
									{passwordForm.formState.errors.currentPassword && (
										<FieldError>
											{
												passwordForm.formState.errors.currentPassword
													.message
											}
										</FieldError>
									)}
								</Field>
								<Field>
									<FieldLabel htmlFor="newPassword">
										New Password
									</FieldLabel>
									<div className="relative">
										<Input
											id="newPassword"
											type={showNewPassword ? "text" : "password"}
											{...passwordForm.register("newPassword")}
											placeholder="Enter new password"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() => setShowNewPassword(!showNewPassword)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
											{showNewPassword ? (
												<IconEyeOff size={20} />
											) : (
												<IconEye size={20} />
											)}
										</button>
									</div>
									{passwordForm.formState.errors.newPassword && (
										<FieldError>
											{
												passwordForm.formState.errors.newPassword
													.message
											}
										</FieldError>
									)}
								</Field>
								<Field>
									<FieldLabel htmlFor="confirmPassword">
										Confirm New Password
									</FieldLabel>
									<div className="relative">
										<Input
											id="confirmPassword"
											type={
												showConfirmPassword ? "text" : "password"
											}
											{...passwordForm.register("confirmPassword")}
											placeholder="Confirm new password"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() =>
												setShowConfirmPassword(!showConfirmPassword)
											}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
											{showConfirmPassword ? (
												<IconEyeOff size={20} />
											) : (
												<IconEye size={20} />
											)}
										</button>
									</div>
									{passwordForm.formState.errors.confirmPassword && (
										<FieldError>
											{
												passwordForm.formState.errors.confirmPassword
													.message
											}
										</FieldError>
									)}
								</Field>
								<Button
									type="submit"
									disabled={passwordForm.formState.isSubmitting}
									className="w-full sm:w-auto">
									{passwordForm.formState.isSubmitting
										? "Changing Password..."
										: "Change Password"}
								</Button>
							</FieldGroup>
						</form>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							{theme === "dark" ? (
								<IconMoon size={20} />
							) : (
								<IconSun size={20} />
							)}
							Appearance
						</CardTitle>
						<CardDescription>
							Customize the appearance of the application
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<p className="text-sm font-medium">Theme</p>
								<p className="text-sm text-muted-foreground">
									Switch between light and dark mode
								</p>
							</div>
							<Button
								variant="outline"
								onClick={toggleTheme}
								className="gap-2">
								{theme === "dark" ? (
									<>
										<IconSun size={16} />
										Light Mode
									</>
								) : (
									<>
										<IconMoon size={16} />
										Dark Mode
									</>
								)}
							</Button>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<IconLogout size={20} />
							Account Actions
						</CardTitle>
						<CardDescription>
							Manage your account and session
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Separator className="mb-4" />
						<Button
							variant="destructive"
							onClick={handleLogout}
							className="w-full gap-2">
							<IconLogout size={16} />
							Log Out
						</Button>
					</CardContent>
				</Card>
			</div>
		</RootLayout>
	);
}
