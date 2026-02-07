import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { CheckCircle2, Clock, Eye, XCircle } from "lucide-react";

// Mock data for testing
const projects = [
	{
		id: "PRJ001",
		name: "AI-Powered Student Management System",
		supervisorName: "U Min Kyaw Naing",
		members: ["Ma Thiri Nwe Moe", "Mg Aung Min", "Ko Zaw Htet", "Ma Su Su"],
		midReport: "submitted",
		midSeminar: "completed",
		finalReport: "pending",
		finalSeminar: "pending",
	},
	{
		id: "PRJ002",
		name: "E-Commerce Platform for Local Businesses",
		supervisorName: "Daw Aye Aye Khine",
		members: ["Mg Tun Aung Soe", "Ma Hnin Wai"],
		midReport: "submitted",
		midSeminar: "completed",
		finalReport: "submitted",
		finalSeminar: "pending",
	},
	{
		id: "PRJ003",
		name: "Mobile Health Monitoring App",
		supervisorName: "U Kyaw Zin Oo",
		members: ["Ma Khin Mar Lar", "Mg Ye Myat Thu", "Ko Naing Lin"],
		midReport: "submitted",
		midSeminar: "completed",
		finalReport: "submitted",
		finalSeminar: "completed",
	},
	{
		id: "PRJ004",
		name: "Smart Campus Navigation System",
		supervisorName: "Daw Thin Thin Aung",
		members: ["Mg Htet Aung", "Ma Su Myat Noe"],
		midReport: "pending",
		midSeminar: "pending",
		finalReport: "pending",
		finalSeminar: "pending",
	},
	{
		id: "PRJ005",
		name: "Online Library Management System",
		supervisorName: "U Min Kyaw Naing",
		members: [
			"Ma Yadanar Win",
			"Mg Phone Myint",
			"Ko Aung Khant",
			"Ma Ei Ei Mon",
			"Mg Zaw Min",
		],
		midReport: "submitted",
		midSeminar: "pending",
		finalReport: "pending",
		finalSeminar: "pending",
	},
];

function StatusBadge({ status }: { status: string }) {
	switch (status) {
		case "completed":
			return (
				<Badge className="bg-green-100 text-green-700 hover:bg-green-100">
					<CheckCircle2 className="w-3 h-3 mr-1" />
					Completed
				</Badge>
			);
		case "submitted":
			return (
				<Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
					<Clock className="w-3 h-3 mr-1" />
					Submitted
				</Badge>
			);
		case "pending":
			return (
				<Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
					<XCircle className="w-3 h-3 mr-1" />
					Pending
				</Badge>
			);
		default:
			return <Badge variant="outline">{status}</Badge>;
	}
}

function MemberBadges({ members }: { members: string[] }) {
	const displayMembers = members.slice(0, 2);
	const remainingCount = members.length - 2;

	return (
		<div className="flex flex-wrap gap-1">
			{displayMembers.map((member, index) => (
				<Badge
					key={index}
					variant="secondary"
					className="text-xs font-normal">
					{member}
				</Badge>
			))}
			{remainingCount > 0 && (
				<Badge
					variant="secondary"
					className="text-xs font-normal">
					+{remainingCount}
				</Badge>
			)}
		</div>
	);
}

export default function ProjectProgressTable() {
	return (
		<div className="max-w-7xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Projects Progress</h1>
			<div className="rounded-lg border bg-card">
				<Table>
					<TableHeader>
						<TableRow className="bg-muted/50">
							<TableHead>Project ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Supervisor</TableHead>
							<TableHead>Members</TableHead>
							<TableHead>Mid-Report</TableHead>
							<TableHead>Mid Seminar</TableHead>
							<TableHead>Final Report</TableHead>
							<TableHead>Final Seminar</TableHead>
							<TableHead className="border-l">View</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{projects.map((project) => (
							<TableRow key={project.id}>
								<TableCell className="font-medium">{project.id}</TableCell>
								<TableCell className="max-w-[200px]">
									<span className="truncate block">{project.name}</span>
								</TableCell>
								<TableCell>{project.supervisorName}</TableCell>
								<TableCell>
									<MemberBadges members={project.members} />
								</TableCell>
								<TableCell>
									<StatusBadge status={project.midReport} />
								</TableCell>
								<TableCell>
									<StatusBadge status={project.midSeminar} />
								</TableCell>
								<TableCell>
									<StatusBadge status={project.finalReport} />
								</TableCell>
								<TableCell>
									<StatusBadge status={project.finalSeminar} />
								</TableCell>
								<TableCell className="border-l">
									<Button
										size="sm"
										className="bg-violet-600 hover:bg-violet-700">
										<Eye className="w-4 h-4 mr-1" />
										View
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
