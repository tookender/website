"use client";

import { motion } from "framer-motion";

interface TechnologyCardProps {
	text: string;
	description: string;
	background: string;
	index: number;
	icon: React.ReactNode;
}

export const TechnologyCard = ({ text, description, background, index, icon }: TechnologyCardProps) => {	
	return (
		<motion.button
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.3, delay: index * 0.08 }}
		>
			<div className="flex flex-row gap-3 p-2 rounded-lg bg-neutral-800/70 border border-transparent hover:border-[#404040] hover:bg-neutral-700/60 active:scale-95 duration-300 items-center"> 
				<div className={`${background} p-2.5 rounded-lg text-3xl`}>
					{icon}
				</div>
				<div className="flex flex-col items-start">
					<h1 className="font-semibold text-lg">
						{text}
					</h1>

					<p className="text-neutral-400/80 -translate-y-1">
						{description}
					</p>
				</div>
			</div>
		</motion.button>
	)
};