import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)}>
      {blok.logo?.filename && (
        <img src={blok.logo.filename} alt="Logotyp" />
      )}
      <nav>
        <ul>
          {blok.navigation?.map((navBlok) => (
            <StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
