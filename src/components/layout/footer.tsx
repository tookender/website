import { FiGitCommit } from "react-icons/fi";

export const Footer = () => {
  const gitCommit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ? `Release Version ${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA.substring(0, 7)}` : "Development Version";

  return (
    <footer className="flex flex-col items-start justify-center border-t-2 border-neutral-700 mt-12">
      <h1 className="mt-4 ml-4 text-2xl font-semibold text-neutral-400/80">
        tookender
      </h1>

      <p className="text-neutral-300/80 ml-4">
        Full-stack developer • {new Date().getFullYear()}
      </p>

      <div title="Git Commit SHA Hash - Development Purposes" className="flex flex-row text-neutral-200/80 ml-4 mt-1 gap-2 items-center bg-neutral-800 px-2 rounded-md font-mono">
        <FiGitCommit/> 
        <p>{gitCommit}</p>
      </div>
    </footer>
  );
};