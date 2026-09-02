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
				<body>
					{headerBlok && <StoryblokServerComponent blok={headerBlok} />}
					<main className='container mx-auto'>
						{children}
					</main>
					
					{footerBlok && <StoryblokServerComponent blok={footerBlok} />}
				</body>
			</html>
		</StoryblokProvider>
	);
}

