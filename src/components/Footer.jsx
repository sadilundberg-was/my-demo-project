import { storyblokEditable } from "@storyblok/react/rsc";

export default function Footer({ blok }) {
  return (
    <footer
      className="mt-auto space-y-1 border-t border-border py-6 text-sm text-muted-foreground"
      {...storyblokEditable(blok)}
    >
      <p>{blok.copyright}</p>
      {blok.description && <p>{blok.description}</p>}
    </footer>
  );
}
