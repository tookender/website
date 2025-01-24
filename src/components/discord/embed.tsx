import { Image } from "@heroui/react";
import React from "react";

interface EmbedProps {
  title?: string;
  description?: string;
  authorText?: string;
  authorPicture?: string;
  fields?: [string, string[]][];
  picture?: string;
  pictureId?: string;
  pictureDescription?: string;
  footer?: string;
}

export const Embed = ({
  title,
  description,
  authorText,
  authorPicture,
  fields,
  picture,
  pictureId,
  pictureDescription,
  footer,
}: EmbedProps) => {
  const addEmotes = (text: string, height: number) => {
    const emoteRegex = /<emote:([^>]+)>/g;

    // Replace each emote placeholder with its corresponding image tag
    const newText = text.replace(emoteRegex, (match, emoteName) => {
      return `<img src="/emotes/${emoteName}.webp" class="max-h-[28px]" width="${height}" height="${height}">`;
    });
    return newText;
  };

  const formatText = (text: string, height: number = 28) => {
    let newText = addEmotes(text, height);
    newText = newText.replace(
      "`@Server Booster`",
      '<span className="text-[#F6B5FA] bg-[#F6B5FA]/20">Server Booster</span>'
    );
    newText = newText.replace(
      /\*\*(.*?)\*\*/g,
      '<span class="font-bold">$1</span>'
    );
    newText = newText.replace(/\*(.*?)\*/g, '<span class="italic">$1</span>');
    newText = newText.replace(
      /`(.*?)`/g,
      '<span class="bg-black/30 px-1 rounded-sm font-code">$1</span>'
    );
    newText = newText.replace("\\n", "<br/>");
    return newText;
  };

  return (
    <div className="ml-14 flex w-fit max-w-[700px] flex-row gap-2 rounded-md bg-[#212121] pr-4">
      <div className="w-1 rounded-l-md bg-[#10B981]" />

      <div className="flex flex-col">
        {authorText && (
          <div>
            <div className="flex flex-row gap-1 items-center mt-4 mb-2">
              <img src={authorPicture} className="w-6 h-6 rounded-full" />
              <p>{authorText}</p>
            </div>
          </div>
        )}

        {title && (
          <h1
            className="mt-3 flex flex-row gap-2 text-base font-bold sm:text-lg"
            dangerouslySetInnerHTML={{ __html: formatText(title) }}
          ></h1>
        )}

        {description && (
          <p className="flex flex-row gap-1" dangerouslySetInnerHTML={{ __html: formatText(description, 24) }}></p>
        )}

        <div className="mt-2 flex flex-col gap-2 text-sm font-light ml:flex-row sm:gap-8 sm:text-base">
          {/* we don't know the height/width of the image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <button className={picture ? "block" : "hidden"}>
            <Image
              src={picture}
              className="w-full max-w-[256px] rounded-md"
              id={pictureId}
              alt={pictureDescription}
            />
          </button>
          {fields &&
            fields.map((field, index) => (
              <div key={index}>
                <h2 className="mb-1 font-semibold sm:mb-0">{field[0]}</h2>
                {field[1].map((text, index) => (
                  <p
                    key={index}
                    className="flex flex-row gap-1"
                    dangerouslySetInnerHTML={{ __html: formatText(text, 24) }}
                  />
                ))}
              </div>
            ))}
        </div>

        {footer && (
          <p className="mb-3 mt-2 text-neutral-300/80 text-xs font-medium">
            {footer}
          </p>
        )}
      </div>
    </div>
  );
};
