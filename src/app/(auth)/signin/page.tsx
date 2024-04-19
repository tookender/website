import { signIn, auth, providerMap } from "@/auth";

export default async function SignInPage() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center bg-grid-white/[0.1]">
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(transparent_10%,black)]"></div>
        <div className="z-20 flex flex-col items-center">
          <h1 className="mt-32 text-8xl font-black">
            Sign in
          </h1>

          <p className="text-xl my-3 font-semibold text-zinc-200">
            Become a certified Korii Bot member today!
          </p>
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                await signIn(provider.id);
              }}
            >
              <button type="submit" className="bg-white/5 backdrop-blur-sm border border-white/10 py-2.5 px-5 rounded-md duration-400 hover:bg-white/10 hover:border-white/20">
                <span className="text-xl">Sign in with {provider.name}</span>
              </button>
            </form>
          ))}
        </div>
      </div>
    </>
  );
}
