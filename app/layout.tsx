import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://app-next-kit.vercel.app"),
	title: "Next-Kit Template",
	description:
		"NextJS full-stack SaaS boilerplate with all you need to start. Includes authentication, billing, and more.",
	keywords: ["keyword1", "keyword2", "keyword3"],
	openGraph: {
		siteName: "Next-Kit Template",
		locale: "en-us",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
		googleBot: "index, follow",
	},
	twitter: {
		card: "summary_large_image",
		site: "@hugoqdesh",
		creator: "@hugoqdesh",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />

					{children}

					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
