import { storyblokEditable } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import Link from "next/link";

export default function Author({ blok }) {
  const bio = blok.bio ? renderRichText(blok.bio) : null;

  return (
    <article className="space-y-5" {...storyblokEditable(blok)}>
      <p>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Tillbaka till bloggen
        </Link>
      </p>

      {blok.avatar?.filename && (
        <img
          src={blok.avatar.filename}
          alt={blok.name || ""}
          className="size-40 rounded-full object-cover"
        />
      )}

      <h1 className="text-4xl font-semibold tracking-tight">{blok.name}</h1>

      {bio && (
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: bio }}
        />
      )}
    </article>
  );
}
