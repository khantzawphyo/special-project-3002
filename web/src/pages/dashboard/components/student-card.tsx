import {
	IconListCheck,
	IconListDetails,
	IconTrendingUp,
} from "@tabler/icons-react";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { StudentDashboardCard } from "@/types/student";
import { BarChart3 } from "lucide-react";
import { useNavigate } from "react-router";

export function StudentCards() {
	const navigate = useNavigate();

	const sectionCardData: StudentDashboardCard<React.ElementType>[] = [
		{
			title: "2",
			cardIcon: IconListDetails,
			description: "Total Projects",
			pageUrl: "/projects/my-projects",
		},
		{
			title: "3",
			cardIcon: BarChart3,
			description: "Total Proposals",
			pageUrl: "/project-proposals/my-proposals",
		},
		{
			title: "10",
			cardIcon: IconListCheck,
			description: "My Tasks",
			pageUrl: "/my-tasks",
		},
		{
			title: "20%",
			cardIcon: IconTrendingUp,
			description: "Tasks Completion Rate",
			pageUrl: "/my-tasks",
		},
	];

	return (
		<div className="grid grid-cols-1 gap-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
			{sectionCardData.length > 0 &&
				sectionCardData.map((card) => (
					<Card
						onClick={() => navigate(card.pageUrl)}
						key={card.description}
						className="@container/card hover:cursor-pointer">
						<CardHeader>
							<CardDescription className="font-medium text-black dark:text-neutral-100 flex items-center justify-between">
								{card.description}
								{card.cardIcon && <card.cardIcon size={20} />}
							</CardDescription>
							<CardTitle className="mt-3 text-2xl font-mono font-semibold tabular-nums @[250px]/card:text-3xl">
								{card.title}
							</CardTitle>
						</CardHeader>
					</Card>
				))}
		</div>
	);
}
