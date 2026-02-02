import LoginPage from "@/pages/auth/login";
import NotFoundPage from "@/pages/auth/not-found";
import ProtectedRoute from "@/pages/auth/protected-route";
import DashboardPage from "@/pages/dashboard/dashboard";
import FacultiesPage from "@/pages/faculties/page";
import PermissionMatrix from "@/pages/permissions/page";
import ProjectsPage from "@/pages/projects/page";
import BrowseProposalsPage from "@/pages/proposals/faculties/browse-proposals";
import ProjectsProposalPage from "@/pages/proposals/page";
import ProposalDetailPage from "@/pages/proposals/proposal-detail";
import CreateProposalPage from "@/pages/proposals/students/create-proposal";
import EditProposalPage from "@/pages/proposals/students/edit-proposal";
import MyProjects from "@/pages/proposals/students/my-projects";
import MyProposasPage from "@/pages/proposals/students/my-proposals";
import ChangePassword from "@/pages/settings/components/change-password";
import ChangeProfile from "@/pages/settings/components/change-profile";
import ChangeTheme from "@/pages/settings/components/change-theme";
import SettingsPage from "@/pages/settings/page";
import SupervisorsPage from "@/pages/supervisors/page";
import SupervisorDetailPage from "@/pages/supervisors/supervisor-detail";
import MyTasksPage from "@/pages/teams/students/my-tasks";

export const routes = [
	{
		path: "/",
		Component: ProtectedRoute,
		children: [
			{
				path: "dashboard",
				Component: DashboardPage,
			},
			{
				path: "/faculties",
				Component: FacultiesPage,
			},
			{
				path: "/project-proposals/create",
				Component: CreateProposalPage,
			},
			{
				path: "/project-proposals",
				Component: ProjectsProposalPage,
			},
			{
				path: "/project-proposals/my-proposals",
				Component: MyProposasPage,
			},
			{
				path: "/project-proposals/my-proposal/:id/edit",
				Component: EditProposalPage,
			},
			{
				path: "/project-proposals/my",
				Component: BrowseProposalsPage,
			},
			{
				path: "/project-proposals/:slug/detail",
				Component: ProposalDetailPage,
			},
			{
				path: "/supervisors",
				Component: SupervisorsPage,
			},
			{
				path: "/supervisors/:id/detail",
				Component: SupervisorDetailPage,
			},
			{
				path: "/projects",
				Component: ProjectsPage,
			},
			{
				path: "/projects/my-projects",
				Component: MyProjects,
			},
			{
				path: "/my-tasks",
				Component: MyTasksPage,
			},
			{
				path: "/settings",
				Component: SettingsPage,
				children: [
					{
						path: "profile",
						Component: ChangeProfile,
					},
					{
						path: "password",
						Component: ChangePassword,
					},
					{
						path: "preferences",
						Component: ChangeTheme,
					},
				],
			},
		],
	},
	{
		path: "/login",
		Component: LoginPage,
	},
	{
		path: "/permissions",
		Component: PermissionMatrix,
	},
	{
		path: "*",
		Component: NotFoundPage,
	},
];
