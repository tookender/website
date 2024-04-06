import MemberHappinessGraph from "@/components/graph";
import { TabsContainer } from "@/components/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export const Happiness = () => {
  return (
    <TabsContent
      value="happiness"
      className="rounded-md border border-zinc-800"
    >
      <TabsContainer>
        <MemberHappinessGraph />
      </TabsContainer>
    </TabsContent>
  );
};
