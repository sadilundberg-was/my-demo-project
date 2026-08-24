import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import { Button } from '@/components/ui/button';

const variantMap = {
  primary: 'default',
  secondary: 'secondary',
  outline: 'outline',
};

export default function StoryblokButton({ blok }) {
  const { label, link, variant } = blok;
  const buttonVariant = variantMap[variant] ?? 'default';
  const editable = storyblokEditable(blok);

  if (link?.cached_url) {
    return (
      <Button
        {...editable}
        variant={buttonVariant}
        size="lg"
        nativeButton={false}
        render={<Link href={link.cached_url} />}
      >
        {label}
      </Button>
    );
  }

  return (
    <Button {...editable} variant={buttonVariant} size="lg" type="button">
      {label}
    </Button>
  );
}
