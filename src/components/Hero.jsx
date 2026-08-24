import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';

const alignments = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
};

export default function Hero({ blok }) {
  const { headline, text, image, alignment, buttons } = blok;
  const alignClass = alignments[alignment] ?? alignments.left;
  const backgroundImage = image?.filename
    ? { backgroundImage: `url(${image.filename})` }
    : undefined;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative overflow-hidden bg-slate-950 bg-cover bg-center px-8 py-5 text-white md:px-12 md:py-16"
      style={backgroundImage}
    >
      <div className="absolute inset-0 bg-slate-950/70" aria-hidden="true" />

      <div className={`relative z-10 flex flex-col gap-5 ${alignClass}`}>
        {headline && (
          <h1 className="m-0 text-4xl font-semibold tracking-tight md:text-5xl">
            {headline}
          </h1>
        )}

        {text && (
          <p className="m-0 max-w-xl text-lg leading-relaxed text-white/80">
            {text}
          </p>
        )}

        {buttons?.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {buttons.map((nestedBlok) => (
              <StoryblokServerComponent
                blok={nestedBlok}
                key={nestedBlok._uid}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
