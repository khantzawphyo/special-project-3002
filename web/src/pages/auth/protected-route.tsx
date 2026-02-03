import RootLayout from "@/layouts/RootLayout";
import { useAuthStore } from "@/stores/useAuthStore";
import { Navigate, Outlet, useLocation } from "react-router";

export default function ProtectedRoute() {
	const token = useAuthStore((state) => state.token);

	const location = useLocation();

	if (!token)
		return (
			<Navigate
				to="/login"
				replace
				state={{ from: location }}
			/>
		);

	if (location.pathname === "/" && token)
		return (
			<Navigate
				to="/dashboard"
				replace
			/>
		);

	return (
		<RootLayout>
			<Outlet />
		</RootLayout>
	);
}
