interface SidebarItemProps {
	children: React.ReactNode;
	text: string;
	description: string;
	background: string;
}

export const Technology = ({children, text, description, background}: SidebarItemProps) => {	
	return (
		<div className="flex flex-row gap-3 p-2 rounded-lg bg-neutral-800/70 border border-transparent hover:border-[#404040] hover:bg-neutral-700/60 active:scale-95 duration-300 items-center"> 
			<div className={`${background} p-2.5 rounded-lg text-3xl`}>
				{children}
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
	)
};