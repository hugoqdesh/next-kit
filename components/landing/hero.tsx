import {
	Anchor,
	ChartNoAxesCombined,
	ChartNoAxesGantt,
	CircleGauge,
	Gift,
	HeartHandshake,
	Speech,
	Telescope,
	UserStar,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
			<div className="flex flex-col gap-6">
				<h1 className="font-semibold text-7xl leading-tight tracking-tight text-muted-foreground">
					<span className="text-primary">Ship</span> second{" "}
					<span className="text-primary">Analytics</span>{" "}
					<span className="text-primary">not</span> daily
				</h1>
				<p className="text-muted-foreground">
					NextJS full-stack SaaS boilerplate with all you need to start.
					Includes authentication, billing, and more.
				</p>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="w-max">
						<HeartHandshake
							className="-ms-0.5 opacity-60"
							size={16}
							aria-hidden="true"
						/>
						Get Started
					</Button>

					<div className="flex items-center gap-1">
						<Gift size={18} className="text-primary" />
						<p className="text-muted-foreground text-sm">
							<span className="text-primary">-20%</span> to first 100 users
						</p>
					</div>
				</div>
			</div>

			<div className="dark:bg-muted/50 relative mx-auto w-fit">
				<div className="bg-radial to-background absolute inset-0 z-10 from-transparent to-75%"></div>
				<div className="mx-auto mb-2 flex w-fit justify-center gap-2">
					<IconCard>
						<CircleGauge />
					</IconCard>
					<IconCard>
						<Speech />
					</IconCard>
				</div>
				<div className="mx-auto my-2 flex w-fit justify-center gap-2">
					<IconCard>
						<Anchor />
					</IconCard>
					<IconCard className="dark:bg-white/10">
						<ChartNoAxesCombined />
					</IconCard>
					<IconCard>
						<ChartNoAxesGantt />
					</IconCard>
				</div>

				<div className="mx-auto flex w-fit justify-center gap-2">
					<IconCard>
						<UserStar />
					</IconCard>

					<IconCard>
						<Telescope />
					</IconCard>
				</div>
			</div>
		</section>
	);
}

const IconCard = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"bg-background relative flex size-20 dark:bg-transparent",
				className
			)}
		>
			<div
				role="presentation"
				className="absolute inset-0 border border-black/20 dark:border-white/25"
			/>
			<div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
		</div>
	);
};
