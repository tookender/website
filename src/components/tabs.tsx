interface TabProps {
  children?: React.ReactNode;
}

export const TabContainer = ({ children }: TabProps) => {
  return <div className="mx-2 flex flex-col gap-2">{children}</div>;
};
