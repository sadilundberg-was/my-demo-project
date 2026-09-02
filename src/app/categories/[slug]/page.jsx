import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "categories/",
    content_type: "category",
  });

  return data.stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/category-page", {
    version: "draft",
  });

  return (
    <StoryblokServerComponent blok={data.story.content} slug={slug} />
  );
}
