import { Button } from "@/components/ui/button";
import { PointerHighlight } from "../ui/pointer-highlight";
import { HeartHandshake } from "lucide-react";

export default function CallToAction() {
	return (
		<section className="mx-auto max-w-5xl w-full rounded-3xl border px-6 py-32">
			<div className="flex flex-col items-center justify-center gap-4">
				<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-muted-foreground">
					You're just one{" "}
					<PointerHighlight
						pointerClassName="text-blue-600 dark:text-primary"
						containerClassName="inline-block"
					>
						<span className="text-primary">click away</span>
					</PointerHighlight>
				</h2>

				<p>Libero sapiente aliquam quibusdam aspernatur.</p>

				<Button variant="outline" className="w-max">
					<HeartHandshake
						className="-ms-0.5 opacity-60"
						size={16}
						aria-hidden="true"
					/>
					Get Started
				</Button>
			</div>
		</section>
	);
}
