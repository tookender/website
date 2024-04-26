import { Image } from "@nextui-org/image";

export async function SpotifyComponent() {
  const username = "tookender";
  const token = process.env.LASTFM_KEY;

  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${token}&format=json&limit=1`;

  const data = await fetch(url);
  const json = await data.json();
  const track = json["recenttracks"]["track"][0];

  const art = track["image"][3]["#text"];
  const song = track["name"];
  const artist = track["artist"]["#text"];

  return (
    <div
      className={`${song ? "" : "hidden"} mx-2 flex cursor-pointer flex-row gap-4 rounded-lg border border-zinc-800 bg-neutral-900 py-2 pl-2 pr-4 duration-300 hover:scale-105 active:scale-95`}
    >
      <Image
        src={art}
        className="h-[4.5rem] w-[4.5rem]"
        isBlurred={true}
        alt={`${song} by ${artist}`}
      />

      <div className="flex flex-col items-start justify-center">
        <h1 className="text-base font-bold">Spotify</h1>

        <p className="text-sm">
          {song}
          <br />
          {artist}
        </p>
      </div>
    </div>
  );
}
