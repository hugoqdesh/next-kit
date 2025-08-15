import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Laptop } from "lucide-react";
import { Safari } from "../ui/safari";
import Stats from "./stats";

export default function Showcase() {
	return (
		<section className="p-12 flex flex-col gap-6">
			<Tabs defaultValue="tab-1" className="items-center">
				<TabsList className="bg-transparent">
					<TabsTrigger value="tab-1">
						<Laptop className="-ms-0.5" size={16} aria-hidden="true" />
						Screenshot 1
					</TabsTrigger>
					<TabsTrigger value="tab-2" className="group">
						<Laptop className="-ms-0.5" size={16} aria-hidden="true" />
						Screenshot 2
					</TabsTrigger>
					<TabsTrigger value="tab-3" className="group">
						<Laptop className="-ms-0.5" size={16} aria-hidden="true" />
						Screenshot 3
					</TabsTrigger>
				</TabsList>
				<TabsContent value="tab-1">
					<div>
						<Safari
							url="url.com"
							className="w-full"
							imageSrc="/test2.png"
							mode="simple"
						/>
					</div>
				</TabsContent>
				<TabsContent value="tab-2">
					<div>
						<Safari
							url="url.com"
							className="w-full"
							imageSrc="/test2.png"
							mode="simple"
						/>
					</div>
				</TabsContent>
				<TabsContent value="tab-3">
					<div>
						<Safari
							url="url.com"
							className="w-full"
							imageSrc="/test2.png"
							mode="simple"
						/>
					</div>
				</TabsContent>
			</Tabs>

			<Stats />
		</section>
	);
}
