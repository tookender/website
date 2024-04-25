import { Image, Accordion, AccordionItem } from "@nextui-org/react";
import { Activity, useLanyard } from "use-lanyard";
import { useLastFM } from "use-last-fm";

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
  // TODO: Create a server component and do this in there using fetch()
  // So we can access .env securely to get the API key
  // https://discord.com/channels/752553802359505017/1232738655836180591/1232830500545101925
  const lastFM = useLastFM("tookender", "07c30fa481f95861b23a8f6a82b303e7");

  if (data) {
    if (data.discord_status != "offline") {
      activities = data.activities;
    }
  }

  return (
    <div>
      <p
        className={`${activities ? "hidden" : lastFM.song ? "hidden" : ""} font-light italic text-neutral-400`}
      >
        will be shown...
      </p>

      <div
        className={`${activities ? "" : "hidden"} flex flex-col gap-2 overflow-hidden p-2`}
      >
        <div
          className={`${lastFM.song ? "" : "hidden"} flex cursor-pointer flex-row gap-4 rounded-lg border border-zinc-800 bg-neutral-900 py-2 pl-2 pr-4 duration-300 hover:scale-105 active:scale-95`}
        >
          <Image
            src={lastFM.song?.art}
            className="h-[4.5rem] w-[4.5rem]"
            isBlurred={true}
            alt={`${lastFM.song?.name} by ${lastFM.song?.artist}`}
          />

          <div className="flex flex-col items-start justify-center">
            <h1 className="text-base font-bold">Spotify</h1>

            <p className="text-sm">
              {lastFM.song?.name}
              <br />
              {lastFM.song?.artist}
            </p>
          </div>
        </div>

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
