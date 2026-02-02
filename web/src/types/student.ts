import type { ElementType } from "react";

export type StudentDashboardCard<T = ElementType> = {
	title: string;
	cardIcon?: T;
	description: string;
	pageUrl: string;
};
