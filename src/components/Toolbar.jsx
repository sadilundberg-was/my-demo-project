import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Toolbar({ blok, ...rest }) {
  return (
    <div className="mb-6 space-y-4" {...storyblokEditable(blok)}>
      {blok.blocks?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          {...rest}
        />
      ))}
    </div>
  );
}
