"use client";

import * as React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import {
	ChartNoAxesCombined,
	ChevronsLeftRightEllipsis,
	Contact,
	LayoutDashboard,
	Logs,
	MessageCircle,
	Paperclip,
	Settings,
	ToyBrick,
} from "lucide-react";
import { NavBottom } from "./nav-bottom";
import { NavMain } from "./nav-main";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			name: "Dashboard",
			url: "#",
			icon: LayoutDashboard,
		},
		{
			name: "Analytics",
			url: "#",
			icon: ChartNoAxesCombined,
		},
		{
			name: "Templates",
			url: "#",
			icon: Paperclip,
		},
		{
			name: "Transactions",
			url: "#",
			icon: Logs,
		},
		{
			name: "Integrations",
			url: "#",
			icon: ToyBrick,
		},
		{
			name: "Reports",
			url: "#",
			icon: Contact,
		},
	],
	navBottom: [
		{
			title: "Help",
			url: "#",
			icon: MessageCircle,
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="#">
								<ChevronsLeftRightEllipsis className="!size-5" />
								<span className="text-base font-semibold select-none">
									Next-Kit
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="pt-4">
				<NavMain items={data.navMain} />
				<NavBottom items={data.navBottom} className="mt-auto" />
			</SidebarContent>
		</Sidebar>
	);
}
