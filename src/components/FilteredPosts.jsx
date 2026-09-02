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
    <section {...storyblokEditable(blok)}>
      {blok.heading && <h2>{blok.heading}</h2>}

      {posts.length === 0 ? (
        <p>{blok.empty_text || "Inga inlägg."}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.uuid}>
              <Link href={`/${post.full_slug}`}>
                {post.content.title}
              </Link>
              {post.content.summary && <p>{post.content.summary}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
