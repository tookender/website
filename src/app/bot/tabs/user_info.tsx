import {
  ButtonContainer,
  GrayButton,
  GreenButton,
} from "@/components/discord/button";
import { Embed } from "@/components/discord/embed";
import { Command } from "@/components/discord/command";
import { Message } from "@/components/discord/message";

export const UserInfo = () => {
  return (
    <>
      <Message
        profile="doggo"
        date="Today at 21:24"
        text="i wish i could view all my user info in one place..."
      />

      <Command profile="ender" command="user_info" title="user: @doggo" />

      <Message profile="Korii Bot" date="Today at 21:24">
        <Embed
          title="<emote:online> User Information"
          footer=""
          fields={[
            [
              "General Information",
              [
                `<emote:edit> **Name:** \`doggo\``,
                `<emote:text2> **ID:** \`1022842005920940063\``,
                `<emote:text1> **Tag:** \`doggo\``,
                `\n`,
                `<emote:date> **Created:** \`4 years ago\``,
                `<emote:text1> **Full date:** \`23 June 2020 04:22\``,
                `\n`,
                `<emote:date> **Joined:** \`16 days ago\``,
                `<emote:text2> **Position:** \`256\``,
                `<emote:text1> **Full date:** \`17 March 2024 13:17\``,
              ],
            ],
            [
              "Other Information",
              [
                `<emote:role> **Roles:** \`Button Below\``,
                `<emote:text2> **Amount:** \`4\``,
                `<emote:text2> **Color:** \`#3498DB\``,
                `<emote:text2> **Top Role:** \`@Doggo\``,
                `<emote:text1> **Permissions:** \`Button Below\``,
                `\n`,
                `<emote:boost> **Boosted:** \`6 months ago\``,
                `<emote:text2> **Full date:** \`8 October 2023 22:44\``,
                `<emote:text1> **Role:** \`@Server Booster\``,
              ],
            ],
          ]}
        />

        <ButtonContainer>
          <GrayButton text="Avatar" />
          <GrayButton text="Banner" />
          <GreenButton text="Roles" />
          <GreenButton text="Permissions" />
        </ButtonContainer>
      </Message>

      <Message
        profile="doggo"
        date="Today at 21:25"
        text=":O THATS SO COOL TYSM!!!"
      />
      <Message profile="ender" date="Today at 21:25" text="for sure :D" />
    </>
  );
};
