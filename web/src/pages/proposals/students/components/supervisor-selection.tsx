import ErrorMessage from "@/components/error-message";
import { Badge } from "@/components/ui/badge";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Controller } from "react-hook-form";

interface Props {
	control: any;
	error?: string;
	supervisors: {
		id: number;
		name: string;
		email: string;
		department: string;
	}[];
}

export default function SupervisorSelection({
	control,
	error,
	supervisors,
}: Props) {
	const departmentNames = [
		"All",
		...Array.from(new Set(supervisors.map((s) => s.department))),
	];
	const [selectedDept, setSelectedDept] = useState<string>("All");

	const filteredSupervisors =
		selectedDept === "All"
			? supervisors
			: supervisors.filter((s) => s.department === selectedDept);

	return (
		<Field>
			<FieldLabel htmlFor="supervisor">
				Project Supervisor <span className="text-red-500">*</span>
			</FieldLabel>
			<div className="flex flex-wrap gap-3 mb-3">
				{departmentNames.map((department) => (
					<Badge
						key={department}
						className={`cursor-pointer transition-colors ${
							selectedDept === department
								? "bg-primary text-white border-primary"
								: "bg-muted text-muted-foreground"
						}`}
						onClick={() => setSelectedDept(department)}
						variant={selectedDept === department ? "default" : "outline"}>
						{department}
					</Badge>
				))}
			</div>

			<Controller
				name="supervisor_id"
				control={control}
				rules={{ required: "Supervisor should not be empty" }}
				render={({ field }) => (
					<Select
						onValueChange={field.onChange}
						value={field.value || ""}>
						<SelectTrigger
							id="supervisor"
							className="py-5"
							onClick={() => {
								// Reset value to always show placeholder when filter changes
								field.onChange("");
							}}>
							<SelectValue placeholder="Choose your supervisor" />
						</SelectTrigger>
						<SelectContent>
							{filteredSupervisors.map((supervisor) => (
								<SelectItem
									key={supervisor.id}
									value={supervisor.id.toString()}>
									<p className="flex flex-col itemstar">
										{supervisor.name} ( {supervisor.email} ) -{" "}
										{supervisor.department}
									</p>
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				)}
			/>

			{error && <ErrorMessage error={error} />}
		</Field>
	);
}
