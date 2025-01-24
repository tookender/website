import { Command } from "@/components/discord/command";
import { Embed } from "@/components/discord/embed";
import { Message } from "@/components/discord/message";

export const Economy = () => {
  return (
    <>
      <Command profile="ender" command="daily" />
      <Message profile="Korii Bot" date="Today at 16:00">
        <Embed
          authorText="ender"
          authorPicture="/ender.webp"
          description="You've claimed your daily reward of $1000!"
        />
      </Message>

      <Command profile="ender" command="work" />
      <Message profile="Korii Bot" date="Today at 16:01">
        <Embed
          authorText="ender"
          authorPicture="/ender.webp"
          description="A homeless man is feeling generous today, and only today. He gives you $1."
        />
      </Message>

      <Message
        profile="ender"
        date="Today at 16:01"
        text="the bot also has stuff like gambling and working a job but im too lazy to show it"
      />
    </>
  );
};