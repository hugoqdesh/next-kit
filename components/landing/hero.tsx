import { BookCopy, Gift, HeartHandshake } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
	return (
		<section className="flex flex-col items-center justify-center gap-6 text-center">
			<h1 className="font-semibold text-5xl md:text-7xl leading-tight tracking-tight">
				Create Beautiful Projects
			</h1>
			<p className="font-medium text-sm md:text-base">
				NextJS full-stack SaaS boilerplate with all you need to start. Includes
				authentication, billing, and more.
			</p>
			<div className="flex items-center gap-2">
				<Button variant="default" className="w-max">
					<HeartHandshake
						className="-ms-0.5 opacity-60"
						size={16}
						aria-hidden="true"
					/>
					Get Started
				</Button>

				<Button variant="outline" className="w-max">
					<BookCopy
						className="-ms-0.5 opacity-60"
						size={16}
						aria-hidden="true"
					/>
					Request Demo
				</Button>
			</div>
			<div className="flex items-center gap-1">
				<Gift size={18} className="text-primary" />
				<p className="text-muted-foreground text-sm">
					<span className="text-primary">-20%</span> to first 100 users
				</p>
			</div>
		</section>
	);
}
