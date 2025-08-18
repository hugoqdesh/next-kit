"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();

	return (
		<main className="flex min-h-screen flex-col items-center gap-6 pt-62">
			<h1 className="font-bold text-7xl">404</h1>
			<h2 className="font-semibold text-4xl">Look like you're lost</h2>
			<p className="text-muted-foreground">
				The page you are looking for is not available!
			</p>

			<div className="flex gap-4">
				<Button variant="outline" onClick={() => router.back()}>
					Go Back
				</Button>
				<Link href="/">
					<Button>Go Home</Button>
				</Link>
			</div>
		</main>
	);
}
