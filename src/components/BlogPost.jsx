import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { renderRichText } from "@storyblok/react";
import Link from "next/link";

export default function BlogPost({ blok }) {
  const renderedContent = renderRichText(blok.content);
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

      {blok.coverImage?.filename && (
        <img
          src={blok.coverImage.filename}
          alt=""
          className="h-auto max-h-96 w-full rounded-lg object-cover"
        />
      )}

      <h1 className="text-4xl font-semibold tracking-tight">{blok.title}</h1>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
        {blok.publishedDate && <time>{blok.publishedDate}</time>}
        {(blok.author ?? []).length > 0 && (
          <>
            {blok.publishedDate && <span aria-hidden="true">·</span>}
            <span className="flex flex-wrap gap-x-2">
              {(blok.author ?? []).map((author, index) => (
                <Link
                  key={index}
                  href={`/authors/${author.slug}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {author.content?.name ?? author.name}
                </Link>
              ))}
            </span>
          </>
        )}
      </div>

      {blok.summary && (
        <p className="text-lg leading-relaxed text-muted-foreground">
          {blok.summary}
        </p>
      )}


      <div
        className="rich-text"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />

      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </article>
  );
}
