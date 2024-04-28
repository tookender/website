import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-screen">
      <SignIn path="/sign-in" />
    </div>
  );
}