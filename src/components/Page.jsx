import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const Page = ({ blok, ...rest }) => (
	<div className="space-y-8" {...storyblokEditable(blok)}>
		{blok.body?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} {...rest} />
		))}
	</div>
);

export default Page;
