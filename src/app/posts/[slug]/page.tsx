import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Image } from "@nextui-org/image";
import { PostBody } from "@/components/post-body";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <div>
        <article className="mx-4 items-center justify-center sm:mx-auto mb-32 mt-28 flex max-w-3xl flex-col">
          <Image className="max-h-80" src={post.coverImage} alt="Cover image" />
  
          <div className="mt-8 flex flex-col gap-1 text-center font-code">
            <h1 className="text-4xl md:text-5xl font-bold mx-6 text-[#D1D5DB]">{post.title}</h1>

            <p className="mt-2 text-sm text-neutral-400">{post.tags}</p>
            <p className="mt-3 text-sm text-neutral-400">{post.time}</p>

            <div className="flex flex-row items-center justify-center text-sm text-neutral-400">
              by{" "}
              <Image
                className="ml-1 mr-0.5 size-4"
                height={64}
                width={64}
                src={post.author.picture}
                alt={`${post.author.name}'s profile picture`}
              />{" "}
              {post.author.name}, {post.date}
            </div>
          </div>
          <PostBody content={content} />
        </article>
      </div>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    openGraph: {
      title: title,
      url: `htps://korino.dev/posts/${post.slug}`,
      description: post.description,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}