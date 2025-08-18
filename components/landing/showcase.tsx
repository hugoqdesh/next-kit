import React from "react";
import Image from "next/image";

export default function Showcase() {
	return (
		<section className="p-4 md:p-6 flex flex-col gap-6 border border-dashed rounded-sm">
			<div className="border border-dashed p-1 rounded-sm">
				<Image
					src="/test2.png"
					alt=""
					height={1920}
					width={1080}
					unoptimized
					priority
					className="w-full rounded-sm select-none"
				/>
			</div>
		</section>
	);
}
