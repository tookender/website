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

interface CopyButtonProps {
	className: string;
}

export const CopyButtons = ({ className }: CopyButtonProps) => {
	return (
		<>
			<button onClick={copyDiscord} title="Copy my Discord username to clipboard">
				<div className={className}>
					<BsDiscord className="text-lg" />
					<h1>
						Discord
					</h1>
				</div>
			</button>

			<button onClick={copyEmail} title="Copy my E-Mail address to clipboard">
				<div className={className}>
					<BsMailbox className="text-lg" />
					<h1>
						E-Mail
					</h1>
				</div>
			</button>
		</>
	)
};

export const MinimalCopyButtons = ({ className }: CopyButtonProps) => {
	return (
		<>
			<button className="hover:text-white duration-300 p-2 rounded-md" onClick={copyDiscord} title="Copy my Discord username to clipboard">
				<BsDiscord/>
			</button>

			{/* <button className="hover:text-white duration-300 p-2 rounded-md" onClick={copyEmail} title="Copy my E-Mail address to clipboard">
				<BsMailbox/>
			</button> */}
		</>
	)
};