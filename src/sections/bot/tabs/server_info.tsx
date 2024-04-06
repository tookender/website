import {
  ButtonContainer,
  GrayButton,
  GreenButton,
} from "@/components/discord/button";
import { Command } from "@/components/discord/command";
import { Embed } from "@/components/discord/embed";
import { Message } from "@/components/discord/message";
import { TabsContainer } from "@/components/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export const ServerInfo = () => {
  return (
    <TabsContent
      value="server_info"
      className="rounded-md border border-zinc-800"
    >
      <TabsContainer>
        <Message
          profile="doggo"
          date="Today at 12:15"
          text="ngl.. i wish i could view all info about the server quickly.."
        />

        <Command profile="ender" command="server_info" />

        <Message profile="Korii Bot" date="Today at 12:16">
          <Embed
            title="Server Information"
            footer=""
            fields={[
              [
                "Information",
                [
                  `<emote:edit> **Name:** doggo hangout™️`,
                  `<emote:text2> **ID:** \`1029476640872468573\``,
                  `<emote:text1> **Description:** epic place for hanging out`,
                  `\n`,
                  `<emote:owner> **Owner:** tookender`,
                  `<emote:text2> **ID:** \`1022842005920940063\``,
                  `<emote:text1> **Mention:** \`@tookender\``,
                  `\n`,
                  `<emote:date> **Created:** \`a year ago\``,
                  `<emote:text1> **Full date:** \`11 October 2022 21:32\``,
                ],
              ],
              [
                "Numbers",
                [
                  `<emote:channel> **Channels:** \`16\``,
                  `<emote:text2> **Text:** \`12\``,
                  `<emote:text2> **Voice:** \`2\``,
                  `<emote:text1> **Threads:** \`1\``,
                  `\n`,
                  `<emote:members> **Members:** \`5\``,
                  `<emote:text2> **Humans:** \`4\``,
                  `<emote:text1> **Robots:** \`1\``,
                  `\n`,
                  `<emote:role> **Roles:** \`Button Below\``,
                  `<emote:text1> **Amount:** \`11\``,
                ],
              ],
            ]}
          />

          <ButtonContainer>
            <GreenButton text="Roles" />
          </ButtonContainer>
        </Message>

        <Message
          profile="doggo"
          date="Today at 12:16"
          text="holy moly, that is EPIC."
        />
        <Message
          profile="ender"
          date="Today at 12:16"
          text="glad you like it :)"
        />
      </TabsContainer>
    </TabsContent>
  );
};
