import { TimeStatus } from "@/components/portfolio/time";
import { Image } from "@nextui-org/image";
import { useLanyard } from "use-lanyard";
import { useLastFM } from "use-last-fm";

export const Activity = () => {
  let song, activities;
  const { data } = useLanyard("1022842005920940063");
  const lastFM = useLastFM("tookender", "e18ea12c25c865552c050a90f7c8b844");

  if (lastFM.status === "playing") {
    song = true;
  } else {
    song = false;
  }

  if (data) {
    if (data.discord_status != "offline") {
      activities = data.activities;
    }
  }

  return (
    <div className="mb-12 mt-6 flex w-[90vw] flex-col">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-extrabold sm:text-6xl">
          🏷️ Other things
        </h1>

        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <h1>
            It&apos;s currently <TimeStatus />
          </h1>

          <h1 className="text-2xl font-bold">
            Listening to...
          </h1>

          <p className={`${song ? "hidden" : "block"}`}>nothing, but I like this song</p>

          <div
            className={`flex flex-row gap-4 cursor-pointer rounded-lg border border-zinc-800 bg-neutral-900 py-2 pl-2 pr-4 duration-300 hover:scale-105 active:scale-95`}
          >
            <Image
              src={lastFM.song ? lastFM.song.art : "https://lastfm.freetls.fastly.net/i/u/300x300/262f8b7d976e084cec735dc2f5259811.jpg"}
              className="h-[4.5rem] w-[4.5rem]"
              isBlurred={true}
              alt={`${lastFM.song ? lastFM.song.name : "Star Shopping"} by ${lastFM.song ? lastFM.song.artist : "Lil Peep"}`}
            />

            <div className="flex flex-col items-start justify-center">
              <h1 className="text-base font-bold">{lastFM.song ? lastFM.song.name : "Star Shopping"}</h1>

              <p className="text-sm">{lastFM.song ? lastFM.song.artist : "Lil Peep"}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-bold">
            Doing...
          </h1>

          <p className={`${song ? "hidden" : "block"}`}>nothing, but I like coding and playing video games</p>

          <div
            className={`flex flex-row gap-4 ${song ? "block" : "hidden"} cursor-pointer rounded-lg border border-zinc-800 bg-neutral-900 py-2 pl-2 pr-4 duration-300 hover:scale-105 active:scale-95`}
          >
            <Image
              src={lastFM.song?.art}
              className="h-[4.5rem] w-[4.5rem]"
              isBlurred={true}
              alt={`${lastFM.song?.name} by ${lastFM.song?.artist}`}
            />

            <div className="flex flex-col items-start justify-center">
              <h1 className="text-base font-bold">{lastFM.song?.name}</h1>

              <p className="text-sm">{lastFM.song?.artist}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
