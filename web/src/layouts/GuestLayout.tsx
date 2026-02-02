import { useAuthStore } from "@/stores/useAuthStore";
import type React from "react";
import { Navigate } from "react-router";

export default function GuestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const authToken = useAuthStore((state) => state.authToken);

	return (
		<>
			{!authToken ? (
				<div className="bg-[url(/main-bg.jpg)] min-h-svh bg-center bg-cover">
					{children}
				</div>
			) : (
				<Navigate to={"/dashboard"} />
			)}
		</>
	);
}
