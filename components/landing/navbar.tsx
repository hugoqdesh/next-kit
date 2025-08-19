import { ChevronsLeftRightEllipsis, Github } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export default function Navbar() {
	return (
		<header className="flex items-center justify-between px-4 md:px-8 py-3 border-b">
			<Link href="/" className="flex items-center gap-2">
				<ChevronsLeftRightEllipsis className="text-primary" />
				<span className="font-semibold text-lg">Next-Kit</span>
			</Link>

			<nav className="flex items-center gap-2 md:gap-4 lg:gap-6">
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:block">
						Docs
					</p>
				</Link>
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:block">
						Blog
					</p>
				</Link>
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:block">
						Pricing
					</p>
				</Link>
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:block">
						Dashboard
					</p>
				</Link>

				<ModeToggle />
			</nav>
		</header>
	);
}
