import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import ElectricBorder from "../ui/electric-border";

export default function CallToAction() {
	return (
		<section className="mx-auto max-w-5xl w-full px-6 py-32">
			<ElectricBorder
				speed={0.25}
				chaos={0.4}
				thickness={1.5}
				className="p-20 rounded"
			>
				<div className="flex flex-col items-center justify-center text-center gap-4">
					<h2 className="scroll-m-20 text-7xl font-semibold tracking-tight text-muted-foreground">
						You're a <span className="text-primary">click away</span>
					</h2>

					<Button variant="outline" className="w-max">
						<HeartHandshake
							className="-ms-0.5 opacity-60"
							size={16}
							aria-hidden="true"
						/>
						Get Started
					</Button>
				</div>
			</ElectricBorder>
		</section>
	);
}
