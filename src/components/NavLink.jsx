import { storyblokEditable } from "@storyblok/react/rsc";

export default function NavLink({ blok }) {
  const url = blok.link?.url ? blok.link?.url : blok.link?.cached_url;

  return (
    <li {...storyblokEditable(blok)}>
      <a
        href={url}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {blok.label}
      </a>
    </li>
  );
}
