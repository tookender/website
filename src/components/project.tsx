import { Image } from "@nextui-org/react";

interface ProjectProps {
  title: string;
  link: string;
  icon?: string;
  rounded?: boolean;
  description: string;
  children: React.ReactNode;
}

export const Project = ({
  title,
  link,
  icon,
  rounded,
  description,
  children,
}: ProjectProps) => {
  const id = title.toLowerCase();
  return (
    <a
      className="md:px-18 flex h-[570px] max-w-[80vw] flex-col items-center gap-2 overflow-hidden rounded-3xl bg-neutral-900 px-4 pt-8 duration-300 hover:bg-[#1b1b1b] active:scale-[0.97] md:w-[650px] md:max-w-[600px]"
      href={link}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={`/logos/${icon ? icon : `${id}.svg`}`}
          width={32}
          height={32}
          alt={`Icon of ${title}`}
          className={`${rounded ? `rounded-full` : ``}`}
        />
        <h1 className="text-5xl font-semibold text-neutral-100 ">{title}</h1>
        <div className="mx-2 my-2 flex flex-wrap items-center justify-center gap-2 md:my-0 md:flex-row">
          {children}
        </div>

        <p className="w-2/3 text-center text-neutral-400">{description}</p>
      </div>

      <div>
        <Image
          src={`/previews/${id}.webp`}
          alt={`Preview of ${id}`}
          className="relative bottom-10 mt-16 rounded-2xl md:mx-auto md:w-[600px]"
          width="500"
          height="420"
        />
      </div>
    </a>
  );
};
