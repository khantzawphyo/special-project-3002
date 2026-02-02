import type React from "react";

export default function GradientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative p-1 rounded-[26px] overflow-hidden">
			{/* The Gradient Layer */}
			<div className="absolute inset-0 bg-linear-to-br from-primary-700 via-transparent to-primary-800" />

			{/* The Content Layer */}
			<div className="relative z-10 bg-white p-0.2 rounded-[22px]">
				{children}
			</div>
		</div>
	);
}
