import React from "react";
import Link from "next/link";
import {
	ChevronsLeftRightEllipsis,
	Github,
	Instagram,
	Mail,
	Twitter,
} from "lucide-react";
import { TextHoverEffect } from "../ui/text-hover-effect";

export default function Footer() {
	return (
		<footer className="border-t">
			<div className="max-w-7xl mx-auto pt-8">
				<div className="grid grid-cols-4">
					<div>
						<Link href="/" className="flex items-center gap-2">
							<ChevronsLeftRightEllipsis className="text-primary" />
							<span className="font-semibold text-lg">Next-Kit</span>
						</Link>
						<p className="text-muted-foreground mt-4 text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Possimus, illo!
						</p>
					</div>

					<nav className="flex flex-col gap-2">
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
							Product
						</h3>
						<ul className="flex flex-col gap-1 text-muted-foreground">
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									Documentation
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									API
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									Dashboard
								</Link>
							</li>
						</ul>
					</nav>

					<nav className="flex flex-col gap-2">
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
							Company
						</h3>
						<ul className="flex flex-col gap-1 text-muted-foreground">
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									Contributors
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									Ambassadors
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors"
								>
									Open Source
								</Link>
							</li>
						</ul>
					</nav>

					<nav className="flex flex-col gap-2">
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
							Contact
						</h3>
						<ul className="flex flex-col gap-1 text-muted-foreground">
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors flex items-center gap-1"
								>
									<Mail size={15} />
									support@databuddy.cc
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors flex items-center gap-1"
								>
									<Instagram size={15} />
									Instagram
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors flex items-center gap-1"
								>
									<Github size={15} />
									GitHub
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm hover:text-primary transition-colors flex items-center gap-1"
								>
									<Twitter size={15} />X
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="text-muted-foreground text-xs flex pb-4 pt-8 items-center justify-between">
					<div className="flex gap-4">
						<Link href="/" className="hover:text-primary transition-colors">
							Privacy Policy
						</Link>
						<Link href="/" className="hover:text-primary transition-colors">
							Terms of Service
						</Link>
					</div>

					<p>© 2025 Next-Kit</p>
				</div>

				<hr />

				<TextHoverEffect text="NEXT-KIT" />
			</div>
		</footer>
	);
}
