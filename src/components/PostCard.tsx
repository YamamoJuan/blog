import Link from "next/link";

type PostCardProps = {
  slug: string;
  title: string;
  imageUrl?: string;
  excerpt?: string;
};

export default function PostCard({ slug, title, imageUrl, excerpt }: PostCardProps) {
  return (
    <Link href={`/${slug}`}>
      <div className="bg-card-green rounded-lg overflow-hidden shadow hover:shadow-lg transition hover:scale-[1.02] duration-200 cursor-pointer">
        {imageUrl && (
          <div className="h-48 w-full bg-gray-100 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {excerpt && (
            <p className="mt-2 text-gray-200 text-sm line-clamp-3">{excerpt}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
