import { useHeaderInitializer } from "@/hooks/use-header-initializer";
import AccountLogout from "./components/account-logout";
import ChangePassword from "./components/change-password";
import ChangeProfile from "./components/change-profile";
import ChangeTheme from "./components/change-theme";

export default function SettingsPage() {
	useHeaderInitializer("MIIT | Settings", "Settings");

	return (
		<div className="mx-auto max-w-7xl space-y-5">
			<div className="space-y-1">
				<h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
				<p className="text-sm text-muted-foreground">
					Manage your account settings and preferences
				</p>
			</div>

			<ChangeProfile />

			<ChangePassword />

			<ChangeTheme />

			<AccountLogout />
		</div>
	);
}
