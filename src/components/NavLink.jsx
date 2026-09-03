import { storyblokEditable } from "@storyblok/react/rsc";
import Applink from "./AppLink";

function getHref(link) {
  if (!link) return undefined;

  if (link.linktype === "email") {
    return `mailto:${link.email || link.url || ""}`;
  }

  if (link.linktype === "url" || link.linktype === "asset") {
    return link.url || link.cached_url;
  }

  const slug = (link.story?.full_slug || link.cached_url || "")
    .replace(/^\/+|\/+$/g, "");

  if (!slug || slug === "home") return "/";
  return `/${slug}`;
}

export default function NavLink({ blok }) {
  const href = getHref(blok.link);
  const className =
    "text-sm text-muted-foreground transition-colors hover:text-foreground";
  const isExternal =
    blok.link?.linktype === "url" || href?.startsWith("http");

  return (
    <li {...storyblokEditable(blok)}>
      {isExternal ? (
        <a href={href} className={className} target={blok.link?.target}>
          {blok.label}
        </a>
      ) : (
        <Applink href={href || "/"} className={className}>
          {blok.label}
        </Applink>
      )}
    </li>
  );
}
