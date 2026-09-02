import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function FilteredPosts({ blok, slug }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "blog/",
    content_type: "blog-post",
    sort_by: "content.publishedDate:desc",
    filter_query: {
      category: { in: slug },
    },
  });

  const posts = data.stories;

  return (
    <section className="space-y-6" {...storyblokEditable(blok)}>
      {blok.heading && (
        <h2 className="text-2xl font-semibold tracking-tight">{blok.heading}</h2>
      )}

      {posts.length === 0 ? (
        <p className="text-muted-foreground">{blok.empty_text || "Inga inlägg."}</p>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.uuid} className="space-y-1.5 py-5 first:pt-0 last:pb-0">
              <Link
                href={`/${post.full_slug}`}
                className="text-lg font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                {post.content.title}
              </Link>
              {post.content.summary && (
                <p className="text-muted-foreground">{post.content.summary}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
