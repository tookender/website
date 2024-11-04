"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
	children: React.ReactNode;
	text: string;
	link: string;
	title: string;
}

export const SidebarItem = ({children, text, link, title}: SidebarItemProps) => {
	const pathname = usePathname();
	
	return (
		<Link title={title} href={link} target={link.startsWith("http") ? "_blank" : "_self"}>
			<div className={`flex active:scale-95 active:translate-z-0 items-center px-2 py-2 flex-row gap-2 text-sm border ${pathname == link ? "bg-neutral-200/5 text-white": "text-neutral-400 border-transparent"} font-semibold rounded-md duration-300 transition-all hover:text-white`}>
				{children}
				<h1>
					{text}
				</h1>
			</div>
		</Link>
	)
};