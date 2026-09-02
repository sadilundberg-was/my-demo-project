// components/SearchBar.jsx
import { storyblokEditable } from "@storyblok/react/rsc";

export default function SearchBar({ blok, query = "" }) {
  return (
    <form action="/blog" method="get" {...storyblokEditable(blok)}>
      {blok.label && <label htmlFor="search">{blok.label}</label>}
      <input
        type="search"
        id="search"
        name="q"
        placeholder={blok.placeholder}
        defaultValue={query}
      />
      <button type="submit">Sök</button>
    </form>
  );
}
