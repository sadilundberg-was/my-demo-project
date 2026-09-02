import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Header({ blok }) {
  return (
    <header
      className="flex items-center justify-between gap-6 border-b border-border py-5"
      {...storyblokEditable(blok)}
    >
      {blok.logo?.filename && (
        <img
          src={blok.logo.filename}
          alt="Logotyp"
          className="h-8 w-auto"
        />
      )}
      <nav>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {blok.navigation?.map((navBlok) => (
            <StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
