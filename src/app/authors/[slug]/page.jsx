import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "authors/",
    content_type: "author",
  });

  return data.stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();

  let story;
  try {
    const { data } = await storyblokApi.get(`cdn/stories/authors/${slug}`, {
      version: "draft",
    });
    story = data.story;
  } catch {
    notFound();
  }

  return <StoryblokServerComponent blok={story.content} />;
}
