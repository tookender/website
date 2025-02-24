"use client";

import { useTime } from "./useTime";
import { getRegionName, calculateSize } from "./utils";
import { useWeatherData } from "./useWeatherData";

import { useState, useEffect } from "react";

export default function Home() {
  const [clockStyle, setClockStyle] = useState({
    fontSize: 100,
    lineHeight: 90,
    marginLeft: 0,
  });

  const { weather, location } = useWeatherData();
  const { time, date } = useTime(location?.timezone);

  useEffect(() => {
    const handleResize = () => {
      const dimensions = calculateSize(time);
      setClockStyle(dimensions);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [time]);

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-start">
        <p className="text-base md:text-lg text-neutral-200/80 font-light">
          Time in{" "}
          <u>
            {location?.region ? location.region : "Loading"},{" "}
            {getRegionName(location?.country)}
          </u>{" "}
          now:
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center py-4">
        <h1
          id="clock"
          className="font-time font-black text-neutral-200/90"
          style={{
            fontSize: `${clockStyle.fontSize}px`,
            lineHeight: `${clockStyle.lineHeight}px`,
          }}
        >
          {time}
        </h1>
      </div>

      <div className="flex flex-col items-end justify-end">
        <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-neutral-200/80 font-light">
          {date}
        </h2>

        <div className="text-base md:text-lg text-neutral-200/80 font-light">
          {weather?.main?.includes("Server Error") ? (
            <p>Server Error, something went wrong!</p>
          ) : (
            <div className="flex flex-col items-end">
                <p>Sun: ↑ {weather?.sunrise} ↓ {weather?.sunset} </p> 
                <p>Weather: {weather?.temperature}°C ({weather?.feelsLike}°C)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}