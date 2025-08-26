import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { ShieldAlert } from "lucide-react";
import ElectricBorder from "../ui/electric-border";

export default function Features() {
	return (
		<section>
			<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-muted-foreground">
				Everything you need to{" "}
				<span className="text-primary">be doing everything</span>
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mt-6">
				<Card className="bg-transparent border-none">
					<ElectricBorder
						speed={0.25}
						chaos={0.4}
						thickness={1.5}
						className="p-10 rounded"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8">
							<div className="border border-muted-foreground/20 p-3">
								<ShieldAlert size={52} className="text-muted-foreground" />
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</ElectricBorder>
				</Card>

				<Card className="bg-transparent border-none">
					<ElectricBorder
						speed={0.25}
						chaos={0.4}
						thickness={1.5}
						className="p-10 rounded"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8">
							<div className="border border-muted-foreground/20 p-3">
								<ShieldAlert size={52} className="text-muted-foreground" />
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</ElectricBorder>
				</Card>

				<Card className="bg-transparent border-none">
					<ElectricBorder
						speed={0.25}
						chaos={0.4}
						thickness={1.5}
						className="p-10 rounded"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8">
							<div className="border border-muted-foreground/20 p-3">
								<ShieldAlert size={52} className="text-muted-foreground" />
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</ElectricBorder>
				</Card>

				<Card className="bg-transparent border-none">
					<ElectricBorder
						speed={0.25}
						chaos={0.4}
						thickness={1.5}
						className="p-10 rounded"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8">
							<div className="border border-muted-foreground/20 p-3">
								<ShieldAlert size={52} className="text-muted-foreground" />
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</ElectricBorder>
				</Card>

				<Card className="bg-transparent border-none">
					<ElectricBorder
						speed={0.25}
						chaos={0.4}
						thickness={1.5}
						className="p-10 rounded"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8">
							<div className="border border-muted-foreground/20 p-3">
								<ShieldAlert size={52} className="text-muted-foreground" />
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</ElectricBorder>
				</Card>

				<Card className="bg-transparent border-none">
					<ElectricBorder
						speed={0.25}
						chaos={0.4}
						thickness={1.5}
						className="p-10 rounded"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8">
							<div className="border border-muted-foreground/20 p-3">
								<ShieldAlert size={52} className="text-muted-foreground" />
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</ElectricBorder>
				</Card>
			</div>
		</section>
	);
}
