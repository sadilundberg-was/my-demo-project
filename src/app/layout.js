import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';
import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export default async function RootLayout({ children }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.get('cdn/stories/config', {
		version: 'draft',
		resolve_links: 'url',
	});

	const config = data.story.content;
	const headerBlok = config.header?.[0];
	const footerBlok = config.footer?.[0];
	return (
		<StoryblokProvider>
			<html lang="en">
				<body className="min-h-screen antialiased">
					<div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4">
						{headerBlok && <StoryblokServerComponent blok={headerBlok} />}
						<main className="flex-1 py-10">{children}</main>
						{footerBlok && <StoryblokServerComponent blok={footerBlok} />}
					</div>
				</body>
			</html>
		</StoryblokProvider>
	);
}
