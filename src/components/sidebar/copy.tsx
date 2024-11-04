"use client";

import toast from "react-hot-toast";
import { BsDiscord, BsMailbox } from "react-icons/bs";

function copyEmail() {
	toast("E-Mail address has been copied to your clipboard!", {
    icon: "📋",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

	navigator.clipboard.writeText("tookender@gmail.com");
}

function copyDiscord() {
	toast("Discord username has been copied to your clipboard!", {
    icon: "📋",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

	navigator.clipboard.writeText("tookender");
}

export const CopyButtons = () => {
	return (
		<>
			<button onClick={copyDiscord} title="Copy my Discord username to clipboard" aria-label="Copy my Discord username to clipboard">
				<div className="flex active:scale-95 active:translate-z-0 items-center px-2 py-2 text-neutral-400 flex-row gap-2 text-sm font-semibold rounded-md duration-300 transition-all hover:text-white">
					<BsDiscord className="text-lg" />
					<h1>
						Discord
					</h1>
				</div>
			</button>

			<button onClick={copyEmail} title="Copy my E-Mail address to clipboard" aria-label="Copy my E-Mail address to clipboard">
				<div className="flex active:scale-95 active:translate-z-0 items-center px-2 py-2 text-neutral-400 flex-row gap-2 text-sm font-semibold rounded-md duration-300 transition-all hover:text-white">
					<BsMailbox className="text-lg" />
					<h1>
						E-Mail
					</h1>
				</div>
			</button>
		</>
	)
};