import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: "https://app-next-kit.vercel.app",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: "https://app-next-kit.vercel.app/docs",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://app-next-kit.vercel.app/dashboard",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		// other pages
	];
}
