import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldContent,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ChangePassword() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Security</CardTitle>
				<CardDescription>Customize how the app looks</CardDescription>
			</CardHeader>

			<CardContent>
				<FieldGroup>
					<Field>
						<FieldLabel>Old Password</FieldLabel>
						<FieldContent>
							<Input
								type="password"
								placeholder="******"
							/>
						</FieldContent>
					</Field>

					<Field>
						<FieldLabel>Comfirm Password</FieldLabel>
						<FieldContent>
							<Input
								type="password"
								placeholder="******"
							/>
						</FieldContent>
					</Field>

					<div className="flex justify-end">
						<Button className="bg-primary-700 hover:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:text-white">
							Save changes
						</Button>
					</div>
				</FieldGroup>
			</CardContent>
		</Card>
	);
}
