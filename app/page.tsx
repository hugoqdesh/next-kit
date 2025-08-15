import CallToAction from "@/components/landing/call-to-action";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";
import Showcase from "@/components/landing/showcase";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
	return (
		<>
			<Navbar />

			<main className="flex min-h-screen flex-col gap-28 px-6 py-24 max-w-7xl mx-auto">
				<Hero />

				<Showcase />

				<Features />

				<Pricing />

				<FAQ />

				<Testimonials />

				<CallToAction />
			</main>

			<Footer />
		</>
	);
}
