export const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-center border-t-2 border-neutral-700 mt-12">
			<h1 className="mt-4 ml-4 text-2xl font-semibold text-neutral-400/80">
				tookender
			</h1>

			<p className="text-neutral-300/80 ml-4">
				Full-stack developer • {new Date().getFullYear()}
			</p>
    </footer>
  );
};