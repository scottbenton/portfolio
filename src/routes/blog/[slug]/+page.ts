import { error } from '@sveltejs/kit';
import { blogPostsBySlug } from '../../../blogContent';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const slug = params.slug;

	const post = blogPostsBySlug[slug];
	if (!post) {
		error(404, 'Post not found');
	}
	const content = post.load();

	return {
		post,
		content
	};
};
