import {
	IconDeviceTabletSearch,
	IconFileDescription,
	IconLayoutDashboard,
	IconListCheck,
	IconListDetails,
	IconSettings,
	IconUsers,
	IconUsersGroup,
} from "@tabler/icons-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { HasRole } from "@/lib/utils";
import { useAuthUserStore } from "@/stores/useAuthUserStore";
import { ShieldCheckIcon } from "lucide-react";
import AppLogo from "./app-logo";
import adminAvatar from "/avatar.png";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	// const { isMobile } = useSidebar();
	const authUser = useAuthUserStore((state) => state.authUser);

	const icTabs = [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: IconLayoutDashboard,
		},
		{
			title: "Project Proposals",
			url: "/project-proposals",
			icon: IconFileDescription,
		},
		{
			title: "Supervisors",
			url: "/supervisors",
			icon: ShieldCheckIcon,
		},
		{
			title: "Projects",
			url: "/projects",
			icon: IconListDetails,
		},
		{
			title: "Faculties",
			url: "/faculties",
			icon: IconUsersGroup,
		},
		{
			title: "Settings",
			url: "/settings",
			icon: IconSettings,
		},
	];

	const facultyTabs = [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: IconLayoutDashboard,
		},
		{
			title: "Browse Proposals",
			url: "/project-proposals/my",
			icon: IconDeviceTabletSearch,
		},
		{
			title: "My Projects",
			url: "/my-projects",
			icon: IconListDetails,
		},
		{
			title: "Settings",
			url: "/settings",
			icon: IconSettings,
		},
	];

	const studentTabs = [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: IconLayoutDashboard,
		},
		{
			title: "My Proposals",
			url: "/project-proposals/my-proposals",
			icon: IconFileDescription,
		},
		{
			title: "My Projects",
			url: "/projects/my-projects",
			icon: IconListDetails,
		},
		{
			title: "My Tasks",
			url: "/my-tasks",
			icon: IconListCheck,
		},
		{
			title: "Settings",
			url: "/settings",
			icon: IconSettings,
		},
	];

	const studentAffairTabs = [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: IconLayoutDashboard,
		},
		{
			title: "Project Proposals",
			url: "/project-proposals",
			icon: IconFileDescription,
		},
		{
			title: "Supervisors",
			url: "/supervisors",
			icon: ShieldCheckIcon,
		},
		{
			title: "Projects",
			url: "/projects",
			icon: IconListDetails,
		},
		{
			title: "Teams",
			url: "/teams",
			icon: IconUsersGroup,
		},
		{
			title: "Settings",
			url: "/settings",
			icon: IconSettings,
		},
	];

	const tabs = {
		IC: [...icTabs],
		Faculty: [...facultyTabs],
		Student: [...studentTabs],
		StudentAffairs: [...studentAffairTabs],
	};

	const data = {
		user: {
			name: authUser.name,
			email: authUser.email,
			avatar: adminAvatar,
		},
		navMain: [
			...(HasRole("IC") ? tabs.IC : []),
			...(HasRole("Student") ? tabs.Student : []),
			...(HasRole("Student Affairs") ? tabs.StudentAffairs : []),
			...(HasRole("Faculty") || HasRole("Supervisor") ? tabs.Faculty : []),
		],
	};

	return (
		<Sidebar
			collapsible="offcanvas"
			{...props}
			className="dark:border-r-gray-500">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem className="-mt-1">
						<AppLogo />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain
					role={authUser.role}
					items={data.navMain}
				/>
			</SidebarContent>
			{/* <SidebarFooter>{isMobile && <NavUser user={data.user} />}</SidebarFooter> */}
		</Sidebar>
	);
}
