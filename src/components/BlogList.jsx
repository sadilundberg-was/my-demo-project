import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function BlogList({ blok, query = "" }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "blog/",
    content_type: "blog-post",
    resolve_relations: "blog-post.author",
    ...(query && { search_term: query }),
  });

  const stories = data.stories;

  return (
    <section className="space-y-8" {...storyblokEditable(blok)}>
      {blok.heading && (
        <h1 className="text-3xl font-semibold tracking-tight">{blok.heading}</h1>
      )}

      {stories.length === 0 ? (
        <p className="text-muted-foreground">{blok.empty_text || "Inga inlägg."}</p>
      ) : (
        <div className="divide-y divide-border">
          {stories.map((story) => (
            <article key={story.uuid} className="flex gap-5 py-6 first:pt-0 last:pb-0">
              {story.content.coverImage?.filename && (
                <img
                  src={story.content.coverImage.filename}
                  alt={story.content.coverImage.alt || story.content.title}
                  className="h-24 w-40 shrink-0 rounded-md object-cover"
                />
              )}

              <div className="min-w-0 space-y-1.5">
                <h2 className="text-xl font-medium leading-snug">
                  <Link
                    href={`/${story.full_slug}`}
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {story.content.title}
                  </Link>
                </h2>

                {story.content.summary && (
                  <p className="text-muted-foreground">{story.content.summary}</p>
                )}

                {story.content.author?.content?.name && (
                  <p className="text-sm text-muted-foreground">
                    Av {story.content.author.content.name}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
