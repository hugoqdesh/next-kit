import { ChevronsLeftRightEllipsis, Github } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export default function Navbar() {
	return (
		<header className="flex items-center justify-between px-8 py-3 border-b">
			<Link href="/" className="flex items-center gap-2">
				<ChevronsLeftRightEllipsis className="text-primary" />
				<span className="font-semibold text-lg">Next-Kit</span>
			</Link>

			<nav className="flex items-center gap-6">
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors">
						Docs
					</p>
				</Link>
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors">
						Blog
					</p>
				</Link>
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors">
						Pricing
					</p>
				</Link>
				<Link href="/">
					<p className="text-sm text-muted-foreground hover:text-primary transition-colors">
						Dashboard
					</p>
				</Link>

				<Link href="https://github.com/hugoqdesh/next-kit" target="_blank">
					<Button size="icon" variant="ghost">
						<Github size={16} className="text-muted-foreground " />
					</Button>
				</Link>
				<ModeToggle />
			</nav>
		</header>
	);
}
