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
          🏷️ I&apos;m currently...
        </h1>

        <div className="mt-12 flex flex-col items-center justify-center gap-1">
          <h1 className="text-xl font-bold">Currently listening to:</h1>

          <p
            className={`${song ? "hidden" : "block"}`}
          >
            Nothing at all.
          </p>

          {/* <iframe
            className={`h-[80px] w-[400px] rounded-2xl$ {song ? "block" : "hidden"}`}
            src={`https://open.spotify.com/embed/track/${lastFM}`}
          /> */}
        </div>
      </div>
    </div>
  )
}