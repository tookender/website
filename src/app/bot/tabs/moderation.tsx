import { Embed } from "@/components/discord/embed";
import { Command } from "@/components/discord/command";
import { Message } from "@/components/discord/message";

export const Moderation = () => {
  return (
    <>
      <Message
        profile="dog hater"
        date="Today at 17:49"
        text="I HATE DOGS!!!!"
      />

      <Command
        profile="ender"
        command="ban"
        title="member: @dog hater delete_messages: Past 5 days reason: Stinky dog hater, dogs are the best!"
      />

      <Message profile="Korii Bot" date="Today at 17:49">
        <Embed
          title="🛠️ Banned dog hater"
          footer="Executed by tookender | Soft: No | Notified: Yes"
          fields={[
            ["❓ Reason", ["Stinky dog hater, dogs are the best!"]],
            ["Delete Messages", ["Past 5 days"]],
          ]}
        />
      </Message>

      <Message
        profile="doggo"
        date="Today at 17:51"
        text="thank you korii bot you're the best!!"
      />
    </>
  );
};