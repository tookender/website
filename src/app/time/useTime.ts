import { useState, useEffect } from "react";

export const useTime = (timezone?: string) => {
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("Loading the current date");

  useEffect(() => {
    if (!timezone) return;

    const fetchTime = async () => {
      try {
        const response = await fetch(
          `/api/time?timezone=${encodeURIComponent(timezone)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch time");
        }

        const data = await response.json();
        document.title = `${data.time}`;
        setTime(data.time);
        setDate(data.date);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [timezone]);

  return { time, date };
};
