interface TechItemProps {
  name: string;
  color: string;
  children: React.ReactNode;
}

export const TechItem = ({ name, color, children }: TechItemProps) => {
  return (
    <div
      className={`flex cursor-pointer select-none flex-row items-center justify-center gap-2 rounded-full border border-zinc-800 bg-neutral-800 px-4 py-2 duration-300 active:scale-95 hover:border-[${color}]`}
    >
      {children}
      {name}
    </div>
  );
};
