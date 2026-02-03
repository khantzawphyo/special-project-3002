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
		<Card className="py-5">
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
								placeholder="********"
							/>
						</FieldContent>
						<CardDescription>Enter your current password.</CardDescription>
					</Field>

					<Field>
						<FieldLabel>Comfirm Password</FieldLabel>
						<FieldContent>
							<Input
								type="password"
								placeholder="********"
							/>
						</FieldContent>
						<CardDescription>
							Re-enter your new password to confirm.
						</CardDescription>
					</Field>

					<Button className="bg-primary-700 max-w-fit ml-auto hover:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:text-white">
						Save changes
					</Button>
				</FieldGroup>
			</CardContent>
		</Card>
	);
}
