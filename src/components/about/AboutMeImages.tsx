import Image from "next/image"

export const AboutMeImages = () => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 mt-6">
      <Image
        height={1599}
        width={899}
        alt="some cool mountains in poland"
        src="/cool/mountains.webp"
        className="h-[367px] w-[324px] rounded-large object-cover"
      />

      <Image
        height={1920}
        width={1080}
        alt="a very nice view at the mountains from a house"
        src="/cool/nature.webp"
        className="h-[367px] w-[324px] rounded-large object-cover"
      />

      <Image
        height={2016}
        width={1512}
        alt="some cool animal i found"
        src="/cool/animal.webp"
        className="h-[367px] w-[324px] rounded-large object-cover"
      />

      <Image
        height={1200}
        width={1600}
        alt="on a cool ship"
        src="/cool/ship.webp"
        className="h-[367px] w-[324px] rounded-large object-cover"
      />

      <Image
        height={1599}
        width={899}
        alt="my silly dog"
        src="/dogs/dog19.webp"
        className="h-[367px] w-[324px] rounded-large object-cover"
      />

      <Image
        height={1600}
        width={1200}
        alt="someones silly cat"
        src="/cool/cat.webp"
        className="h-[367px] w-[324px] rounded-large object-cover"
      />
    </div>
  )
}