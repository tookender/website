import { FiGitCommit } from "react-icons/fi";
import { TbMessage2 } from "react-icons/tb";

export const Footer = () => {
  const gitCommit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ? `Release Version ${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA.substring(0, 7)}` : "Development Version";
	const gitCommitMessage = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE ? process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE : "Git Commit Message";

  return (
    <footer className="flex flex-col sm:flex-row items-stretch justify-between border-t-2 mb-12 sm:mb-6 border-neutral-700 mt-12">
			<div className="ml-4 mt-4">
				<h1 className="text-2xl font-semibold text-neutral-400/80">
					tookender
				</h1>

				<p className="text-neutral-300/80">
					Full-stack developer • {new Date().getFullYear()}
				</p>
			</div>

			<div className="mt-4 mr-4 hidden sm:flex flex-col items-end">
				<div title="Git Commit SHA Hash - Development Purposes" className="flex flex-row text-neutral-200/80 ml-4 mt-1 gap-2 items-center bg-neutral-800 px-2 rounded-md font-mono">
					<FiGitCommit/> 
					<p>{gitCommit}</p>
				</div>

				<div title="Git Commit Message - Development Purposes" className="flex flex-row text-neutral-200/80 ml-4 mt-1 gap-2 items-center bg-neutral-800 px-2 rounded-md font-mono">
					<TbMessage2/> 
					<p>{gitCommitMessage}</p>
				</div>
			</div>
    </footer>
  );
};