import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import PostCard from "@/components/PostCard"; 
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-8">
      <h1 className="text-4xl font-bold mb-8 text-theme-green">Ini Blog</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const imgUrl = post.mainImage
            ? urlFor(post.mainImage)?.width(600).height(400).url()
            : undefined;

          const excerpt = Array.isArray(post.body)
            ? post.body
                .map((b: any) =>
                  b.children ? b.children.map((c: any) => c.text).join(" ") : ""
                )
                .join(" ")
                .slice(0, 100) + "..."
            : undefined;

          return (
            <li key={post._id}>
              <PostCard
                slug={post.slug.current}
                title={post.title}
                imageUrl={imgUrl}
                excerpt={excerpt}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
