import api from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHeaderInitializer } from "@/hooks/use-header-initializer";
import {
	IconCircleCheck,
	IconClockPause,
	IconFolderCheck,
	IconUsers,
} from "@tabler/icons-react";
import { useEffect } from "react";

export default function SupervisorDashboard() {
	useHeaderInitializer("MIIT | Supervisor Dashboard", "Supervisor Dashboard");
	const fetchDashboardData = async () => {
		const res = await api.get("/dashboard");
		console.log(res);
	};

	useEffect(() => {
		fetchDashboardData();
	}, []);

	return (
		<div className="max-w-7xl mx-auto">
			<div className="space-y-4 mb-8">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">
								Assigned Projects
							</CardTitle>
							<IconFolderCheck className="w-4 h-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">5</div>
							<p className="text-xs text-muted-foreground">
								Projects this semester
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">
								Pending Review
							</CardTitle>
							<IconClockPause className="w-4 h-4 text-orange-500" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">1</div>
							<p className="text-xs text-muted-foreground">
								Proposals awaiting action
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">
								Total Students
							</CardTitle>
							<IconUsers className="w-4 h-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">18</div>
							<p className="text-xs text-muted-foreground">
								Across all assigned teams
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">Completed</CardTitle>
							<IconCircleCheck className="w-4 h-4 text-green-500" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">1</div>
							<p className="text-xs text-muted-foreground">
								Successfully finalized
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
