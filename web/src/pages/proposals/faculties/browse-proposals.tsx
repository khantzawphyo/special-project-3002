import api from "@/api/api";
import { useHeaderInitializer } from "@/hooks/use-header-initializer";
import type { ProjectProposal } from "@/types";
import { useEffect, useState } from "react";
import ProposalTable from "../proposals-table";

export default function BrowseProposalsPage() {
	useHeaderInitializer("MIIT | Browse Proposals", "Browse Proposals");

	const [proposals, setProposals] = useState<ProjectProposal[]>([]);

	const fetchBrowseProposals = async () => {
		try {
			const res = await api.get("/proposals/browse-proposals");
			console.log(res.data);
			setProposals(res.data);
		} catch (error) {
			console.error("Error fetching browse proposals:", error);
		}
	};

	useEffect(() => {
		fetchBrowseProposals();
	}, []);

	return (
		<>
			<div className="mx-auto max-w-7xl">
				<h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
					Browse Proposals
				</h1>
				<p className="text-sm text-neutral-500">
					Browse and manage project proposals with team assignments and
					supervisors.
				</p>
				{proposals && (
					<ProposalTable
						getProposalsData={fetchBrowseProposals}
						proposalData={proposals}
					/>
				)}
			</div>
		</>
	);
}
