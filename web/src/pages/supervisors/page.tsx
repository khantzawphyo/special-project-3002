import api from "@/api/api";
import { useHeaderInitializer } from "@/hooks/use-header-initializer";
import { HasRole } from "@/lib/utils";
import type { SupervisorData } from "@/types";
import { useEffect, useState } from "react";
import UnAuthorized from "../UnAuthorized";
import SupervisorsTable from "./components/supervisors-table";

export default function SupervisorsPage() {
	useHeaderInitializer("MIIT| Supervisors", "Project Supervisors");
	const [supervisorData, setSupervisorData] = useState<SupervisorData[] | null>(
		[],
	);

	const fetchSupervisors = async () => {
		const res = await api.get("/supervisors");
		setSupervisorData(res.data);
	};

	useEffect(() => {
		fetchSupervisors();
	}, []);

	if (HasRole("Student")) return <UnAuthorized />;

	return (
		<div className="mx-auto max-w-7xl">
			<h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
				Supervisors List
			</h1>
			<p className="text-sm text-neutral-500">
				Browse and manage project supervisors with their assignments and
				departments.
			</p>
			{supervisorData && <SupervisorsTable supervisorData={supervisorData} />}
		</div>
	);
}
