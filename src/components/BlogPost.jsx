import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import Link from "next/link";

export default function BlogPost({ blok }) {
  const author = blok.author;

  return (
    <article className="blog-post" {...storyblokEditable(blok)}>
      <style>{`
        .blog-post {
          max-width: 800px;
          margin: 40px auto;
        }

        .blog-post img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 8px;
          margin: 20px 0;
        }

        .blog-post h1 {
          margin: 10px 0;
          font-size: 36px;
        }

        .blog-post .date {
          color: #888;
          font-size: 14px;
        }

        .blog-post .summary {
          font-size: 18px;
          color: #555;
          margin: 20px 0;
        }

        .blog-post .author {
          font-size: 14px;
          margin-bottom: 30px;
        }

        .blog-post a {
          color: #333;
        }
      `}</style>

      <p>
        <Link href="/blog">← Tillbaka till bloggen</Link>
      </p>

      {blok.coverImage?.filename && (
        <img src={blok.coverImage.filename} alt="" />
      )}

      <h1>{blok.title}</h1>

      <p className="date">{blok.publishedDate}</p>

      <p className="summary">{blok.summary}</p>

      {author?.content?.name && (
        <p className="author">
          Av{" "}
          <Link href={`/authors/${author.slug}`}>
            {author.content.name}
          </Link>
        </p>
      )}

      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </article>
  );
}