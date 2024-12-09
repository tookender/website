import { useState } from "react";
import { ButtonContainer, GreenButton } from "@/components/discord/button";
import { Command } from "@/components/discord/command";
import { Embed } from "@/components/discord/embed";
import { Message } from "@/components/discord/message";
import { getRandomDog } from "@/lib/doggo";

export const Fun = () => {
  const [picture, setPicture] = useState(getRandomDog(false));

  const handleRandomDog = () => {
    setPicture(getRandomDog(false));
  };

  return (
    <>
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
          footer="Click the button, it really works!"
        />

        <ButtonContainer>
          <GreenButton text="Random doggo" onClick={handleRandomDog} />
        </ButtonContainer>
      </Message>

      <Message
        profile="doggo"
        date="Today at 14:06"
        text="THAT'S AWESOME!! THANK YOU SO MUCHH"
      />
    </>
  );
};