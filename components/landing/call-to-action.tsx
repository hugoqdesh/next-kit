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
				className="p-10 md:p-20 rounded-2xl"
			>
				<div className="flex flex-col items-center justify-center text-center gap-4">
					<h2 className="scroll-m-20 text-4xl md:text-5xl font-semibold tracking-tight">
						You're just a click away
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
