import React from "react";

export const Embed = ({
  title,
  fields,
  picture,
  pictureId,
  pictureDescription,
  footer,
}: {
  title: string;
  fields?: [string, string[]][];
  picture?: string;
  pictureId?: string;
  pictureDescription?: string;
  footer?: string;
}) => {
  const addEmotes = (text: string, height: number) => {
    const emoteRegex = /<emote:([^>]+)>/g;

    // Replace each emote placeholder with its corresponding image tag
    let newText = text.replace(emoteRegex, (match, emoteName) => {
        // Assuming emote images are stored in /emotes/ directory and named textHere.webp
        return `<img src="/emotes/${emoteName}.webp" width="${height}">`;
    });
    return newText;
  };

  const formatText = (text: string, height: number = 28) => {
    let newText = addEmotes(text, height);
    newText = newText.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>');
    newText = newText.replace(/\*(.*?)\*/g, '<span class="italic">$1</span>');
    newText = newText.replace(/`(.*?)`/g, '<span class="bg-black/30 px-1 rounded-sm font-code">$1</span>')
    newText = newText.replace(/\n/g, '<br>');
    return newText; 
  };

  return (
    <div className="max-w-[700px] w-fit pr-4 bg-neutral-900 rounded-md flex flex-row gap-2 ml-14">
      <div className="w-1 bg-[#10B981] rounded-l-md" />

      <div className="flex flex-col">
        <h1 className="font-bold text-lg mt-3 flex flex-row gap-2" dangerouslySetInnerHTML={{ __html: formatText(title) }}></h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-base font-light mt-2">
          {/* we don't know the height/width of the image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={picture} className={`max-w-[256px] rounded-md ${picture ? "block" : "hidden"}`} id={pictureId} alt={pictureDescription}/>
          {fields && fields.map((field, index) => (
            <div key={index}>
              <h2 className="font-semibold">{field[0]}</h2>
              {field[1].map((text, index) => (
                <p key={index} className="flex flex-row gap-1" dangerouslySetInnerHTML={{ __html: formatText(text, 24) }} />
              ))}
            </div>
          ))}
        </div>

        <p className="mt-2 mb-3 text-xs font-medium">{footer}</p>
      </div>
    </div>
  );
};
