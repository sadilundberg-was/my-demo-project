import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function BlogList({ blok, query = "" }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "blog/",
    content_type: "blog-post",
    resolve_relations: "blog -post.author",
    ...(query && { j: query }),
  });

  const stories = data.stories;

  return (
    <section className="blog-list" {...storyblokEditable(blok)}>
      <style>{`
        .blog-list {
          max-width: 800px;
          margin: 40px auto;
        }

        .blog-list article {
          display: flex;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #ddd;
        }

        .blog-list img {
          width: 160px;
          height: 100px;
          object-fit: cover;
          border-radius: 6px;
        }

        .blog-list h2 {
          margin: 0 0 8px;
        }

        .blog-list h2 a {
          color: #222;
          text-decoration: none;
        }

        .blog-list p {
          color: #666;
          margin: 5px 0;
        }

        .blog-list .author {
          font-size: 14px;
        }
      `}</style>

      {blok.heading && <h1>{blok.heading}</h1>}

      {stories.length === 0 ? (
        <p>{blok.empty_text || "Inga inlägg."}</p>
      ) : (
        stories.map((story) => (
          <article key={story.uuid}>
            {story.content.coverImage?.filename && (
              <img
                src={story.content.coverImage.filename}
                alt={story.content.coverImage.alt || story.content.title}
              />
            )}

            <div>
              <h2>
                <Link href={`/${story.full_slug}`}>
                  {story.content.title}
                </Link>
              </h2>

              <p>{story.content.summary}</p>

              {story.content.author?.content?.name && (
                <p className="author">
                  Av {story.content.author.content.name}
                </p>
              )}
            </div>
          </article>
        ))
      )}
    </section>
  );
}