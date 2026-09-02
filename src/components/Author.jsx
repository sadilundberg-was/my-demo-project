import { storyblokEditable } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import Link from "next/link";

export default function Author({ blok }) {
  const bio = blok.bio ? renderRichText(blok.bio) : null;

  return (
    <article className="author-page" {...storyblokEditable(blok)}>
      <style>{`
        .author-page {
          max-width: 800px;
          margin: 40px auto;
        }

        .author-page img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 50%;
          margin: 20px 0;
        }

        .author-page h1 {
          margin: 10px 0;
          font-size: 36px;
        }

        .author-page a {
          color: #333;
        }
      `}</style>

      <p>
        <Link href="/blog">← Tillbaka till bloggen</Link>
      </p>

      {blok.avatar?.filename && (
        <img src={blok.avatar.filename} alt={blok.name || ""} />
      )}

      <h1>{blok.name}</h1>
    </article>
  );
}
