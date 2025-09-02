import React from "react";
import Image from "next/image";

export default function Features() {
	return (
		<section className="flex flex-col gap-32">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2 tracking-tight text-center">
					<h2 className="scroll-m-20 text-4xl font-semibold">Feature 1</h2>
					<p className="text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
						amet!
					</p>
				</div>

				<div className="border-3 border-muted-foreground/20 p-2 rounded-xl">
					<Image
						src="/feature.jpg"
						alt=""
						height={1920}
						width={1080}
						unoptimized
						priority
						className="w-full select-none rounded-lg"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2 tracking-tight text-center">
					<h2 className="scroll-m-20 text-4xl font-semibold">Feature 2</h2>
					<p className="text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
						amet!
					</p>
				</div>

				<div className="border-3 border-muted-foreground/20 p-2 rounded-xl">
					<Image
						src="/feature.jpg"
						alt=""
						height={1920}
						width={1080}
						unoptimized
						priority
						className="w-full select-none rounded-lg"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2 tracking-tight text-center">
					<h2 className="scroll-m-20 text-4xl font-semibold">Feature 3</h2>
					<p className="text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
						amet!
					</p>
				</div>

				<div className="border-3 border-muted-foreground/20 p-2 rounded-xl">
					<Image
						src="/feature.jpg"
						alt=""
						height={1920}
						width={1080}
						unoptimized
						priority
						className="w-full select-none rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
}
