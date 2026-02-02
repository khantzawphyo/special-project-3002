import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { IconCamera } from "@tabler/icons-react";

export default function ChangeProfile() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile</CardTitle>
				<CardDescription>Update your personal information</CardDescription>
			</CardHeader>

			<CardContent className="space-y-6">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<Avatar className="size-20">
							{false ? (
								<AvatarImage src={"avatarPreview"} />
							) : (
								<AvatarFallback>U</AvatarFallback>
							)}
						</Avatar>

						<div>
							<p className="text-sm font-medium">Profile photo</p>
							<p className="text-xs text-muted-foreground">
								Visible to other users
							</p>
						</div>
					</div>

					<div className="flex gap-2">
						<input
							type="file"
							accept="image/*"
							hidden
						/>
						<Button
							variant="outline"
							size="sm"
							className="gap-2">
							<IconCamera size={16} />
							Change
						</Button>
						<Button
							variant="ghost"
							size="sm">
							Remove
						</Button>
					</div>
				</div>

				<Separator />

				<FieldGroup>
					<Field>
						<FieldLabel>Name</FieldLabel>
						<FieldContent>
							<Input disabled />
							<FieldDescription>
								Your full name (cannot be changed)
							</FieldDescription>
						</FieldContent>
					</Field>

					<Field>
						<FieldLabel>Email</FieldLabel>
						<FieldContent>
							<Input disabled />
							<FieldDescription>Primary email address</FieldDescription>
						</FieldContent>
					</Field>

					<Field>
						<FieldLabel>Phone</FieldLabel>
						<FieldContent>
							<Input />
							<FieldDescription>Used for contact and recovery</FieldDescription>
						</FieldContent>
					</Field>

					<div className="flex justify-end">
						<Button className="bg-primary-700 hover:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:text-white">
							Update changes
						</Button>
					</div>
				</FieldGroup>
			</CardContent>
		</Card>
	);
}
