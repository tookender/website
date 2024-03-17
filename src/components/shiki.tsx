import { useState, useEffect } from "react";
import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";

export default function Code({
  code,
  lang = "javascript",
  theme = "poimandres",
}: {
  code: string;
  lang: BundledLanguage;
  theme?: BundledTheme;
}) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    async function fetchHtml() {
      const generatedHtml = await codeToHtml(code, {lang, theme });
      setHtml(generatedHtml);
    }

    fetchHtml();
  }, [code, lang, theme]);

  return (
    <div
      id={lang}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
