// time/useWeatherData.ts
import { useState, useEffect } from "react";

export const useWeatherData = () => {
  const [weather, setWeather] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationRes = await fetch("/api/location");
        if (!locationRes.ok) throw new Error("Location fetch failed");

        const locationData = await locationRes.json();
        const loc = locationData.data.loc || "55.751244,37.618423";

        setLocation({
          region: locationData.data.region,
          country: locationData.data.country,
          timezone: locationData.data.timezone,
          loc,
        });

        const weatherRes = await fetch(
          `/api/weather?coordinates=${encodeURIComponent(loc)}`
        );
        if (!weatherRes.ok) throw new Error("Weather fetch failed");

        const weatherData = await weatherRes.json();
        const data = weatherData.data;

        setWeather({
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          windDirection: data.wind.deg,
          main: data.weather[0].main,
          sunrise: new Date(
            (data.sys.sunrise + data.timezone) * 1000
          ).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
          sunset: new Date(
            (data.sys.sunset + data.timezone) * 1000
          ).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        });
      } catch (error) {
        setLocation({
          region: "Server",
          country: "Error",
          timezone: "Europe/Moscow",
          loc: "55.751244,37.618423",
        });
        setWeather({
          main: "Server Error",
          temperature: 0,
          feelsLike: 0,
          sunrise: "",
          sunset: "",
        });
      }
    };

    fetchData();
  }, []);

  return { weather, location };
};
