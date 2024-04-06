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
    <TabsContent value="fun" className="rounded-md border border-zinc-800">
      <TabsContainer>
        <Message
          profile="ender"
          date="Today at 14:04"
          text="hi doggo, how are you??"
        />

        <Message
          profile="doggo"
          date="Today at 14:05"
          text="im kinda sad.. some dog pictures would help"
        />

        <Command profile="ender" command="dog" />

        <Message profile="Korii Bot" date="Today at 14:05">
          <Embed
            title="Doggo :D"
            picture={picture[0]}
            pictureId="doggoPicture"
            pictureDescription={picture[1]}
          />

          <ButtonContainer>
            <GreenButton text="Random doggo" />
          </ButtonContainer>
        </Message>

        <Message
          profile="doggo"
          date="Today at 14:06"
          text="THAT'S AWESOME!! THANK YOU SO MUCHH"
        />
      </TabsContainer>
    </TabsContent>
  );
};
