import { useEffect, useState } from "react";

export const TimeStatus = () => {
  const [time, setTime] = useState<string>("00:00");
  const [awake, setAwake] = useState<boolean>(true);

  function updateTime() {
    let current = new Date().toLocaleTimeString("en-GB", {
      timeZone: "Europe/Berlin",
    });
    setTime(`${current}`);
    const hour = 12;

    if (hour >= 23 || hour < 10) {
      setAwake(false);
    } else {
      setAwake(true);
    }
  }

  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return (
    <p>
      It&apos;s currently <code>{time}</code> for me, so I am most likely{" "}
      {awake ? "awake" : "asleep"}
    </p>
  );
};
