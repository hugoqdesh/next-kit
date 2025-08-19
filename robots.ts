import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: ["/"],
			// disallow: ["admin/"],
		},
		sitemap: ["https://app-next-kit.vercel.app/sitemap.xml"],
	};
}
