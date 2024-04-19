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
      <div className="flex flex-col h-screen justify-center items-center mx-4 bg-gradient-to-br from-neutral-900 to-black">
        <h1 className="text-5xl font-black mb-4 font-code">
          <span className="text-neutral-500">~</span> korino/posts <span className="text-neutral-500">~</span>
        </h1>

        <p className="text-neutral-200 font-sm mb-12 text-center">
          Welcome to my personal page where I post about random stuff.
          <br/>
          Don&apos;t except to see a lot of stuff here, mainly just use this when I&apos;m bored.
        </p>

        <h2 className="text-4xl font-black mb-4 font-code">
          <span className="text-neutral-500">+</span> List of posts <span className="text-neutral-500">+</span>
        </h2>
      
        {getAllPosts().map(post => <div className="flex flex-col gap-1 max-w-[500px]" key={post.title}>
          <a href={`/posts/${post.slug}`} className="flex flex-row items-center gap-2">
            <span className="underline text-xl font-bold hover:text-sky-500 duration-300">
              {post.title}
            </span>

            <span className="text-sm text-neutral-300">
              [{post.time}]
            </span>
          </a>

          <p className="text-neutral-400 text-sm">
            <span className="text-neutral-500">[{post.date}]</span> {post.tags}
          </p>

          <p className="text-neutral-200 text-md">
            {post.excerpt}
          </p>
        </div>)}
      </div>
    </>
  );
}
