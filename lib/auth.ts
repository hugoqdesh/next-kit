import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Polar } from "@polar-sh/sdk";
import { polar, checkout, portal } from "@polar-sh/better-auth";

const prisma = new PrismaClient();

const polarClient = new Polar({
	accessToken: process.env.POLAR_ACCESS_TOKEN,
	server: "sandbox",
});

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "mongodb",
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
	rateLimit: {
		enabled: true,
		window: 10,
		max: 3,
	},
	plugins: [
		polar({
			client: polarClient,
			createCustomerOnSignUp: true,
			use: [
				checkout({
					products: [
						{
							productId: "693082e9-2287-42d9-bebe-b50497a2c251",
							slug: "product",
						},
					],
					successUrl: "/success?checkout_id={CHECKOUT_ID}",
					authenticatedUsersOnly: true,
				}),
				portal(),
			],
		}),
	],
	telemetry: {
		enabled: false,
	},
});
