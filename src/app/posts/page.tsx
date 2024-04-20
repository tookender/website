import { Metadata } from "next";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "korino/posts",
  description: "A list of all my posts.",
  openGraph: {
    url: "https://korino.dev/posts",
    title: "korino/posts",
    description: "A list of all my posts.",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-neutral-900 to-black">
        <div className="mx-8 flex flex-col items-center justify-center">
          <h1 className="mb-4 font-code text-5xl font-black">
            <span className="text-neutral-500">~</span> korino/posts{" "}
            <span className="text-neutral-500">~</span>
          </h1>

          <p className="font-sm mb-12 max-w-72 text-center text-neutral-200">
            Welcome to my personal page where I post about random stuff.
          </p>

          <h2 className="mb-4 font-code text-4xl font-black">
            <span className="text-neutral-500">+</span> List of posts{" "}
            <span className="text-neutral-500">+</span>
          </h2>

          {getAllPosts().map((post) => (
            <div className="flex max-w-[500px] flex-col gap-1" key={post.title}>
              <a
                href={`/posts/${post.slug}`}
                className="flex flex-row items-center gap-2"
              >
                <span className="text-xl font-bold underline duration-300 hover:text-sky-500">
                  {post.title}
                </span>

                <span className="text-sm text-neutral-300">[{post.time}]</span>
              </a>

              <p className="text-sm text-neutral-400">
                <span className="text-neutral-500">[{post.date}]</span>{" "}
                {post.tags}
              </p>

              <p className="text-md text-neutral-200">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
