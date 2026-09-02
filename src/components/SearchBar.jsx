import { storyblokEditable } from "@storyblok/react/rsc";

export default function SearchBar({ blok, query = "" }) {
  return (
    <form
      action="/blog"
      method="get"
      className="mb-8 flex flex-wrap items-end gap-3"
      {...storyblokEditable(blok)}
    >
      <div className="min-w-48 flex-1 space-y-1.5">
        {blok.label && (
          <label htmlFor="search" className="text-sm text-muted-foreground">
            {blok.label}
          </label>
        )}
        <input
          type="search"
          id="search"
          name="q"
          placeholder={blok.placeholder}
          defaultValue={query}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Sök
      </button>
    </form>
  );
}
