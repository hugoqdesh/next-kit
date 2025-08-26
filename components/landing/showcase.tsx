import React from "react";
import Image from "next/image";
import ElectricBorder from "../ui/electric-border";

export default function Showcase() {
	return (
		<section>
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
		</section>
	);
}
