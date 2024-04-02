import MemberHappinessGraph from "@/components/graph";
import { TabsContainer } from "@/components/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export const Happiness = () => {
  return (
    <TabsContent
      value="happiness"
      className="border border-zinc-800 rounded-md"
    >
      <TabsContainer>
        <MemberHappinessGraph />
      </TabsContainer>
    </TabsContent>
  );
};
