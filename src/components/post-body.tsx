import markdownStyles from "@/styles/markdown-styles.module.css";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
})

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className={`mt-12 mx-2 ${garamond.className}`}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}