import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default async function BlogPage({ searchParams }) {
  const query = (await searchParams).q ?? "";
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/blog/", {
    version: "draft",
  });

  return <StoryblokServerComponent blok={data.story.content} query={query} />;
}
