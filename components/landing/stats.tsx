import React from "react";
import { Visual1 } from "../ui/visual-1";
import { Visual2 } from "../ui/visual-2";
import { Visual3 } from "../ui/visual-3";
import {
	AnimatedCard,
	CardBody,
	CardDescription,
	CardTitle,
	CardVisual,
} from "../ui/animated-card";

export default function Stats() {
	return (
		<section className="grid grid-cols-3 mx-auto gap-12">
			<AnimatedCard>
				<CardVisual>
					<Visual1 mainColor="#d97757" secondaryColor="#d97757" />
				</CardVisual>
				<CardBody>
					<CardTitle>Just find the right caption</CardTitle>
					<CardDescription>
						This card will tell everything you want
					</CardDescription>
				</CardBody>
			</AnimatedCard>

			<AnimatedCard>
				<CardVisual>
					<Visual2 mainColor="#d97757" secondaryColor="#d97757" />
				</CardVisual>
				<CardBody>
					<CardTitle>Just find the right caption</CardTitle>
					<CardDescription>
						This card will tell everything you want
					</CardDescription>
				</CardBody>
			</AnimatedCard>

			<AnimatedCard>
				<CardVisual>
					<Visual3 mainColor="#d97757" secondaryColor="#d97757" />
				</CardVisual>
				<CardBody>
					<CardTitle>Just find the right caption</CardTitle>
					<CardDescription>
						This card will tell everything you want
					</CardDescription>
				</CardBody>
			</AnimatedCard>
		</section>
	);
}
