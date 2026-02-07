import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn, PROJECT_STATUS_COLOR } from "@/lib/utils";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Users } from "lucide-react";
import { Link } from "react-router";

type ProjectMember = {
	id: string;
	name: string;
	avatar?: string;
	role: string;
};

type ProjectCardProps = {
	project?: {
		id: string;
		name: string;
		description: string;
		status: "under review" | "completed";
		supervisor: ProjectMember;
		members: ProjectMember[];
		projectCount: number;
		createdAt: string;
	};
};

export function ProjectCard({ project }: ProjectCardProps) {
	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};

	if (!project) return null;

	return (
		<Link to={`/projects/my-projects/${project.description}/detail`}>
			<Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
				{/* Project Title and Status */}
				<CardContent>
					<div className="flex items-start justify-between">
						<CardTitle className="line-clamp-1 text-lg font-semibold  mr-2">
							{project.name}
						</CardTitle>
						<Badge
							className={cn(
								PROJECT_STATUS_COLOR(project.status),
								"font-mono capitalize px-3 rounded-md",
							)}>
							{project.status}
						</Badge>
					</div>
					<p className="line-clamp-2 mt-2 text-sm">{project.description}</p>
				</CardContent>

				<CardContent className="space-y-2">
					{/* project Supervisor */}
					<div className="flex text-sm gap-x-2 items-center">
						<ShieldCheckIcon className="h-5 w-5 text-primary-600" />
						<p className="flex flex-row gap-x-2">
							<span>Supervisor . </span>
							<span>{project.supervisor.name}</span>
						</p>
					</div>

					{/* project Members */}
					<div className="space-y-2">
						<div className="flex items-start gap-x-3 text-sm">
							<Users className="w-4 h-4 text-primary-600" />

							<div className="flex flex-col gap-1">
								<p className="flex items-center gap-x-3">
									<span>{project.members.length} Members</span>
									<Badge className="bg-primary-600 text-xs hidden">
										{project.members.length}
									</Badge>
								</p>

								{/* members badge */}
								<div className="-space-x-1 flex overflow-hidden">
									{project.members.slice(0, 4).map((member) => (
										<Avatar
											key={member.id}
											className="inline-block h-6 w-6 rounded-full ring-2 ring-background bg-primary-600 text-center text-white">
											<AvatarImage
												src={member.avatar}
												alt={member.name}
											/>
											<AvatarFallback className="text-xs">
												{getInitials(member.name)}
											</AvatarFallback>
										</Avatar>
									))}
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
