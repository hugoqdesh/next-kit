import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { ShieldAlert } from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import { PointerHighlight } from "../ui/pointer-highlight";

export default function Features() {
	return (
		<section>
			<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-muted-foreground">
				Everything you need to{" "}
				<PointerHighlight
					pointerClassName="text-primary"
					containerClassName="inline-block"
				>
					<span className="text-primary">be doing everything</span>
				</PointerHighlight>
			</h2>

			<div className="grid grid-cols-3 gap-6 mt-6">
				<Card className="bg-background rounded-sm border-none">
					<MagicCard
						gradientColor="#262626"
						gradientFrom="#d97757"
						gradientTo="#d97757"
						className="p-6"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8 group">
							<div className="border rounded-sm p-3">
								<ShieldAlert
									size={52}
									className="text-muted-foreground/70 group-hover:text-muted-foreground transition-colors"
								/>
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</MagicCard>
				</Card>

				<Card className="bg-background rounded-sm border-none">
					<MagicCard
						gradientColor="#262626"
						gradientFrom="#d97757"
						gradientTo="#d97757"
						className="p-6"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8 group">
							<div className="border rounded-sm p-3">
								<ShieldAlert
									size={52}
									className="text-muted-foreground/70 group-hover:text-muted-foreground transition-colors"
								/>
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</MagicCard>
				</Card>

				<Card className="bg-background rounded-sm border-none">
					<MagicCard
						gradientColor="#262626"
						gradientFrom="#d97757"
						gradientTo="#d97757"
						className="p-6"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8 group">
							<div className="border rounded-sm p-3">
								<ShieldAlert
									size={52}
									className="text-muted-foreground/70 group-hover:text-muted-foreground transition-colors"
								/>
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</MagicCard>
				</Card>

				<Card className="bg-background rounded-sm border-none">
					<MagicCard
						gradientColor="#262626"
						gradientFrom="#d97757"
						gradientTo="#d97757"
						className="p-6"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8 group">
							<div className="border rounded-sm p-3">
								<ShieldAlert
									size={52}
									className="text-muted-foreground/70 group-hover:text-muted-foreground transition-colors"
								/>
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</MagicCard>
				</Card>

				<Card className="bg-background rounded-sm border-none">
					<MagicCard
						gradientColor="#262626"
						gradientFrom="#d97757"
						gradientTo="#d97757"
						className="p-6"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8 group">
							<div className="border rounded-sm p-3">
								<ShieldAlert
									size={52}
									className="text-muted-foreground/70 group-hover:text-muted-foreground transition-colors"
								/>
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</MagicCard>
				</Card>

				<Card className="bg-background rounded-sm border-none">
					<MagicCard
						gradientColor="#262626"
						gradientFrom="#d97757"
						gradientTo="#d97757"
						className="p-6"
					>
						<CardContent className="flex flex-col items-center justify-center text-center gap-8 group">
							<div className="border rounded-sm p-3">
								<ShieldAlert
									size={52}
									className="text-muted-foreground/70 group-hover:text-muted-foreground transition-colors"
								/>
							</div>
							<CardTitle className="text-3xl">Feature 1</CardTitle>
							<CardDescription className="text-base text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolorum, laudantium.
							</CardDescription>
						</CardContent>
					</MagicCard>
				</Card>
			</div>
		</section>
	);
}
