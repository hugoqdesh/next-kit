import React from "react";
import Image from "next/image";
import ElectricBorder from "../ui/electric-border";

export default function Features() {
	return (
		<section className="flex flex-col gap-32">
			<div className="flex flex-col gap-6">
				<h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center">
					Feature 1
				</h2>

				<ElectricBorder
					speed={0.25}
					chaos={0.4}
					thickness={1.5}
					className="p-4 md:p-4 rounded"
				>
					<Image
						src="/test2.png"
						alt=""
						height={1920}
						width={1080}
						unoptimized
						priority
						className="w-full select-none"
					/>
				</ElectricBorder>
			</div>

			<div className="flex flex-col gap-6">
				<h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center">
					Feature 2
				</h2>

				<ElectricBorder
					speed={0.25}
					chaos={0.4}
					thickness={1.5}
					className="p-4 md:p-6 rounded"
				>
					<Image
						src="/test2.png"
						alt=""
						height={1920}
						width={1080}
						unoptimized
						priority
						className="w-full select-none"
					/>
				</ElectricBorder>
			</div>

			<div className="flex flex-col gap-6">
				<h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center">
					Feature 3
				</h2>

				<ElectricBorder
					speed={0.25}
					chaos={0.4}
					thickness={1.5}
					className="p-4 md:p-6 rounded"
				>
					<Image
						src="/test2.png"
						alt=""
						height={1920}
						width={1080}
						unoptimized
						priority
						className="w-full select-none"
					/>
				</ElectricBorder>
			</div>
		</section>
	);
}
