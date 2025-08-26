import CallToAction from "@/components/landing/call-to-action";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Showcase from "@/components/landing/showcase";
import Testimonials from "@/components/landing/testimonials";
import Prism from "@/components/landing/background";

export default function Home() {
	return (
		<>
			<section className="relative w-full min-h-screen overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Prism
						animationType="rotate"
						timeScale={0.2}
						noise={0.2}
						glow={0.8}
					/>
				</div>

				<div className="relative z-20 flex items-center justify-center min-h-screen px-6">
					<div className="max-w-7xl mx-auto w-full">
						<Hero />
					</div>
				</div>
			</section>

			<main className="flex min-h-screen flex-col gap-28 px-6 py-24 max-w-7xl mx-auto">
				<Showcase />

				<Features />

				<Pricing />

				<FAQ />

				<Testimonials />

				<CallToAction />
			</main>
		</>
	);
}
