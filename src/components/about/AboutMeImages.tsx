import Image from "next/image"

export const AboutMeImages = () => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
      <Image
        height={1599}
        width={899}
        alt="some cool mountains in poland"
        src="/cool/mountains.webp"
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
        height={1599}
        width={899}
        alt="a very nice view at the mountains from a house"
        src="/cool/nature.webp"
        className="h-[367px] w-[324px] rounded-large object-cover"
      />
    </div>
  )
}