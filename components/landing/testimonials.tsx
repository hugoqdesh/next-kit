import React from "react";
import { Marquee } from "../ui/marquee";
import Image from "next/image";
import { PointerHighlight } from "../ui/pointer-highlight";

const reviews = [
	{
		name: "Jack1",
		username: "Founder, x",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		img: "/p.jpg",
	},
	{
		name: "Jack2",
		username: "Founder, x",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		img: "/p.jpg",
	},
	{
		name: "Jack3",
		username: "Founder, x",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		img: "/p.jpg",
	},
	{
		name: "Jack4",
		username: "Founder, x",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		img: "/p.jpg",
	},
	{
		name: "Jack5",
		username: "Founder, x",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		img: "/p.jpg",
	},
	{
		name: "Jack6",
		username: "Founder, x",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		img: "/p.jpg",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			key={name}
			className="relative h-full w-80 cursor-pointer overflow-hidden border p-4"
		>
			<blockquote className="pb-6 text-sm">"{body}"</blockquote>

			<hr />

			<div className="flex flex-row items-center gap-2 pt-3">
				<Image className="" width="42" height="42" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium">{name}</figcaption>
					<p className="text-xs font-medium text-muted-foreground">
						{username}
					</p>
				</div>
			</div>
		</figure>
	);
};

export default function Testimonials() {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mx-auto text-primary">
				<PointerHighlight
					rectangleClassName="border-primary"
					pointerClassName="text-primary"
				>
					What people are saying
				</PointerHighlight>
			</h2>
			<p className="text-muted-foreground text-center pt-1.5">
				Join thousands of developers who trust Next-Kit for their x needs
			</p>

			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
				<Marquee className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<Marquee reverse className="[--duration:20s]">
					{secondRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</section>
	);
}
