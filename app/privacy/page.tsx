import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col gap-16 px-6 py-24 max-w-3xl mx-auto">
			<div className="flex flex-col gap-4 items-center text-center">
				<h1 className="text-5xl font-bold">Privacy Policy</h1>
				<p className="text-muted-foreground">
					Last Updated <span className="text-primary">June 3, 2025</span>
				</p>

				<p className="text-muted-foreground">
					This policy explains how we collect, use, and protect information.
					We’re committed to privacy-first x that respects everyone’s privacy.
				</p>
			</div>

			<p className="text-muted-foreground">
				Next-Kit ("we", "our", or "us") is a privacy-first x service that
				provides x without compromising user privacy. This Privacy Policy
				describes how we collect, use, and protect information when you use our
				service or visit websites that use our analytics.
			</p>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">Our Privacy-First Principles</h2>

				<p>
					Next-Kit is built on privacy-first principles that guide everything we
					do:
				</p>

				<ul className="list-disc pl-6">
					<li>
						<span className="text-primary">No User Identification:</span> We
						never identify individual users or track them across websites or
						sessions.
					</li>
					<li>
						<span className="text-primary">No Personal Data Collection:</span>{" "}
						We don't collect names, email addresses, or any personally
						identifiable information from website visitors.
					</li>
					<li>
						<span className="text-primary">No Cross-Site Tracking:</span> We
						don't use cookies, fingerprinting, or other techniques to track
						users across different websites.
					</li>
					<li>
						<span className="text-primary">No Data Sales:</span> We never sell
						or share user data with third parties for advertising or marketing
						purposes.
					</li>
					<li>
						<span className="text-primary">Minimal Data Collection:</span> We
						only collect what's necessary to and nothing more.
					</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">Information We Collect</h2>

				<p>
					When you sign up for Next-Kit, we collect minimal, anonymized data :
				</p>

				<div className="flex flex-col gap-4">
					<ul className="list-disc pl-6">
						<li>
							<span className="text-primary">Account information:</span> Email
							address, name (optional), and password
						</li>
						<li>
							<span className="text-primary">Billing information:</span> Payment
							details, billing address, and contact information for
							subscriptions
						</li>
						<li>
							<span className="text-primary">Usage data:</span> How you use our
							dashboard and analytics features
						</li>
						<li>
							<span className="text-primary">Communications:</span> Support
							requests, feedback, and survey responses
						</li>
						<li>
							<span className="text-primary">Page views:</span> Which pages were
							visited (URL path only, no query parameters containing personal
							data)
						</li>
						<li>
							<span className="text-primary">Technical information:</span>{" "}
							Browser type, operating system, device type, and screen resolution
						</li>
						<li>
							<span className="text-primary">Geographic location:</span> Country
							and region only (derived from anonymized IP address)
						</li>
						<li>
							<span className="text-primary">CSession data:</span> Time spent on
							site, bounce rate, and navigation patterns (anonymized)
						</li>
						<li>
							<span className="text-primary">Performance metrics:</span> Page
							load times, Core Web Vitals (FCP, LCP, CLS), and connection
							performance data
						</li>
						<li>
							<span className="text-primary">User interaction data:</span>{" "}
							Scroll depth, interaction counts, and exit intent detection
							(anonymized)
						</li>
						<li>
							<span className="text-primary">Error information:</span>{" "}
							JavaScript errors and technical issues to help website owners
							improve their sites
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">No Cookies, No Tracking</h2>

				<p>
					Unlike traditional x services, Next-Kit is designed to respect user
					privacy:
				</p>

				<ul className="list-disc pl-6">
					<li>
						<span className="text-primary">No Cookies:</span> We don't use
						cookies or any cross-site tracking to track users
					</li>
					<li>
						<span className="text-primary">No Fingerprinting:</span> We don't
						create browser fingerprints or use device characteristics to
						identify users
					</li>
					<li>
						<span className="text-primary">No Cross-Site Tracking:</span> We
						can't and don't track users as they move between different websites
					</li>
					<li>
						<span className="text-primary">No User Profiles:</span> We don't
						build profiles of individual users or their browsing habits
					</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">How We Use Information</h2>

				<p>We use anonymized user information to: </p>

				<ul className="list-disc pl-6">
					<li>Process payments and manage subscriptions</li>
					<li>Send important service updates and security notifications</li>
					<li>Provide customer support and respond to inquiries</li>
					<li>Improve our service based on usage patterns</li>
					<li>Ensure compliance with legal obligations</li>
					<li>
						Help website owners identify and fix technical problems through
						error tracking
					</li>
					<li>
						Page load times, Core Web Vitals (FCP, LCP, CLS), and connection
						performance data
					</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">Privacy Rights</h2>

				<p>As a user, you have the right to:</p>

				<ul className="list-disc pl-6">
					<li>
						<span className="text-primary">Access:</span> Request a copy of your
						data
					</li>
					<li>
						<span className="text-primary">Rectification:</span> Correct
						inaccurate data
					</li>
					<li>
						<span className="text-primary">Erasure:</span> Request deletion of
						your data
					</li>
					<li>
						<span className="text-primary">Processing:</span> Limit how we use
						your data
					</li>
					<li>
						<span className="text-primary">Objection:</span> Opt-out of certain
						data processing
					</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">Data Security</h2>

				<p>We implement comprehensive security measures:</p>

				<ul className="list-disc pl-6">
					<li>
						<span className="text-primary">Encryption:</span> End-to-end
						encryption for communications using industry-standard protocols
					</li>
					<li>
						<span className="text-primary">Authentication:</span> Secure OAuth
						2.0 authentication for every authentication service
					</li>
					<li>
						<span className="text-primary">Transparency:</span> Open-source
						codebase for transparency and community security review
					</li>
					<li>
						<span className="text-primary">Access Controls:</span> Strict
						employee access controls with multi-factor authentication
					</li>
					<li>
						<span className="text-primary">Monitoring:</span> 24/7 security
						monitoring and automated threat detection
					</li>
					<li>
						<span className="text-primary">Data Minimization:</span> We collect
						and store only what's necessary
					</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">Payments</h2>

				<p>
					We use third-party services for payment processing (e.g. payment
					processors). We will not store or collect your payment card details.
					That information is provided directly to our third-party payment
					processors whose use of your Personal Data is governed by their
					Privacy Policy. These payment processors adhere to the standards set
					by PCI-DSS as managed by the PCI Security Standards Council, which is
					a joint effort of brands like Visa, MasterCard, American Express and
					Discover. PCI-DSS requirements help ensure the secure handling of
					payment information. The payment processors we work with are:
				</p>

				<ul className="list-disc pl-6">
					<li>
						<span className="text-primary">Stripe:</span> Their Privacy Policy
						can be viewed at{" "}
						<Link
							href="https://stripe.com/privacy"
							className="underline underline-offset-2"
						>
							Stripe Privacy Policy
						</Link>
					</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">Contact us</h2>

				<p>
					If you have any questions, concerns or complaints regarding our
					compliance with this notice, we encourage you to first contact us at
					yourinfo@gmail.com.
				</p>
			</div>
		</main>
	);
}
