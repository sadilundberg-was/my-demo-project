import Page from '@/components/Page';
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import Teaser from '@/components/Teaser';
import Hero from '@/components/Hero';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import BlogPost from '@/components/BlogPost';
import BlogList from '@/components/BlogList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavLink from '@/components/NavLink';
import FilteredPosts from '@/components/FilteredPosts';
import Toolbar from '@/components/Toolbar';
import SearchBar from '@/components/SearchBar';
import Author from '@/components/Author';

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components: {
		page: Page,
		feature: Feature,
		grid: Grid,
		teaser: Teaser,
		hero: Hero,
		"blog-post": BlogPost,
		"blog-list": BlogList,
		header: Header,
		footer: Footer,
		"nav-link": NavLink,
		"filtered-posts": FilteredPosts,
		toolbar: Toolbar,
		"search-bar": SearchBar,
		author: Author,
	},
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: process.env.STORYBLOK_REGION || 'eu',
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: process.env.STORYBLOK_API_BASE_URL
			? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
	},
});
