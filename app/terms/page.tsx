import Link from "next/link";

export default function Terms() {
	return (
		<main className="flex min-h-screen flex-col gap-16 px-6 py-24 max-w-3xl mx-auto">
			<div className="flex flex-col gap-4 items-center text-center">
				<h1 className="text-5xl font-bold">Terms of Service</h1>
				<p className="text-muted-foreground">
					Last Updated <span className="text-primary">June 3, 2025</span>
				</p>

				<p className="text-muted-foreground">
					Clear and fair terms that govern your use of Next-Kit platform. We
					believe in transparency and straightforward language.
				</p>
			</div>

			<p className="text-muted-foreground">
				These Terms of Service ("Terms") govern your access to and use of
				Next-Kit analytics ("Service"). By using our Service, you agree to be
				bound by these Terms.
			</p>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Introduction</h2>

				<p>
					Welcome to Next-Kit ("we," "our," or "us"). These Terms of Service
					govern your access to and use of our privacy-first platform available
					at nextkit.com and our related services.
				</p>

				<p>
					By accessing or using our Service, you agree to be bound by these
					Terms. If you disagree with any part of these terms, then you may not
					access the Service.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Definitions</h2>

				<p>To make these terms clear, here are some key definitions:</p>

				<div className="flex flex-col gap-4">
					<ul className="list-disc pl-6">
						<li>
							<span className="text-primary">Account:</span> Your unique account
							created to access our Service
						</li>
						<li>
							<span className="text-primary">Service:</span> Next-Kit platform
							and related services
						</li>
						<li>
							<span className="text-primary">User/You:</span> The person or
							organization using our Service
						</li>
						<li>
							<span className="text-primary">Website:</span> The Next-Kit
							website at nextkit.com
						</li>
						<li>
							<span className="text-primary">Content:</span> Any data, text, or
							information you provide to our Service
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">
					Account Registration
				</h2>

				<p>
					To use our Service, you need to create an account. When you register,
					you agree to:
				</p>

				<ul className="list-disc pl-6">
					<li>Provide accurate, current, and complete information</li>
					<li>Keep your account information up to date</li>
					<li>Maintain the security of your password</li>
					<li>Accept responsibility for all activities under your account</li>
					<li>Notify us immediately of any unauthorized use</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Acceptable Use</h2>

				<p>You may use our Service to:</p>

				<ul className="list-disc pl-6">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<p>You may not:</p>

				<ul className="list-disc pl-6">
					<li>Track websites you don't own without permission</li>
					<li>Use the Service for illegal activities</li>
					<li>Attempt to reverse engineer or hack our Service</li>
					<li>Share your account credentials with others</li>
					<li>
						Use the Service to collect personal information without consent
					</li>
					<li>Overload our servers or interfere with other users</li>
					<li>Violate any applicable laws or regulations</li>
				</ul>

				<p>We may suspend or terminate accounts that violate these terms.</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Privacy and Data</h2>

				<p>
					Your privacy is important to us. Our Privacy Policy explains how we
					collect, use, and protect your information. By using our Service, you
					consent to our data practices as described in our{" "}
					<Link href="/privacy" className="underline underline-offset-2">
						Privacy Policy
					</Link>
					.
				</p>

				<p>Key points about data:</p>

				<ul className="list-disc pl-6">
					<li>
						We use privacy-first analytics that don't track individual users
					</li>
					<li>You own your data</li>
					<li>We don't sell your data to third parties</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">
					Billing and Payments
				</h2>

				<p>We implement comprehensive security measures:</p>

				<ul className="list-disc pl-6">
					<li>Subscriptions are billed monthly or annually</li>
					<li>All fees are non-refundable except as required by law</li>
					<li>We may change pricing with 30 days notice</li>
					<li>You can cancel your subscription at any time</li>
					<li>Payment is due at the beginning of each billing cycle</li>
					<li>We accept major credit cards and other payment methods</li>
					<li>Failed payments may result in service suspension</li>
					<li>You're responsible for all taxes and fees</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">
					Service Availability
				</h2>

				<p>
					We strive to provide reliable service, but we cannot guarantee 100%
					uptime. We aim for 99.9% uptime and will notify you of planned
					maintenance.
				</p>

				<ul className="list-disc pl-6">
					<li>We may temporarily suspend service for maintenance</li>
					<li>We're not liable for service interruptions beyond our control</li>
					<li>We'll make reasonable efforts to minimize downtime</li>
					<li>Status updates are available on our status page</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">
					Intellectual Property
				</h2>

				<p>
					The Service and its original content, features, and functionality are
					owned by Next-Kit and are protected by copyright, trademark, and other
					laws.
				</p>

				<ul className="list-disc pl-6">
					<li>You retain ownership of your data and content</li>
					<li>We grant you a limited license to use our Service</li>
					<li>You cannot copy, modify, or distribute our Service</li>
					<li>Our trademarks and logos are our property</li>
				</ul>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">
					Limitation of Liability
				</h2>

				<p>
					To the maximum extent permitted by law, Next-Kit shall not be liable
					for any indirect, incidental, special, consequential, or punitive
					damages.
				</p>

				<p>
					Our total liability to you for any claims arising from these Terms or
					the Service shall not exceed the amount you paid us in the 12 months
					preceding the claim.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Termination</h2>

				<p>You may cancel your account at any time by:</p>

				<ul className="list-disc pl-6">
					<li>Using the cancellation option in your account settings</li>
					<li>Contacting our support team</li>
				</ul>

				<p>We may suspend or terminate your account if you:</p>

				<ul className="list-disc pl-6">
					<li>Violate these Terms of Service</li>
					<li>Fail to pay fees when due</li>
					<li>Use the Service in a way that harms us or other users</li>
					<li>Provide false information</li>
				</ul>

				<p>
					We'll provide reasonable notice before termination unless immediate
					termination is necessary to protect the Service or other users.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Changes to Terms</h2>

				<p>
					We may update these Terms from time to time. We'll notify you of
					material changes by:
				</p>

				<ul className="list-disc pl-6">
					<li>Posting the updated Terms on our website</li>
					<li>Sending you an email notification</li>
					<li>Providing notice through our Service</li>
				</ul>

				<p>
					Your continued use of the Service after changes become effective
					constitutes acceptance of the new Terms.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Governing Law</h2>

				<p>
					These Terms are governed by and construed in accordance with the laws
					of the jurisdiction where Next-Kit is incorporated, without regard to
					conflict of law principles.
				</p>

				<p>
					Any disputes arising from these Terms or the Service will be resolved
					through binding arbitration or in the courts of our jurisdiction.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold">Contact Information</h2>

				<p>
					If you have any questions, concerns or complaints regarding our
					compliance with this notice, we encourage you to first contact us at
					yourinfo@gmail.com.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Severability</h2>

				<p>
					If any provision of these Terms is found to be unenforceable, the
					remaining provisions will continue in full force and effect.
				</p>
			</div>

			<div className="flex flex-col gap-4 text-muted-foreground">
				<h2 className="text-2xl font-bold text-primary">Entire Agreement</h2>

				<p>
					These Terms, together with our Privacy Policy, constitute the entire
					agreement between you and Next-Kit regarding the Service.
				</p>
			</div>
		</main>
	);
}
