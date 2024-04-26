"use client";

import { Image } from "@nextui-org/react";
import { Activity, useLanyard } from "use-lanyard";

function getImage(activity: Activity) {
  let image = activity.assets?.large_image;

  if (image?.startsWith("mp:external")) {
    return image?.replace(/mp:external\/([^\/]*)\/(http[s])/g, "$2:/");
  } else {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${image}`;
  }
}

export const ActivitySection = () => {
  let activities;
  const banned_activites = ["Spotify", "ShareX"];

  const { data } = useLanyard("1022842005920940063");
  if (data) {
    if (data.discord_status != "offline") {
      activities = data.activities;
    }
  }

  return (
    <div>
      <div
        className={`${activities ? "" : "hidden"} flex flex-col gap-2 overflow-hidden p-2`}
      >
        {activities?.map((activity) => (
          <div
            key={activity.id}
            className={`${banned_activites.includes(activity.name) ? "hidden" : ""} flex cursor-pointer flex-row gap-4 rounded-lg border border-zinc-800 bg-neutral-900 py-2 pl-2 pr-4 duration-300 hover:scale-105 active:scale-95`}
          >
            <Image
              src={getImage(activity)}
              className="h-[4.5rem] w-[4.5rem]"
              isBlurred={true}
              alt={`${activity.name}`}
            />

            <div className="flex flex-col items-start justify-center">
              <h1 className="text-base font-bold">
                {activity.name.replace("Code", "Visual Studio Code")}
              </h1>

              <p className="text-sm">
                {activity.details}
                <br />
                {activity.state}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
