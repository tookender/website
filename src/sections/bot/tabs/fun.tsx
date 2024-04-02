import { ButtonContainer, GreenButton } from "@/components/discord/button";
import { Command } from "@/components/discord/command";
import { Embed } from "@/components/discord/embed";
import { Message } from "@/components/discord/message";
import { TabsContainer } from "@/components/tabs";
import { getRandomDog } from "@/lib/doggo";
import { TabsContent } from "@radix-ui/react-tabs";

export const Fun = () => {
  const picture = getRandomDog(false);

  return (
    <TabsContent value="fun" className="border border-zinc-800 rounded-md">
      <TabsContainer>
        <Message
          profile="doggo"
          date="Today at 14:05"
          text="i wish i could view some cute doggo pictures :("
        />
        <Message profile="Korii Bot" date="Today at 14:05">
          <Command profile="ender" command="dog" />
        </Message>

        <Embed
          title="Doggo :D"
          picture={picture[0]}
          pictureId="doggoPicture"
          pictureDescription={picture[1]}
        />

        <ButtonContainer>
          <GreenButton text="Random doggo" />
        </ButtonContainer>

        <Message profile="doggo" date="Today at 14:06" text="HOLY MOLY THATS AWESOME! THANK YOU KORII BOT!!" />
      </TabsContainer>
    </TabsContent>
  );
};
