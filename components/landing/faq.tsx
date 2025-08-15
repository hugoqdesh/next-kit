import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestionMark } from "lucide-react";
import { PointerHighlight } from "../ui/pointer-highlight";

const items = [
	{
		id: "1",
		icon: MessageCircleQuestionMark,
		title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis consequatur magnam eum porro rem, laudantium enim corrupti, dolores temporibus ex reiciendis veniam officiis voluptate. Autem repellat dolorum alias corporis!",
	},
	{
		id: "2",
		icon: MessageCircleQuestionMark,
		title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis consequatur magnam eum porro rem, laudantium enim corrupti, dolores temporibus ex reiciendis veniam officiis voluptate. Autem repellat dolorum alias corporis!",
	},
	{
		id: "3",
		icon: MessageCircleQuestionMark,
		title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis consequatur magnam eum porro rem, laudantium enim corrupti, dolores temporibus ex reiciendis veniam officiis voluptate. Autem repellat dolorum alias corporis!",
	},
	{
		id: "4",
		icon: MessageCircleQuestionMark,
		title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis consequatur magnam eum porro rem, laudantium enim corrupti, dolores temporibus ex reiciendis veniam officiis voluptate. Autem repellat dolorum alias corporis!",
	},
];

export default function FAQ() {
	return (
		<section className="space-y-4">
			<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-muted-foreground">
				Questions you might{" "}
				<PointerHighlight
					pointerClassName="text-primary"
					containerClassName="inline-block"
				>
					<span className="text-primary">want answers to</span>
				</PointerHighlight>
			</h2>

			<Accordion type="single" collapsible className="w-full" defaultValue="3">
				{items.map((item) => (
					<AccordionItem value={item.id} key={item.id} className="py-2">
						<AccordionTrigger className="py-2 text-lg leading-6 hover:no-underline">
							<span className="flex items-center gap-3">
								<item.icon
									size={18}
									className="shrink-0 opacity-60 text-primary"
									aria-hidden="true"
								/>
								<span>{item.title}</span>
							</span>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-2 text-base">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
