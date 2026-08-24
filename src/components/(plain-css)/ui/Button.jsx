import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import './Button.css';

const buttonVariants = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  outline: 'button--outline',
};

export default function Button({ blok }) {
  const { label, link, variant } = blok;
  const className = `button ${buttonVariants[variant] ?? buttonVariants.primary}`;
  const editable = storyblokEditable(blok);

  if (link?.cached_url) {
    return (
      <Link {...editable} className={className} href={link.cached_url}>
        {label}
      </Link>
    );
  }

  return (
    <button {...editable} className={className} type="button">
      {label}
    </button>
  );
}
