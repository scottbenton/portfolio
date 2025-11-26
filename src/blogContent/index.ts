export interface BlogPostMetadata {
	title: string;
	subtitle?: string;
	datePosted: Date;
	tags?: string[];
	slug: string;
	openGraphImageSrc?: string;
	load: () => Promise<typeof import('*.svx')>;
}

// Define all blog posts here
const blogPostsArray: BlogPostMetadata[] = [
	{
		title: 'Welcome!',
		datePosted: getDate(2020, 7, 19),
		slug: 'welcome',
		load: () => import('./01-Welcome.svx')
	},
	{
		title: 'Caching Content in React',
		subtitle: 'Using the cache API to store API responses using hooks',
		datePosted: getDate(2020, 7, 20),
		tags: ['React', 'Cache'],
		slug: 'caching-react-content',
		load: () => import('./02-Caching.svx')
	},
	{
		title: 'Troubleshooting Javascript Performance Issues for Advent of Code',
		subtitle: 'Day 15: Maps or Objects?',
		datePosted: getDate(2020, 12, 15),
		tags: ['Javascript', 'Performance'],
		slug: 'advent-performance-issues',
		load: () => import('./03-AdventOfCode.svx')
	},
	{
		title: 'Creating a Pomodoro Progressive Web Application',
		subtitle:
			'Using cutting edge PWA features to provide a native application experience, where supported',
		datePosted: getDate(2021, 3, 15),
		tags: ['React', 'PWA'],
		slug: 'pomodoro',
		load: () => import('./04-Pomodoro.svx')
	},
	{
		title: 'Iron Fellowship and Crew Link 3.0.0',
		subtitle: 'The Homebrew Update',
		datePosted: getDate(2024, 5, 23),
		tags: ['Release Notes', 'Iron Fellowship', 'Crew Link'],
		slug: 'if-cl-3-release-notes',
		load: () => import('./05-IronFellowship_3_0_Release.svx')
	},
	{
		title: 'Iron Fellowship and Crew Link 3.1.0',
		subtitle: 'Campaign Types Update',
		datePosted: getDate(2024, 5, 29),
		tags: ['Release Notes', 'Iron Fellowship', 'Crew Link'],
		slug: 'if-cl-3-1-release-notes',
		load: () => import('./06-IronFellowship_3_1_Release.svx')
	},
	{
		title: 'Iron Fellowship and Crew Link 3.3.0',
		subtitle: 'Maps Update',
		datePosted: getDate(2024, 7, 1),
		tags: ['Release Notes', 'Iron Fellowship', 'Crew Link'],
		slug: 'if-cl-3-3-release-notes',
		load: () => import('./07-IronFellowship_3_3_Release.svx')
	},
	{
		title: 'The Iron Link Beta is here!',
		subtitle: 'Version 0.1.0 is open for testing',
		datePosted: getDate(2025, 2, 8),
		tags: ['Release Notes', 'Iron Link'],
		slug: 'iron-link-beta-0-1-0',
		load: () => import('./08-IronLink_0_1_Release.svx')
	},
	{
		title: 'Iron Link Beta 0.2.0',
		subtitle: 'Playsets & Cursed Die',
		datePosted: getDate(2025, 2, 16),
		tags: ['Release Notes', 'Iron Link'],
		slug: 'iron-link-beta-0-2-0',
		openGraphImageSrc: '/assets/IronLink/0-2-0/og.png',
		load: () => import('./09-IronLink_0_2_Release.svx')
	}
	// {
	// 	title: 'Using useEffect',
	// 	subtitle: "React's most misused hook",
	// 	datePosted: new Date(2025, 2, 5),
	// 	tags: ['React', 'JavaScript'],
	// 	slug: 'using-use-effect',
	// 	load: () => import('./10-UseEffect.svx')
	// }

	// Add more blog posts here
];

// Sort by date (newest first)
blogPostsArray.sort((a, b) => {
	return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
});

// Export as sorted array
export const blogPosts = blogPostsArray;

// Export as dictionary keyed by slug
export const blogPostsBySlug = Object.fromEntries(
	blogPostsArray.map((post) => [post.slug, post])
) as Record<string, BlogPostMetadata>;

function getDate(year: number, month: number, day: number): Date {
	return new Date(year, month - 1, day);
}
