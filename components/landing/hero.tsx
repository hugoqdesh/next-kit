import { BookCopy, Gift, HeartHandshake } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
	return (
		<section className="flex flex-col items-center justify-center gap-6">
			<h1 className="font-semibold text-7xl leading-tight tracking-tight text-muted-foreground">
				<span className="text-primary">Ship</span> second{" "}
				<span className="text-primary">Analytics</span>{" "}
				<span className="text-primary">not</span> daily
			</h1>
			<p className="font-medium text-muted-foreground">
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
					Book a demo
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
