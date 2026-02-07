import api from "@/api/api";
import { useEffect, useState } from "react";
import AssignedProjectsTable from "./components/assigned-projects-table";

export interface User {
	id: number;
	name: string;
	email: string;
}

export interface ProjectData {
	id: number;
	name: string;
	slug: string;
	description: string;
	supervisor: User;
	leader: User;
	members: User[];
	status: "active" | "completed" | "under review";
	startedAt: string;
}

export default function AssignedProjects() {
	const [assignedProjects, setAssignedProjects] = useState<ProjectData>();

	useEffect(() => {
		const fetchPj = async () => {
			const res = await api.get("/assigned-projects");
			setAssignedProjects(res.data);
		};
		fetchPj();
	}, []);

	return (
		<div className="mx-auto max-w-7xl space-y-6">
			<div className="flex flex-col gap-1">
				<h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
					Assigned Projects
				</h1>
				<p className="text-sm text-neutral-500">
					Overview of project teams and student proposals currently under your
					supervision.
				</p>
			</div>

			{assignedProjects && (
				<AssignedProjectsTable projects={assignedProjects} />
			)}
		</div>
	);
}
