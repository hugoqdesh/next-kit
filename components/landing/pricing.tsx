import React from "react";
import { Button } from "../ui/button";
import { CheckCircle, MousePointerClick, Ratio, XCircle } from "lucide-react";
import { BorderTrail } from "../ui/border-trail";

export default function Pricing() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-12 md:gap-6 px-6 md:px-0">
			<div className="flex flex-col gap-6 p-6">
				<p className="text-xl font-medium">Free</p>

				<div>
					<div className="flex gap-1 items-end">
						<p className="text-4xl font-medium">$0</p>
						<p className="text-muted-foreground text-base">/month</p>
					</div>
					<p className="pt-1 text-sm">Must-have features for everyday use.</p>
				</div>

				<hr />

				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-1">
						<CheckCircle size={18} />
						<p className="text-sm">Use your own AI API Keys</p>
					</div>
					<div className="flex items-center gap-1">
						<XCircle size={18} />
						<p className="text-sm">Use your own AI API Keys</p>
					</div>
					<div className="flex items-center gap-1">
						<XCircle size={18} />
						<p className="text-sm">Use your own AI API Keys</p>
					</div>
					<div className="flex items-center gap-1">
						<XCircle size={18} />
						<p className="text-sm">Use your own AI API Keys</p>
					</div>
				</div>

				<Button size="sm" variant="ghost">
					<MousePointerClick
						className="-ms-0.5 opacity-60"
						size={16}
						aria-hidden="true"
					/>
					Join for Free
				</Button>
			</div>

			<div className="flex flex-col gap-6 p-6 rounded-sm relative">
				<span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-primary to-secondary px-3 py-1 text-xs font-medium text-black ring-1 ring-inset ring-transparent z-10">
					Popular
				</span>
				<BorderTrail
					className="bg-primary"
					style={{
						boxShadow:
							"0px 0px 80px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
					}}
					size={120}
				/>
				<p className="text-2xl font-medium">Pro</p>

				<div>
					<div className="flex gap-1 items-end">
						<p className="text-5xl font-medium">$8.49</p>
						<p className="text-muted-foreground text-lg">/month</p>
					</div>
					<p className="pt-1">Advanced tools for a refined workflow.</p>
				</div>

				<hr />

				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<CheckCircle size={20} className="text-primary" />
						<p>Use your own AI API Keys</p>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle size={20} className="text-primary" />
						<p>Use your own AI API Keys</p>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle size={20} className="text-primary" />
						<p>Use your own AI API Keys</p>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle size={20} className="text-primary" />
						<p>Use your own AI API Keys</p>
					</div>
				</div>

				<Button variant="outline">
					<Ratio
						className="-ms-0.5 text-primary"
						size={16}
						aria-hidden="true"
					/>
					Get Pro
				</Button>
			</div>
		</section>
	);
}
