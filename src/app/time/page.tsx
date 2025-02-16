"use client";

import { useState, useEffect } from "react";
import { FaTemperatureLow } from "react-icons/fa6";
import { WiSunrise } from "react-icons/wi";

// Configuration constants
const fontWidthFactors = {
  colfax: 1.1,
  colfax_bold: 1.15,
  mt: 1.05,
  monts: 0.95,
  mr: 1,
  t: 1.4,
  h: 1.15,
  a: 1,
  test: 1.3,
};

function getRegionName(code?: string): string {
  if (!code) return "Loading";
  return (
    new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? "Country"
  );
}

const scaleFactor = 0.7; // Reduce this to make smaller
const maxFontSize = 260; // Maximum allowed font size
const minFontSize = 40; // Minimum allowed font size

const calculateSize = (timeString: string) => {
  const availableWidth = window.innerWidth * 0.9 * scaleFactor;
  const charCount = timeString.replace(/[^0-9]/g, "").length; // Count only digits

  // Calculate base dimensions
  const charWidth = Math.min(availableWidth / (charCount * 1.1), 999);
  let fontSize = Math.floor(charWidth * 1.1 * fontWidthFactors.colfax);

  // Apply size constraints
  fontSize = Math.min(Math.max(fontSize, minFontSize), maxFontSize);

  return {
    fontSize,
    lineHeight: Math.floor(fontSize * 0.9), // Increased line height for better readability
    marginLeft: (window.innerWidth - charCount * charWidth) / 2,
  };
};

export default function Home() {
  const [clockStyle, setClockStyle] = useState({
    fontSize: 100,
    lineHeight: 90,
    marginLeft: 0,
  });

  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("Loading the current date");
  const [weather, setWeather] = useState<{
    temperature: number;
    feelsLike: number;
    minTemp: number;
    maxTemp: number;
    pressure: number;
    humidity: number;
    windSpeed: number;
    windDirection: number;
    main: string;
    sunrise: string;
    sunset: string;
  } | null>();
  const [location, setLocation] = useState<{
    region: string;
    country: string;
    timezone: string;
    loc: string;
  } | null>();
  const [holidays, setHolidays] = useState<{
    date: string;
    holidays: [];
  } | null>();

  useEffect(() => {
    const fetchData = async () => {
      const locationRes = await fetch("/api/location");

      if (!locationRes.ok) {
        setLocation({
          region: "Server",
          country: "Error",
          timezone: "Server/Error",
          loc: "55.751244,37.618423",
        });
      }

      const locationData = await locationRes.json();
      setLocation(locationData["data"]);

      const weatherRes = await fetch(
        `/api/weather?coordinates=${encodeURIComponent(
          locationData["data"].loc
            ? locationData["data"].loc
            : "55.751244,37.618423"
        )}`
      );

      if (!weatherRes.ok) {
        setWeather({
          temperature: 0,
          feelsLike: 0,
          minTemp: 0,
          maxTemp: 0,
          pressure: 0,
          humidity: 0,
          windSpeed: 0,
          windDirection: 0,
          main: "Server Error",
          sunrise: "",
          sunset: "",
        });
      }

      let weatherData = await weatherRes.json();
      weatherData = weatherData["data"]
      console.log(weatherData)
      setWeather({
        temperature: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        minTemp: weatherData.main.temp_min,
        maxTemp: weatherData.main.temp_max,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,

        windSpeed: weatherData.wind.speed,
        windDirection: weatherData.wind.deg,
        main: weatherData.weather[0].main,
        sunrise: new Date((weatherData.sys.sunrise + weatherData.timezone) * 1000)
          .toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        sunset: new Date((weatherData.sys.sunset + weatherData.timezone) * 1000)
          .toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      })
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB")); // 24h format
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }, 1000);

    // Handle resizing
    const handleResize = () => {
      const dimensions = calculateSize(time);
      setClockStyle(dimensions);
    };

    // Initial calculation
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
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

        {/* const { coord, weather, main, wind, clouds, visibility, sys, timezone, name } = weatherData; */}

        <div className="text-base md:text-lg text-neutral-200/80 font-light">
          {weather?.main.includes("Server Error") ? (
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
