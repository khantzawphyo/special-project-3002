import api from "@/api/api";
import { useHeaderInitializer } from "@/hooks/use-header-initializer";
import { HasRole } from "@/lib/utils";
import type { ProjectData } from "@/types";
import { useEffect, useState } from "react";
import UnAuthorized from "../auth/un-authorized";
import ProjectsTable from "./components/projects-table";

export default function ProjectsPage() {
	useHeaderInitializer("MIIT| Proposals", "Approved Projects");

	const [projects, setProjects] = useState<ProjectData[]>([]);

	const getProjects = async () => {
		const res = await api.get("/projects");
		setProjects(res.data);
	};

	useEffect(() => {
		getProjects();
	}, []);

	if (HasRole("Student Affairs") || HasRole("IC") || HasRole("Supervisor")) {
		return (
			<div className="mx-auto max-w-7xl">
				<h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
					Projects
				</h1>
				<p className="text-sm text-neutral-500">
					Browse and manage project proposals with team assignments and
					supervisors.
				</p>
				{projects && <ProjectsTable projects={projects} />}
			</div>
		);
	} else {
		return <UnAuthorized />;
	}
}
