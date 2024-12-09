"use client";

import emoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { remarkAlert } from "remark-github-blockquote-alert";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Textarea } from "@nextui-org/react";

type NoteEditorProps = {
  defaultContent: string;
  defaultTitle: string;
};

export default function NoteEditor({ defaultContent, defaultTitle }: NoteEditorProps) {
  const [content, setContent] = useState(defaultContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = (event: React.FocusEvent<Element>) => {
    setIsEditing(false);
    const form = (event.target as HTMLTextAreaElement).form;
    if (form) {
      form.requestSubmit();
    }
  };

  return (
    <>
      <input
        name="newNoteName"
        defaultValue={defaultTitle}
        className="text-3xl font-extrabold bg-transparent w-full mb-4 border-b-2"
      />

      <Textarea
        name="content"
        maxRows={Infinity}
        maxLength={5124}
        variant="underlined"
        placeholder="..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onBlur={handleBlur}
        autoFocus
        className={`${isEditing ? "" : "hidden"}`}
      />

      <div
        className={`prose prose-invert max-w-none ${isEditing ? "hidden" : ""}`}
        onClick={() => setIsEditing(true)} // Enter editing mode on click
      >
        <ReactMarkdown remarkPlugins={[[remarkGfm], [emoji], [remarkAlert], [remarkBreaks]]}>{content}</ReactMarkdown>
      </div>
    </>
  );
}
