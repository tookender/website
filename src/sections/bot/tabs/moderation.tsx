import { Command } from "@/components/discord/command";
import { Embed } from "@/components/discord/embed";
import { Message } from "@/components/discord/message";
import { TabsContainer } from "@/components/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export const Moderation = () => {
  return (
    <TabsContent
      value="moderation"
      className="border border-zinc-800 rounded-md"
    >
      <TabsContainer>
        <Message
          profile="dog hater"
          date="Today at 21:24"
          text="I HATE DOGS!!!!"
        />

        <Command
          profile="ender"
          command="ban"
          title="member: @dog hater delete_messages: Past 5 days reason: Stinky dog hater, dogs are the best!"
        />

        <Message profile="Korii Bot" date="Today at 21:24">
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
          date="Today at 21:25"
          text="thank you korii bot you're the best!!"
        />
      </TabsContainer>
    </TabsContent>
  );
};
