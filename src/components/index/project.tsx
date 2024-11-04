import { Tooltip } from "@/components/tooltip";
import { TechnologyItem } from "@/types/technologies";

interface ProjectCardProps {
	title: string;
	link: string;
	description: string;
	languages: TechnologyItem[];
}

export const ProjectCard = ({ title, link, description, languages}: ProjectCardProps) => {	
	return (
		<a href={link} title={title} target={link.startsWith("/") ? "_self" : "_blank"}>
			<div className="flex flex-col justify-between p-4 rounded-lg bg-neutral-800/70 border border-transparent hover:border-[#404040] hover:bg-neutral-700/60 group active:scale-[0.98] duration-300 items-start h-[8.5rem]"> 				
				<div className="flex flex-col gap-1 w-full">
					<div className="flex flex-row justify-between w-full">
						<h1 className="text-lg font-semibold">
							{title}
						</h1>

						{!link.startsWith("/") && (
							<p className="text-red-500" title="External site" aria-label="External site">
								*
							</p>
						)}
					</div>

					<p className="text-neutral-400/80 text-sm">
						{description}
					</p>
				</div>

				<div className="flex flex-row gap-3">
					<div className="flex flex-row">
						{languages.map((language, index) => (
							<Tooltip key={index} content={language.text}>
								<div className="p-1.5 rounded-lg text-xl">
									{language.icon}
								</div>
							</Tooltip>
						))}
					</div>
				</div>
			</div>
		</a>
	)
};